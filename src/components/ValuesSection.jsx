import { motion } from 'framer-motion';
import {
  Blocks,
  Heart,
  Lock,
  Scale,
  Shield,
  Sparkles,
  Timer,
  WalletCards,
  Zap
} from 'lucide-react';

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 280, damping: 28 }
  }
};

const principleIconMap = {
  'Honesty & Transparency': Shield,
  'Customer-Centric Approach': Heart,
  'Operational Efficiency': Zap,
  'Data Privacy & Security': Lock
};

const whyMeta = {
  'Multi-lender Access': {
    icon: Blocks,
    description: 'Compare offers from multiple banks and NBFCs for the best fit.'
  },
  'Transparent Comparisons': {
    icon: Scale,
    description: 'Clear and honest comparisons without hidden surprises.'
  },
  'Reduced Paperwork': {
    icon: WalletCards,
    description: 'Digital-first process means fewer documents and faster flow.'
  },
  'Faster Approvals': {
    icon: Timer,
    description: 'Get decisions quickly with our streamlined fulfillment.'
  },
  'One-stop Marketplace': {
    icon: Sparkles,
    description: 'Loans, cards, and insurance support in one place.'
  }
};

const ValuesSection = ({ corePrinciples, whyChooseUs }) => {
  return (
    <section className="section-shell py-10 sm:py-14">
      <div className="space-y-8 rounded-[30px] border border-white/70 bg-gradient-to-br from-white/90 via-white to-brand-50/35 p-5 shadow-soft backdrop-blur-xl sm:p-7 lg:p-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div variants={itemVariants} className="text-center">
            <p className="pill-badge justify-center">Values</p>
            <h3 className="mt-4 font-['Poppins'] text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
              Core Principles
            </h3>
            <p className="mx-auto mt-2.5 max-w-xl text-sm text-slate-600 sm:text-base">
              The values that guide everything we do
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            className="mt-7 grid gap-3.5 sm:grid-cols-2 lg:grid-cols-4"
          >
            {corePrinciples.map((item, index) => {
              const Icon = principleIconMap[item] || Shield;
              const accents =
                index % 2 === 0
                  ? 'from-brand-50 to-white border-brand-100/80'
                  : 'from-blue-50/80 to-white border-blue-100/80';

              return (
                <motion.article
                  key={item}
                  variants={itemVariants}
                  whileHover={{ y: -5, scale: 1.01 }}
                  className={`group rounded-[20px] border ${accents} bg-gradient-to-br p-4 text-center shadow-[0_8px_20px_rgba(11,26,56,0.06)] transition-all duration-300 hover:shadow-[0_12px_26px_rgba(11,26,56,0.1)]`}
                >
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-[16px] bg-ink text-white shadow-[0_12px_24px_rgba(17,39,77,0.22)] transition-transform duration-300 group-hover:scale-105">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="mt-3 text-base font-semibold tracking-tight text-ink">{item}</p>
                </motion.article>
              );
            })}
          </motion.div>
        </motion.div>

        <div className="h-px bg-gradient-to-r from-transparent via-brand-200 to-transparent" />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div variants={itemVariants} className="text-center">
            <p className="pill-badge justify-center">Why Funds24</p>
            <h3 className="mt-4 font-['Poppins'] text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
              Why Choose Funds24
            </h3>
            <p className="mx-auto mt-2.5 max-w-xl text-sm text-slate-600 sm:text-base">
              We are committed to making your financial journey simple, transparent, and efficient
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            className="mt-7 grid gap-3.5 sm:grid-cols-2 lg:grid-cols-3"
          >
            {whyChooseUs.map((item, index) => {
              const meta = whyMeta[item] || whyMeta['One-stop Marketplace'];
              const Icon = meta.icon;
              const tint =
                index % 3 === 0
                  ? 'from-brand-50 to-white border-brand-100/80'
                  : index % 3 === 1
                    ? 'from-mint-50/85 to-white border-mint-100/80'
                    : 'from-blue-50/85 to-white border-blue-100/80';

              return (
                <motion.article
                  key={item}
                  variants={itemVariants}
                  whileHover={{ y: -4, scale: 1.01 }}
                  className={`group rounded-[20px] border ${tint} bg-gradient-to-br p-4 shadow-[0_8px_20px_rgba(11,26,56,0.06)] transition-all duration-300 hover:shadow-[0_12px_26px_rgba(11,26,56,0.1)]`}
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-[14px] bg-white text-ink shadow-sm transition-transform duration-300 group-hover:scale-105">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <p className="mt-3 text-xl font-semibold tracking-tight text-ink">
                    {item}
                  </p>
                  <p className="mt-1.5 text-sm leading-6 text-slate-600">
                    {meta.description}
                  </p>
                </motion.article>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ValuesSection;
