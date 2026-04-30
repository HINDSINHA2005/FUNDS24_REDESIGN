import { motion } from 'framer-motion';
import { ArrowRight, Clock3, Fingerprint, Mail, MapPin, Phone, Sparkles, SendHorizontal } from 'lucide-react';

const wrapperVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 280, damping: 28 }
  }
};

const contactDetails = [
  {
    icon: Mail,
    label: 'Email Us',
    value: 'email-hr@funds24.in',
    note: 'Usually responds within a few hours'
  },
  {
    icon: Phone,
    label: 'Call Us',
    value: '+91 63875 57389',
    note: 'Mon to Sat, 10:00 AM - 7:00 PM'
  },
  {
    icon: MapPin,
    label: 'Visit Us',
    value: 'Lucknow, Uttar Pradesh',
    note: 'By appointment or direct visit'
  }
];

const serviceOptions = [
  'Business Loan',
  'Home Loan',
  'Car Loan',
  'Personal Loan',
  'Insurance Support',
  'Other'
];

const ContactSection = () => {
  return (
    <section id="contact" className="section-shell scroll-mt-24 pb-14 pt-10 sm:scroll-mt-28 sm:pb-20 sm:pt-14">
      <motion.div
        variants={wrapperVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="relative overflow-hidden rounded-[34px] border border-white/70 bg-gradient-to-br from-white/90 via-white/80 to-brand-50/40 p-5 shadow-soft backdrop-blur-xl sm:p-8 lg:p-10"
      >
        <div className="pointer-events-none absolute -left-10 -top-10 h-40 w-40 rounded-full bg-brand-500/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-12 right-0 h-44 w-44 rounded-full bg-mint-500/10 blur-3xl" />

        <div className="relative grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-10">
          <motion.div variants={itemVariants} className="relative rounded-[28px] border border-brand-100/70 bg-gradient-to-br from-brand-50 via-white to-white p-6 sm:p-8">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-600 text-white shadow-[0_14px_30px_rgba(47,128,255,0.25)]">
                <Sparkles className="h-5 w-5" aria-hidden="true" />
              </span>
              <p className="pill-badge">Get In Touch</p>
            </div>

            <h2 className="mt-4 font-['Poppins'] text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
              Contact Us
            </h2>
            <p className="mt-3 max-w-md text-sm leading-7 text-slate-600 sm:text-base">
              Have questions? We’re here to help. Reach out to us and we’ll respond as soon as possible.
            </p>

            <div className="mt-8 space-y-4">
              {contactDetails.map((detail, index) => {
                const DetailIcon = detail.icon;
                const accent =
                  index === 0
                    ? 'from-brand-50 to-white'
                    : index === 1
                      ? 'from-blue-50 to-white'
                      : 'from-mint-50 to-white';

                return (
                  <motion.div
                    key={detail.label}
                    variants={itemVariants}
                    whileHover={{ y: 0 }}
                    className={`group rounded-[22px] border border-slate-100 bg-gradient-to-br ${accent} p-4 shadow-[0_8px_24px_rgba(11,26,56,0.05)] transition-all duration-100 hover:border-slate-100 hover:shadow-[0_8px_24px_rgba(11,26,56,0.05)]`}
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-brand-700 shadow-sm transition-transform duration-100 group-hover:scale-100">
                        <DetailIcon className="h-5 w-5" aria-hidden="true" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-sm font-semibold text-ink">{detail.label}</p>
                        <p className="mt-1 text-sm text-slate-600">{detail.value}</p>
                        <p className="mt-2 text-xs text-slate-500">{detail.note}</p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              <div className="rounded-[18px] border border-brand-100 bg-white p-4">
                <div className="flex items-center gap-3">
                  <Clock3 className="h-5 w-5 text-brand-600" aria-hidden="true" />
                  <div>
                    <p className="text-sm font-semibold text-ink">Quick Response</p>
                    <p className="text-xs text-slate-500">Fast follow-up from our team</p>
                  </div>
                </div>
              </div>
              <div className="rounded-[18px] border border-mint-100 bg-white p-4">
                <div className="flex items-center gap-3">
                  <Fingerprint className="h-5 w-5 text-mint-600" aria-hidden="true" />
                  <div>
                    <p className="text-sm font-semibold text-ink">Secure Process</p>
                    <p className="text-xs text-slate-500">Private and protected handling</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.form
            variants={itemVariants}
            className="relative overflow-hidden rounded-[28px] border border-slate-100 bg-white p-5 shadow-[0_18px_45px_rgba(11,26,56,0.08)] sm:p-7"
          >
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-brand-500 via-blue-500 to-mint-500" />

            <div className="mb-6 flex items-start justify-between gap-3">
              <div>
                <p className="pill-badge">Request Callback</p>
                <h3 className="mt-4 font-['Poppins'] text-2xl font-semibold tracking-tight text-ink">
                  Send a Message
                </h3>
              </div>
              <div className="hidden rounded-full border border-brand-100 bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700 sm:block">
                Usually replies same day
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <label className="sm:col-span-1">
                <span className="text-sm font-semibold text-ink">Full Name</span>
                <input
                  type="text"
                  className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50/80 px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-brand-300 focus:bg-white focus:ring-4 focus:ring-brand-100/70"
                  placeholder="Enter your name"
                />
              </label>

              <label className="sm:col-span-1">
                <span className="text-sm font-semibold text-ink">Email Address</span>
                <input
                  type="email"
                  className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50/80 px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-brand-300 focus:bg-white focus:ring-4 focus:ring-brand-100/70"
                  placeholder="your@email.com"
                />
              </label>

              <label className="sm:col-span-1">
                <span className="text-sm font-semibold text-ink">Phone Number</span>
                <input
                  type="tel"
                  className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50/80 px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-brand-300 focus:bg-white focus:ring-4 focus:ring-brand-100/70"
                  placeholder="+91 98765 43210"
                />
              </label>

              <label className="sm:col-span-1">
                <span className="text-sm font-semibold text-ink">Service Interest</span>
                <select className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50/80 px-4 py-3 text-sm outline-none transition focus:border-brand-300 focus:bg-white focus:ring-4 focus:ring-brand-100/70">
                  <option>Select a service</option>
                  {serviceOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </label>

              <label className="sm:col-span-2">
                <span className="text-sm font-semibold text-ink">Message</span>
                <textarea
                  rows="5"
                  className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50/80 px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-brand-300 focus:bg-white focus:ring-4 focus:ring-brand-100/70"
                  placeholder="Tell us about your requirements..."
                />
              </label>
            </div>

            <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-xs leading-5 text-slate-500">
                By submitting, you agree that Funds24 may contact you regarding your request.
              </p>
              <button className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-ink via-brand-700 to-blue-700 px-6 py-3.5 text-sm font-semibold text-white shadow-[0_16px_35px_rgba(11,26,56,0.18)] transition-all duration-100 hover:-translate-y-0 hover:shadow-[0_16px_35px_rgba(11,26,56,0.18)]">
                Request a Callback
                <SendHorizontal className="h-4 w-4 transition-transform duration-100 group-hover:translate-x-0" />
              </button>
            </div>
          </motion.form>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactSection;
