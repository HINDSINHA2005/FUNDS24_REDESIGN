import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.05
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 260, damping: 28 }
  }
};

const FinancialTools = ({ items }) => {
  return (
    <section className="section-shell scroll-mt-24 py-10 sm:scroll-mt-28 sm:py-14">
      <div className="mb-8 text-center sm:mb-10">
        <p className="pill-badge justify-center">Smart Decisioning</p>
        <h2 className="mt-4 font-['Poppins'] text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
          Financial Tools & Services
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-sm text-slate-600 sm:text-base">
          Powerful tools to help you make informed financial decisions
        </p>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
      >
        {items.map((tool, index) => {
          const ToolIcon = tool.icon;

          // Light background colors with proper color rotation
          const colorScheme =
            index % 5 === 0
              ? { bg: 'bg-gradient-to-br from-brand-50 to-brand-100', icon: 'text-brand-600', badge: 'bg-brand-100' }
              : index % 5 === 1
                ? { bg: 'bg-gradient-to-br from-blue-50 to-blue-100', icon: 'text-blue-600', badge: 'bg-blue-100' }
                : index % 5 === 2
                  ? { bg: 'bg-gradient-to-br from-mint-50 to-mint-100', icon: 'text-mint-600', badge: 'bg-mint-100' }
                  : index % 5 === 3
                    ? { bg: 'bg-gradient-to-br from-brand-50/80 to-blue-100/60', icon: 'text-brand-700', badge: 'bg-brand-100' }
                    : { bg: 'bg-gradient-to-br from-blue-50/80 to-mint-100/60', icon: 'text-blue-700', badge: 'bg-blue-100' };

          return (
            <motion.div
              key={tool.title}
              variants={cardVariants}
              whileHover={{ y: 0 }}
              whileTap={{ scale: 0.99 }}
              className="group"
            >
              <div
                className={`relative overflow-hidden rounded-[22px] ${colorScheme.bg} p-4 sm:p-5 border border-white/60 shadow-[0_8px_24px_rgba(11,26,56,0.08)] transition-all duration-100 hover:shadow-[0_8px_24px_rgba(11,26,56,0.08)] hover:border-white/60 cursor-pointer`}
              >
                {/* Top shine effect */}
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-50" />

                {/* Content wrapper */}
                <div className="relative z-10">
                  {/* Icon container */}
                  <div className={`inline-flex h-10 w-10 items-center justify-center rounded-lg ${colorScheme.badge} transition-transform duration-100 group-hover:scale-100`}>
                    <ToolIcon className={`h-5 w-5 ${colorScheme.icon} transition-transform duration-100 group-hover:rotate-0`} aria-hidden="true" />
                  </div>

                  {/* Text content */}
                  <h3 className="mt-4 text-base font-semibold text-ink tracking-tight">
                    {tool.title}
                  </h3>
                  <p className="mt-1.5 text-xs sm:text-sm leading-5 text-slate-600">
                    {tool.description}
                  </p>

                  {/* Check Now link */}
                  <div className="mt-4 flex items-center gap-1.5">
                    <a href="#" className="text-sm font-semibold text-ink hover:text-brand-500 transition-colors duration-100">
                      Check Now
                    </a>
                    <ArrowRight className="h-4 w-4 text-ink group-hover:translate-x-0 transition-transform duration-100" />
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
};

export default FinancialTools;
