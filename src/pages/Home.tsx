import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { Utensils, Heart, Brain, MessageSquare, ArrowRight, Bird } from "lucide-react";

const categories = [
  {
    title: "Feeding",
    path: "/feeding",
    icon: Utensils,
    image: "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    color: "bg-emerald-50",
    textColor: "text-emerald-700"
  },
  {
    title: "Health",
    path: "/health",
    icon: Heart,
    image: "https://images.unsplash.com/photo-1632053005736-6bd9cfc4daf9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    color: "bg-rose-50",
    textColor: "text-rose-700"
  },
  {
    title: "Development",
    path: "/development",
    icon: Brain,
    image: "https://images.unsplash.com/photo-1510154221590-ff63e90a136f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    color: "bg-amber-50",
    textColor: "text-amber-700"
  },
  {
    title: "AI Help",
    path: "/ai",
    icon: MessageSquare,
    image: "https://images.unsplash.com/photo-1770169272345-9636d5ef2681?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    color: "bg-indigo-50",
    textColor: "text-indigo-700"
  }
];

export function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-stone-50 py-20 sm:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-stone-200/50 via-transparent to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="font-serif text-5xl sm:text-7xl font-light leading-tight mb-6">
              <span className="bg-gradient-to-r from-rose-400 via-amber-400 to-emerald-400 bg-clip-text text-transparent">Little Nest</span> <span className="italic">🕊️</span>
            </h1>
            <p className="text-xl text-stone-600 font-light leading-relaxed mb-10">
              Your safe space for raising your baby with confidence, care, and love.
              Simple, clear guidance for your baby's first years.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/ai"
                className="px-8 py-4 bg-stone-900 text-white rounded-full font-medium hover:bg-stone-800 transition-all shadow-lg shadow-stone-200 flex items-center gap-2"
              >
                Ask AI Assistant <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative aspect-[4/5] rounded-[32px] overflow-hidden shadow-2xl"
            >
              <img
                src="https://images.unsplash.com/photo-1519689680058-324335c77eba?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                alt="Baby sleeping"
                className="object-cover w-full h-full"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            <div className="space-y-8">
              <h2 className="font-serif text-4xl font-light text-stone-900">
                Welcome to the Journey
              </h2>
              <p className="text-lg text-stone-600 leading-relaxed font-light">
                Becoming a parent is beautiful—but also overwhelming.
                Little Nest gives you simple, clear guidance for your baby’s first years.
                From the first feeding to the first steps, we're here to support you.
              </p>
              <div className="grid grid-cols-2 gap-6 pt-4">
                <div className="p-6 bg-stone-50 rounded-2xl border border-stone-100">
                  <div className="text-2xl font-serif text-stone-800 mb-1">Expert</div>
                  <div className="text-sm text-stone-500 uppercase tracking-wider">Advice</div>
                </div>
                <div className="p-6 bg-stone-50 rounded-2xl border border-stone-100">
                  <div className="text-2xl font-serif text-stone-800 mb-1">Safe</div>
                  <div className="text-sm text-stone-500 uppercase tracking-wider">Environment</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Explore Section */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-light text-stone-900 mb-4">Explore Little Nest</h2>
            <p className="text-stone-500 font-light">Choose a category to learn more about your baby's growth.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((cat, idx) => (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <Link to={cat.path} className="group block">
                  <div className="relative aspect-[3/4] rounded-[24px] overflow-hidden mb-6 shadow-lg group-hover:shadow-xl transition-all duration-500">
                    <img
                      src={cat.image}
                      alt={cat.title}
                      className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                    <div className="absolute bottom-6 left-6 text-white">
                      <cat.icon className="w-6 h-6 mb-2" />
                      <h3 className="text-xl font-serif font-light">{cat.title}</h3>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-white border-t border-stone-200">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex justify-center items-center gap-2 mb-4">
            <Bird className="w-5 h-5 text-stone-400" />
            <span className="font-serif text-lg text-stone-800">Little Nest</span>
          </div>
          <p className="text-stone-400 text-sm">© 2026 Little Nest. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
