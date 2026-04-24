import { motion } from 'framer-motion';

const Preloader = ({ brandLogo, brandName = 'Funds24' }) => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.45 }}
      className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#f7faff] via-[#edf3ff] to-[#e8f2ff]"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(47,128,255,0.15),transparent_35%),radial-gradient(circle_at_80%_15%,rgba(24,199,178,0.15),transparent_30%)]" />

      <div className="relative z-10 text-center">
        <motion.div
          animate={{ scale: [1, 1.04, 1], rotate: [0, 1.5, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="mx-auto flex h-[130px] w-[130px] items-center justify-center rounded-[30px] border border-white/70 bg-white/90 p-4 shadow-[0_24px_50px_rgba(11,26,56,0.14)] backdrop-blur-xl sm:h-[170px] sm:w-[170px]"
        >
          <img
            src={brandLogo}
            alt={brandName}
            className="h-[74px] w-[100px] object-contain sm:h-[98px] sm:w-[130px]"
          />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mt-6 font-['Poppins'] text-2xl font-semibold tracking-tight text-ink sm:text-3xl"
        >
          Funds24
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mx-auto mt-2 max-w-md px-4 text-sm font-medium text-slate-600 sm:text-base"
        >
          Fast decisions, trusted guidance, smarter financial growth.
        </motion.p>

        <div className="mx-auto mt-6 h-1.5 w-40 overflow-hidden rounded-full bg-white/90 shadow-inner sm:w-48">
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: '0%' }}
            transition={{ duration: 5, ease: 'linear' }}
            className="h-full w-full bg-gradient-to-r from-brand-500 via-blue-500 to-mint-500"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Preloader;
