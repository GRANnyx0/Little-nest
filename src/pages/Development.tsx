import { motion } from "motion/react";
import { Brain, Sparkles } from "lucide-react";

const milestones = [
  {
    title: "0–6 Months",
    description: "Smiling, eye contact, lifting head, responding to sounds, and starting to babble.",
    image: "https://images.unsplash.com/photo-1510154221590-ff63e90a136f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "6–12 Months",
    description: "Sitting without support, crawling, exploring objects with hands, and responding to their name.",
    image: "https://images.unsplash.com/photo-1491013516836-7db643ee125a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "1–3 Years",
    description: "Walking, talking (first words), learning through play, and developing independence.",
    image: "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  }
];

export function Development() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-16 text-center"
      >
        <div className="inline-flex p-3 bg-amber-50 rounded-full mb-4">
          <Brain className="w-8 h-8 text-amber-600" />
        </div>
        <h1 className="font-serif text-4xl font-light text-stone-900 mb-4">Development Milestones</h1>
        <p className="text-stone-600 font-light max-w-xl mx-auto">
          Every child develops at their own pace. These are general guidelines for what to expect.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {milestones.map((milestone, idx) => (
          <motion.div
            key={milestone.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="group"
          >
            <div className="bg-white rounded-[32px] overflow-hidden shadow-sm border border-stone-100 h-full flex flex-col">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={milestone.image}
                  alt={milestone.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-8 flex-1">
                <h2 className="font-serif text-2xl font-light text-stone-900 mb-4">{milestone.title}</h2>
                <p className="text-stone-600 leading-relaxed font-light">
                  {milestone.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-20 p-12 bg-stone-900 text-white rounded-[40px] relative overflow-hidden">
        <div className="absolute top-0 right-0 p-8 opacity-10">
          <Sparkles className="w-32 h-32" />
        </div>
        <div className="relative z-10 max-w-2xl">
          <h3 className="font-serif text-3xl font-light mb-6">Nurturing Growth</h3>
          <p className="text-stone-300 font-light text-lg leading-relaxed mb-8">
            The best way to support your baby's development is through love, interaction, and play. 
            Talk to them, read to them, and give them a safe space to explore.
          </p>
          <div className="flex items-center gap-4 text-stone-400 text-sm uppercase tracking-widest">
            <span>Play</span>
            <div className="w-1 h-1 rounded-full bg-stone-700" />
            <span>Talk</span>
            <div className="w-1 h-1 rounded-full bg-stone-700" />
            <span>Read</span>
          </div>
        </div>
      </div>
    </div>
  );
}
