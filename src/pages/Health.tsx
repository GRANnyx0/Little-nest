import { motion } from "motion/react";
import { Heart, ShieldCheck, Thermometer, Stethoscope } from "lucide-react";

const healthTips = [
  {
    title: "Regular Checkups",
    icon: Stethoscope,
    description: "Follow your pediatrician's schedule for well-baby visits and vaccinations."
  },
  {
    title: "Safe Sleep",
    icon: ShieldCheck,
    description: "Always place baby on their back to sleep on a firm, flat surface without loose bedding."
  },
  {
    title: "Temperature",
    icon: Thermometer,
    description: "Keep the room at a comfortable temperature (68–72°F or 20–22°C)."
  }
];

export function Health() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-16 text-center"
      >
        <div className="inline-flex p-3 bg-rose-50 rounded-full mb-4">
          <Heart className="w-8 h-8 text-rose-600" />
        </div>
        <h1 className="font-serif text-4xl font-light text-stone-900 mb-4">Health & Safety</h1>
        <p className="text-stone-600 font-light max-w-xl mx-auto">
          Keeping your little one healthy and safe is our top priority.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {healthTips.map((tip, idx) => (
          <motion.div
            key={tip.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="p-8 bg-white rounded-[32px] border border-stone-100 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="w-12 h-12 bg-stone-50 rounded-2xl flex items-center justify-center mb-6">
              <tip.icon className="w-6 h-6 text-stone-700" />
            </div>
            <h2 className="font-serif text-xl font-light text-stone-900 mb-4">{tip.title}</h2>
            <p className="text-stone-600 font-light leading-relaxed">
              {tip.description}
            </p>
          </motion.div>
        ))}
      </div>

      <div className="rounded-[40px] overflow-hidden relative aspect-[21/9]">
        <img
          src="https://images.unsplash.com/photo-1597807197258-3272e1808b0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
          alt="Doctor with baby"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-stone-900/10" />
      </div>
    </div>
  );
}
