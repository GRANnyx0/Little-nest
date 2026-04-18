import { motion } from "motion/react";
import { Utensils, AlertCircle, Info } from "lucide-react";

const feedingStages = [
  {
    title: "0–3 Months",
    description: "Only breast milk or formula. Feed every 2–3 hours. No water, no solids.",
    image: "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "3–6 Months",
    description: "Still mainly milk. Some babies show readiness for purees near 6 months.",
    image: "https://images.unsplash.com/photo-1635258559918-ed56f88004de?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "6–12 Months",
    description: "Introduce solid foods. Start with soft purees (vegetables, fruits). Feed 2–3 meals daily.",
    image: "https://images.unsplash.com/photo-1569420067112-b57b4f024595?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  }
];

export function Feeding() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-12 text-center"
      >
        <div className="inline-flex p-3 bg-emerald-50 rounded-full mb-4">
          <Utensils className="w-8 h-8 text-emerald-600" />
        </div>
        <h1 className="font-serif text-4xl font-light text-stone-900 mb-4">Feeding Guide</h1>
        <p className="text-stone-600 font-light max-w-xl mx-auto">
          Nutritional milestones for your baby's first year. Every baby is different, so follow their lead.
        </p>
      </motion.div>

      <div className="space-y-12">
        {feedingStages.map((stage, idx) => (
          <motion.div
            key={stage.title}
            initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-[32px] overflow-hidden shadow-sm border border-stone-100 flex flex-col md:flex-row"
          >
            <div className="md:w-1/2 aspect-video md:aspect-auto">
              <img
                src={stage.image}
                alt={stage.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="p-8 md:w-1/2 flex flex-col justify-center">
              <h2 className="font-serif text-2xl font-light text-stone-900 mb-4">{stage.title}</h2>
              <p className="text-stone-600 leading-relaxed font-light">
                {stage.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mt-16 p-8 bg-amber-50 rounded-[32px] border border-amber-100"
      >
        <div className="flex items-start gap-4">
          <div className="p-2 bg-amber-100 rounded-full">
            <AlertCircle className="w-6 h-6 text-amber-700" />
          </div>
          <div>
            <h3 className="font-serif text-xl font-light text-stone-900 mb-2">Important Notes</h3>
            <ul className="space-y-2 text-stone-700 font-light">
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                Avoid honey before 1 year (risk of botulism).
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                Introduce new foods slowly (one at a time).
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                Watch for signs of allergies (rash, swelling).
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                Consult your pediatrician before starting solids.
              </li>
            </ul>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
