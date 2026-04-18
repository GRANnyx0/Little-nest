import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Send, Loader2, User, Bot, Sparkles, MessageCircle, HelpCircle, Baby, Heart } from "lucide-react";
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || "" });

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
}

const SUGGESTIONS = [
  { text: "Help with sleep schedule", icon: Baby },
  { text: "Signs of teething", icon: HelpCircle },
  { text: "First feeding tips", icon: Sparkles },
  { text: "Soothing a crying baby", icon: Heart },
];

export function AIHelp() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleSend = async (textOverride?: string) => {
    const textToSend = textOverride || input;
    if (!textToSend.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: textToSend
    };

    setMessages(prev => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: textToSend,
        config: {
          systemInstruction: "You are a helpful, warm, and safe baby care assistant for \"Little Nest\". Answer simply, safely, and warmly. If the question is medical, always advise consulting a pediatrician. Your tone is empathetic and clear. You prioritize safety above all else."
        }
      });

      const text = response.text;
      
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: text || "I'm sorry, I couldn't process that. Please try again."
      };

      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      console.error("AI Error:", error);
      let errorMessage = "I'm having a little trouble connecting right now. Please try again in a moment.";
      
      if (error instanceof Error) {
        if (error.message.includes("API_KEY_INVALID")) {
          errorMessage = "There seems to be an issue with the AI configuration. Please check your settings.";
        }
      }

      setMessages(prev => [...prev, {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: errorMessage
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-[calc(100vh-64px)] bg-stone-50 flex flex-col relative overflow-hidden font-sans">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-100/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-100/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      {/* Header */}
      <header className="relative z-10 pt-12 pb-8 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex p-3 bg-white rounded-2xl shadow-sm border border-stone-100 mb-6"
        >
          <Bot className="w-8 h-8 text-stone-700" />
        </motion.div>
        <h1 className="font-serif text-5xl font-light text-stone-900 tracking-tight leading-none mb-4">
          Nest <span className="italic font-normal">Assistant</span>
        </h1>
        <p className="text-stone-500 font-light text-lg max-w-md mx-auto">
          Warm, simple guidance for your parenting journey.
        </p>
      </header>

      {/* Chat Area */}
      <div className="flex-1 relative z-10 max-w-4xl w-full mx-auto px-6 overflow-hidden flex flex-col">
        <div 
          ref={scrollRef}
          className="flex-1 overflow-y-auto pb-32 space-y-10 scrollbar-hide no-scrollbar"
        >
          {messages.length === 0 && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="py-12 space-y-10"
            >
              <div className="bg-white/60 backdrop-blur-md rounded-[40px] p-10 border border-white/40 shadow-sm text-center">
                <h2 className="font-serif text-3xl font-light text-stone-800 mb-4">How can I help you today?</h2>
                <p className="text-stone-500 mb-8 max-w-sm mx-auto">
                  Ask me anything about feeding, sleep, or baby care milestones.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {SUGGESTIONS.map((s) => (
                    <button
                      key={s.text}
                      onClick={() => handleSend(s.text)}
                      className="group flex items-center gap-3 p-4 bg-white hover:bg-stone-50 border border-stone-200 rounded-2xl transition-all hover:scale-[1.02] text-left shadow-sm"
                    >
                      <div className="p-2 bg-stone-50 group-hover:bg-amber-100 rounded-lg transition-colors">
                        <s.icon className="w-5 h-5 text-stone-600 transition-colors group-hover:text-amber-700" />
                      </div>
                      <span className="text-stone-700 font-medium text-sm">{s.text}</span>
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          <AnimatePresence>
            {messages.map((msg, idx) => (
              <motion.div
                key={msg.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className={`flex gap-6 ${msg.role === "user" ? "flex-row-reverse" : "items-start"}`}
              >
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 shadow-sm border ${
                  msg.role === "user" ? "bg-stone-100 border-stone-200" : "bg-white border-stone-100"
                }`}>
                  {msg.role === "user" ? <User className="w-6 h-6 text-stone-600" /> : <Bot className="w-6 h-6 text-stone-700" />}
                </div>
                <div className={`relative max-w-[80%] ${msg.role === "user" ? "text-right" : ""}`}>
                  <div className={`p-8 rounded-[40px] shadow-sm leading-relaxed ${
                    msg.role === "user" 
                      ? "bg-stone-900 text-white rounded-tr-none font-medium text-lg" 
                      : "bg-white text-stone-800 rounded-tl-none font-serif text-xl font-light border border-stone-100"
                  }`}>
                    {msg.content}
                  </div>
                  <span className="text-[10px] text-stone-400 uppercase tracking-widest mt-3 block">
                    {msg.role === "user" ? "You" : "Nest Assistant"}
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

          {isLoading && (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex gap-6 items-start"
            >
              <div className="w-12 h-12 rounded-2xl bg-white border border-stone-100 flex items-center justify-center animate-pulse">
                <Loader2 className="w-6 h-6 text-stone-400 animate-spin" />
              </div>
              <div className="bg-white border border-stone-100 p-8 rounded-[40px] rounded-tl-none min-w-[120px]">
                <div className="flex gap-2">
                  <div className="w-2 h-2 bg-stone-200 rounded-full animate-bounce [animation-delay:-0.3s]" />
                  <div className="w-2 h-2 bg-stone-200 rounded-full animate-bounce [animation-delay:-0.15s]" />
                  <div className="w-2 h-2 bg-stone-200 rounded-full animate-bounce" />
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>

      {/* Input Bar */}
      <div className="absolute bottom-0 left-0 w-full p-8 z-20">
        <div className="max-w-4xl mx-auto relative group">
          <div className="absolute inset-0 bg-stone-900/5 blur-2xl group-focus-within:bg-amber-900/10 transition-colors rounded-[32px]" />
          <div className="relative bg-white/80 backdrop-blur-xl border border-white/60 shadow-2xl rounded-[32px] p-3 flex items-center gap-3">
            <div className="pl-4 hidden sm:block">
              <MessageCircle className="w-6 h-6 text-stone-400" />
            </div>
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  handleSend();
                }
              }}
              placeholder="How can we help your nest today?"
              className="flex-1 bg-transparent border-none focus:ring-0 text-stone-800 placeholder:text-stone-400 py-3 resize-none max-h-32 text-lg font-light"
              rows={1}
            />
            <button
              onClick={() => handleSend()}
              disabled={!input.trim() || isLoading}
              className="p-4 bg-stone-900 text-stone-50 rounded-2xl hover:bg-stone-800 disabled:opacity-50 disabled:cursor-not-allowed transition-all hover:scale-105 active:scale-95 shadow-lg group-hover:shadow-amber-900/10"
            >
              <Send className="w-5 h-5" />
            </button>
          </div>
        </div>
        <div className="text-center mt-4">
          <p className="text-[10px] text-stone-400 uppercase tracking-widest font-medium opacity-60">
            Expert care guidance — Consult your pediatrician for medical advice
          </p>
        </div>
      </div>

      {/* CSS Overrides for hidden scrollbar */}
      <style dangerouslySetInnerHTML={{ __html: `
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}} />
    </div>
  );
}
