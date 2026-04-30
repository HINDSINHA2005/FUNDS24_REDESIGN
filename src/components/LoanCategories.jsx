import { motion } from 'framer-motion';

const rowVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: { type: 'spring', stiffness: 200, damping: 25 }
  }
};

const LoanCategories = ({ items }) => {
  return (
    <section id="products" className="section-shell scroll-mt-24 py-10 sm:scroll-mt-28 sm:py-14">
      <div className="rounded-[32px] border border-white/70 bg-white/80 p-4 shadow-soft backdrop-blur-xl sm:p-6 lg:p-8">
        <div className="mb-5 flex items-end justify-between gap-3 px-2 sm:mb-6 sm:px-1">
          <div>
            <p className="pill-badge">Premium Products</p>
            <h2 className="mt-4 font-['Poppins'] text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
              Loan Categories
            </h2>
          </div>
          <p className="hidden max-w-xs text-right text-sm leading-6 text-slate-500 md:block">
            Choose from our curated selection of premium lending solutions tailored for you.
          </p>
        </div>

        <motion.div
          variants={rowVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="-mx-2 flex gap-3 overflow-x-auto px-2 pb-2 sm:grid sm:grid-cols-2 sm:overflow-visible md:grid-cols-3 lg:grid-cols-5 lg:gap-4"
        >
          {items.map((item, index) => {
            const CardIcon = item.icon;
            
            // Light background colors matching theme
            const colorScheme =
              index === 0
                ? { bg: 'bg-gradient-to-br from-brand-50 to-brand-100', icon: 'text-brand-600', badge: 'bg-brand-100' }
                : index === 1
                  ? { bg: 'bg-gradient-to-br from-blue-50 to-blue-100', icon: 'text-blue-600', badge: 'bg-blue-100' }
                  : index === 2
                    ? { bg: 'bg-gradient-to-br from-mint-50 to-mint-100', icon: 'text-mint-600', badge: 'bg-mint-100' }
                    : index === 3
                      ? { bg: 'bg-gradient-to-br from-brand-50/80 to-blue-100/60', icon: 'text-brand-700', badge: 'bg-brand-100' }
                      : { bg: 'bg-gradient-to-br from-blue-50/80 to-mint-100/60', icon: 'text-blue-700', badge: 'bg-blue-100' };

            return (
              <motion.a
                key={item.title}
                href="#products"
                variants={itemVariants}
                whileHover={{ y: 0 }}
                whileTap={{ scale: 0.99 }}
                transition={{ type: 'spring', stiffness: 260, damping: 28 }}
                className={`group relative min-w-[140px] overflow-hidden rounded-[20px] ${colorScheme.bg} p-4 text-center border border-white/60 shadow-[0_8px_24px_rgba(11,26,56,0.08)] transition-all duration-100 hover:shadow-[0_8px_24px_rgba(11,26,56,0.08)] hover:border-white/60 sm:min-w-0`}
              >
                {/* Top shine effect */}
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-50" />

                {/* Icon container */}
                <div className={`mx-auto inline-flex h-10 w-10 items-center justify-center rounded-lg ${colorScheme.badge} transition-transform duration-100 group-hover:scale-100`}>
                  <CardIcon className={`h-5 w-5 ${colorScheme.icon} transition-transform duration-100 group-hover:rotate-0`} aria-hidden="true" />
                </div>

                {/* Title */}
                <p className="relative z-10 mt-3 min-h-[40px] text-xs font-semibold uppercase tracking-[0.08em] text-ink sm:text-sm">
                  {item.title}
                </p>
              </motion.a>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default LoanCategories;
