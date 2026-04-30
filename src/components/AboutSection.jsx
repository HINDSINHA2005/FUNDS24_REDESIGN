import { motion } from 'framer-motion';

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15
    }
  }
};

const contentVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 300, damping: 30 }
  }
};

const statVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { type: 'spring', stiffness: 300, damping: 30 }
  }
};

const AboutSection = ({ stats }) => {
  return (
    <section id="about" className="section-shell scroll-mt-24 py-10 sm:scroll-mt-28 sm:py-14">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]"
      >
        {/* Left Content */}
        <motion.div
          variants={contentVariants}
          className="rounded-[28px] border border-white/70 bg-gradient-to-br from-white/80 to-white/60 p-6 shadow-soft backdrop-blur-xl sm:p-8"
        >
          {/* Badge */}
          <motion.p className="pill-badge w-fit">Who We Are</motion.p>

          {/* Title */}
          <motion.h2 className="mt-4 font-['Poppins'] text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
            About Funds24
          </motion.h2>

          {/* Description paragraphs */}
          <motion.p className="mt-6 text-base leading-7 text-slate-700">
            Funds24 is a certified Direct Selling Agent (DSA) partnering with leading banks and
            NBFCs across India. We bring you a comprehensive financial marketplace where
            transparency meets efficiency.
          </motion.p>

          <motion.p className="mt-5 text-base leading-7 text-slate-700">
            Our digital-first approach eliminates paperwork, reduces processing time, and gives
            you access to multiple lenders - all in one place. We're committed to helping you
            make informed financial decisions with complete transparency.
          </motion.p>

          {/* Highlight features */}
          <motion.div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-[16px] border border-brand-200/50 bg-gradient-to-br from-brand-50 to-brand-100/50 p-4">
              <div className="flex items-start gap-3">
                <div className="mt-1 flex h-6 w-6 items-center justify-center rounded-lg bg-brand-600 text-white flex-shrink-0">
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold text-ink">Verified Partner</p>
                  <p className="text-xs text-slate-600 mt-1">RBI-registered DSA</p>
                </div>
              </div>
            </div>

            <div className="rounded-[16px] border border-mint-200/50 bg-gradient-to-br from-mint-50 to-mint-100/50 p-4">
              <div className="flex items-start gap-3">
                <div className="mt-1 flex h-6 w-6 items-center justify-center rounded-lg bg-mint-600 text-white flex-shrink-0">
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold text-ink">Best Rates</p>
                  <p className="text-xs text-slate-600 mt-1">Competitive pricing guaranteed</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Stats */}
        <motion.div className="space-y-4">
          {stats.map((stat, index) => {
            const StatIcon = stat.icon;
            
            // Color rotation for stats
            const colorScheme =
              index % 3 === 0
                ? { bg: 'from-brand-50 to-brand-100', icon: 'bg-brand-100 text-brand-600', accent: 'border-brand-200' }
                : index % 3 === 1
                  ? { bg: 'from-blue-50 to-blue-100', icon: 'bg-blue-100 text-blue-600', accent: 'border-blue-200' }
                  : { bg: 'from-mint-50 to-mint-100', icon: 'bg-mint-100 text-mint-600', accent: 'border-mint-200' };

            return (
              <motion.div
                key={stat.value}
                variants={statVariants}
                whileHover={{ scale: 1 }}
                className={`rounded-[20px] border ${colorScheme.accent}/50 bg-gradient-to-br ${colorScheme.bg} p-5 sm:p-6 shadow-[0_8px_24px_rgba(11,26,56,0.08)] transition-all duration-100 hover:shadow-[0_8px_24px_rgba(11,26,56,0.08)]`}
              >
                <div className="flex items-start gap-4">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${colorScheme.icon} flex-shrink-0`}>
                    <StatIcon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-ink leading-tight">
                      {stat.value}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
