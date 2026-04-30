import { motion } from 'framer-motion';
import { ArrowUpRight, BadgeCheck, ShieldCheck, Sparkles, Landmark, CreditCard, PiggyBank, Building2 } from 'lucide-react';

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.05
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 260, damping: 28 }
  }
};

const serviceHighlights = [
  ['Quick approval', 'Minimal documentation', 'Flexible terms'],
  ['Wide coverage', 'Claim assistance', 'Best premiums'],
  ['Zero fees', 'Instant approval', 'Reward optimization'],
  ['Lower EMIs', 'Better terms', 'Debt consolidation'],
  ['Goal planning', 'Investment advice', 'Risk assessment'],
  ['Working capital', 'Equipment finance', 'Trade finance']
];

const iconMap = [Landmark, ShieldCheck, CreditCard, Sparkles, PiggyBank, Building2];
const accentMap = [
  'from-brand-50 to-white',
  'from-mint-50 to-white',
  'from-blue-50 to-white',
  'from-brand-50/80 to-white',
  'from-mint-50/80 to-white',
  'from-blue-50/80 to-white'
];
const iconBgMap = ['bg-brand-700', 'bg-mint-700', 'bg-blue-700', 'bg-brand-700', 'bg-mint-700', 'bg-blue-700'];

const ServicesSection = ({ services }) => {
  return (
    <section id="services" className="section-shell py-10 sm:py-14">
      <div className="mb-8 text-center sm:mb-10">
        <p className="pill-badge justify-center">What We Offer</p>
        <h2 className="mt-4 font-['Poppins'] text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
          Our Services
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-sm text-slate-600 sm:text-base">
          Comprehensive financial solutions tailored to meet your unique needs
        </p>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.18 }}
        className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
      >
        {services.map((service, index) => {
          const ServiceIcon = iconMap[index] || Landmark;
          const featureList = serviceHighlights[index] || serviceHighlights[0];

          return (
            <motion.article
              key={service.title}
              variants={cardVariants}
              whileHover={{ y: 0 }}
              className={`group relative overflow-hidden rounded-[22px] border border-slate-200/80 bg-gradient-to-br ${accentMap[index] || accentMap[0]} p-4 shadow-[0_8px_22px_rgba(11,26,56,0.06)] transition-all duration-100 hover:border-slate-200/80 hover:shadow-[0_8px_22px_rgba(11,26,56,0.06)]`}
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-200 to-transparent opacity-70" />
              <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-white/50 blur-3xl opacity-0 transition-opacity duration-200 group-hover:opacity-0" />

              <div className="relative z-10">
                <div className="flex h-14 w-14 items-center justify-center rounded-[18px] bg-white shadow-[0_10px_24px_rgba(11,26,56,0.08)] transition-transform duration-100 group-hover:scale-100">
                  <div className={`flex h-10 w-10 items-center justify-center rounded-[14px] ${iconBgMap[index] || iconBgMap[0]} text-white`}>
                    <ServiceIcon className="h-5 w-5" aria-hidden="true" />
                  </div>
                </div>

                <h3 className="mt-4 text-base font-semibold tracking-tight text-ink sm:text-lg">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {service.description}
                </p>

                <div className="mt-5 space-y-2.5 border-t border-slate-200/70 pt-5">
                  {featureList.map((feature) => (
                    <div key={feature} className="flex items-center gap-3 text-sm text-slate-700">
                      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white text-brand-700 shadow-sm">
                        <BadgeCheck className="h-3.5 w-3.5" aria-hidden="true" />
                      </span>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-ink transition-colors duration-100 group-hover:text-brand-700">
                  Learn More
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-100 group-hover:-translate-y-0 group-hover:translate-x-0" />
                </div>
              </div>
            </motion.article>
          );
        })}
      </motion.div>
    </section>
  );
};

export default ServicesSection;
