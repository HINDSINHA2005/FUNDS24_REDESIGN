import { motion } from 'framer-motion';
import { Award, Clock3, DollarSign, Globe, Users } from 'lucide-react';

const floatVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 260, damping: 26 }
  }
};

const badges = [
  { icon: Clock3, label: 'Quick Turnaround', position: 'left-[25%] top-[32%]' },
  { icon: Award, label: 'Verified DSA', position: 'left-[43%] top-[20%]' },
  { icon: Users, label: 'Trusted Support', position: 'left-[60%] top-[32%]' },
  { icon: DollarSign, label: 'Competitive Rates', position: 'left-[76%] top-[48%]' }
];

const DSAStrengthsSection = () => {
  return (
    <section className="section-shell py-12 sm:py-16">
      <div className="rounded-[34px] border border-white/70 bg-gradient-to-b from-white via-white to-brand-50/30 p-6 shadow-soft sm:p-8 lg:p-10">
        <div className="text-center">
          <h3 className="mt-1 font-['Poppins'] text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Our DSA Strengths
          </h3>
          <p className="mx-auto mt-3 max-w-2xl text-base text-slate-600 sm:text-lg">
            Proven track record of excellence in financial services
          </p>
        </div>

        <div className="relative mt-10 hidden h-[365px] md:block">
          <div className="absolute left-1/2 top-7 h-[230px] w-[82%] -translate-x-1/2 rounded-t-[999px] border-t-2 border-dashed border-slate-200/80" />

          <motion.div
            variants={floatVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="absolute left-[10%] top-[56%] z-20 flex h-20 w-20 items-center justify-center rounded-[20px] bg-ink text-white shadow-[0_18px_32px_rgba(11,26,56,0.25)]"
          >
            <Globe className="h-10 w-10" aria-hidden="true" />
          </motion.div>

          {badges.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.label}
                variants={floatVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: 0.08 * (index + 1) }}
                className={`absolute ${item.position} z-20 flex h-16 w-16 items-center justify-center rounded-2xl border border-slate-200 bg-white text-ink shadow-[0_10px_24px_rgba(11,26,56,0.08)]`}
              >
                <Icon className="h-8 w-8" aria-hidden="true" />
              </motion.div>
            );
          })}

          <motion.div
            variants={floatVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: 0.35 }}
            className="absolute inset-x-0 bottom-0 z-10 mx-auto max-w-[620px] rounded-[24px] border border-slate-200 bg-white p-6 text-center shadow-[0_14px_34px_rgba(11,26,56,0.08)]"
          >
            <p className="font-['Poppins'] text-xl font-semibold tracking-tight text-ink sm:text-2xl">50+ Partners</p>
            <p className="mt-2 text-lg font-semibold tracking-tight text-ink sm:text-xl">Extensive Lender Network</p>
            <p className="mt-2 text-[0.95rem] text-slate-600">
              Connected with 50+ banks and NBFCs for maximum choice and competitive rates.
            </p>
          </motion.div>
        </div>

        <div className="mt-8 grid gap-4 md:hidden">
          <div className="rounded-2xl bg-ink p-5 text-center text-white shadow-soft">
            <Globe className="mx-auto h-8 w-8" aria-hidden="true" />
            <p className="mt-3 text-lg font-semibold">Extensive Lender Network</p>
            <p className="mt-2 text-sm text-white/90">Connected with 50+ banks and NBFCs</p>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {badges.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.label} className="rounded-xl border border-slate-200 bg-white p-3 text-center shadow-sm">
                  <Icon className="mx-auto h-5 w-5 text-ink" aria-hidden="true" />
                  <p className="mt-2 text-xs font-semibold text-slate-700">{item.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DSAStrengthsSection;
