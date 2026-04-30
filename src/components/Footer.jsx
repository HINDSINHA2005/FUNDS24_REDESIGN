import { motion } from 'framer-motion';
import { ArrowUpRight, CircleDot } from 'lucide-react';

const productLinks = ['Personal Loan', 'Credit Cards', 'Business Loan', 'Home Loan'];
const serviceLinks = ['Credit Score Check', 'EMI Calculator', 'Loan Eligibility', 'Balance Transfer'];
const companyLinks = ['About Us', 'Contact', 'Careers', 'Blog'];
const partnerBadges = ['Urban Money', 'First Adviser Finance', 'Finance Budha'];
const legalLinks = ['Privacy Policy', 'Terms of Service', 'Disclaimer'];

const columnVariants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0 }
};

const Footer = ({ brandLogo, brandName = 'Funds24' }) => {
  return (
    <footer className="relative overflow-hidden border-t border-brand-100 bg-gradient-to-b from-[#F7FAFF] via-[#EDF3FF] to-[#EAF2FF] text-slate-700">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(47,128,255,0.08),transparent_32%),radial-gradient(circle_at_80%_15%,rgba(24,199,178,0.08),transparent_28%),linear-gradient(180deg,rgba(255,255,255,0.35),rgba(255,255,255,0))]" />
      <div className="section-shell relative z-10 py-8 sm:py-10 lg:py-14">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] xl:grid-cols-[0.9fr_1.1fr] xl:items-start">
          <motion.div
            variants={columnVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45, ease: 'easeOut' }}
            className="rounded-[28px] border border-white/70 bg-white/85 p-6 shadow-[0_20px_45px_rgba(15,35,72,0.08)] backdrop-blur-xl sm:p-7"
          >
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.2 }}
              className="flex items-center gap-4"
            >
              <div className="rounded-2xl border border-brand-100 bg-white p-3 shadow-[0_14px_30px_rgba(15,35,72,0.08)]">
                <img
                  src={brandLogo}
                  alt={brandName}
                  className="h-11 w-[145px] object-contain sm:h-12 sm:w-[160px]"
                />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-700">
                  Premium Financial Solutions
                </p>
                <p className="mt-1 text-sm text-slate-500">Certified DSA partner</p>
              </div>
            </motion.div>

            <p className="mt-5 max-w-sm text-sm leading-6 text-slate-600 sm:text-[15px]">
              Your trusted partner for transparent, efficient financial solutions. Certified DSA with
              access to multiple lenders.
            </p>

            <div className="mt-5 grid gap-2.5 sm:grid-cols-3">
              {partnerBadges.map((badge, index) => (
                <motion.span
                  key={badge}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.03, duration: 0.15 }}
                  whileHover={{ scale: 1 }}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-brand-100 bg-white px-3.5 py-2 text-sm font-semibold text-slate-700 shadow-[0_10px_24px_rgba(15,35,72,0.08)] transition sm:w-full"
                >
                  <CircleDot className="h-3.5 w-3.5 text-mint-300" aria-hidden="true" />
                  {badge}
                </motion.span>
              ))}
            </div>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            <motion.div
              variants={columnVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              className="rounded-[26px] border border-brand-100/80 bg-white/75 p-6 shadow-[0_18px_40px_rgba(15,35,72,0.06)] backdrop-blur-xl"
            >
              <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-800">
                Products
              </h4>
              <ul className="mt-4 space-y-2.5 text-sm text-slate-600">
                {productLinks.map((item, index) => (
                  <li key={item}>
                    <a
                      href="#products"
                      className="group inline-flex items-center gap-2 transition-colors duration-100 hover:text-brand-700"
                    >
                      <span>{item}</span>
                      <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition-all duration-100 group-hover:translate-x-0 group-hover:-translate-y-0 group-hover:opacity-0" />
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              variants={columnVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.2, delay: 0.03, ease: 'easeOut' }}
              className="rounded-[26px] border border-brand-100/80 bg-white/75 p-6 shadow-[0_18px_40px_rgba(15,35,72,0.06)] backdrop-blur-xl"
            >
              <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-800">
                Services
              </h4>
              <ul className="mt-4 space-y-2.5 text-sm text-slate-600">
                {serviceLinks.map((item) => (
                  <li key={item}>
                    <a
                      href="#services"
                      className="group inline-flex items-center gap-2 transition-colors duration-100 hover:text-brand-700"
                    >
                      <span>{item}</span>
                      <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition-all duration-100 group-hover:translate-x-0 group-hover:-translate-y-0 group-hover:opacity-0" />
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              variants={columnVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.2, delay: 0.06, ease: 'easeOut' }}
              className="rounded-[26px] border border-brand-100/80 bg-white/75 p-6 shadow-[0_18px_40px_rgba(15,35,72,0.06)] backdrop-blur-xl sm:col-span-2 xl:col-span-1"
            >
              <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-800">
                Company
              </h4>
              <ul className="mt-4 space-y-2.5 text-sm text-slate-600">
                {companyLinks.map((item) => (
                  <li key={item}>
                    <a
                      href={item === 'Contact' ? '#contact' : '#about'}
                      className="group inline-flex items-center gap-2 transition-colors duration-100 hover:text-brand-700"
                    >
                      <span>{item}</span>
                      <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition-all duration-100 group-hover:translate-x-0 group-hover:-translate-y-0 group-hover:opacity-0" />
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>

        <div className="mt-10 h-px w-full bg-gradient-to-r from-transparent via-brand-200 to-transparent" />

        <div className="mt-6 flex flex-col gap-4 border-t border-brand-100 pt-5 sm:flex-row sm:items-center sm:justify-between">
          <motion.p
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.2 }}
            className="text-sm text-slate-500"
          >
            © 2024 Funds24. All rights reserved.
          </motion.p>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-2.5 text-sm text-slate-500">
            {legalLinks.map((item, index) => (
              <motion.a
                key={item}
                href="#"
                initial={{ opacity: 0, y: 6 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.03, duration: 0.15 }}
                className="transition-colors duration-100 hover:text-brand-700"
              >
                {item}
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;