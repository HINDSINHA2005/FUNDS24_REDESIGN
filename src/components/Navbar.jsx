import { AnimatePresence, motion, useScroll } from 'framer-motion';
import { useEffect, useMemo, useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = ({ brandLogo, navItems, brandName = 'Funds24', onMenuItemClick }) => {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(navItems[0]?.label ?? '');

  useEffect(() => {
    const unsubscribe = scrollY.on('change', (latest) => {
      setIsScrolled(latest > 12);
    });

    return () => unsubscribe();
  }, [scrollY]);

  useEffect(() => {
    const sections = navItems
      .map((item) => document.querySelector(item.href))
      .filter(Boolean);

    if (!sections.length) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries.find((entry) => entry.isIntersecting);

        if (visibleEntry) {
          const matched = navItems.find((item) => item.href === `#${visibleEntry.target.id}`);
          if (matched) {
            setActiveItem(matched.label);
          }
        }
      },
      {
        rootMargin: '-40% 0px -50% 0px',
        threshold: 0.1
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [navItems]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const headerClassName = useMemo(
    () =>
      isScrolled
        ? 'border-white/50 bg-white/72 shadow-[0_10px_30px_rgba(8,21,47,0.12)]'
        : 'border-white/20 bg-white/10 shadow-none',
    [isScrolled]
  );

  const itemBaseClass =
    'relative rounded-full px-4 py-2 text-sm font-medium tracking-tight transition-colors duration-100 md:px-5';

  return (
    <motion.header
      initial={{ opacity: 0, y: -18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
      className="sticky top-0 z-30 w-full"
    >
      <div className="w-full">
        <div
          className={`border-b backdrop-blur-2xl transition-all duration-150 ${headerClassName}`}
        >
          <nav className="section-shell flex items-center justify-between py-3 sm:py-3.5">
            <a href="#home" className="flex items-center gap-3 -ml-3 sm:ml-0" aria-label={`${brandName} Home`}>
              <img
                src={brandLogo}
                alt={brandName}
                className="h-12 w-[148px] object-contain sm:h-14 sm:w-[184px]"
              />
            </a>

            <div className="hidden items-center gap-2 rounded-full border border-white/40 bg-white/35 px-2 py-1 backdrop-blur-xl md:flex">
              {navItems.map((item) => {
                const isActive = activeItem === item.label;

                return (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => onMenuItemClick?.()}
                    className={`${itemBaseClass} group overflow-hidden ${isActive ? 'text-brand-700' : 'text-slate-600 hover:text-slate-800'}`}
                  >
                    <span className="relative z-10">{item.label}</span>
                    {isActive ? (
                      <motion.span
                        layoutId="activeNavPill"
                        className="absolute inset-0 rounded-full bg-white/90 shadow-[0_10px_24px_rgba(47,128,255,0.12)]"
                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                      />
                    ) : null}
                    <span className="absolute inset-x-4 -bottom-0.5 h-0.5 origin-left scale-x-0 rounded-full bg-gradient-to-r from-brand-500 to-mint-500 transition-transform duration-100 group-hover:scale-x-100" />
                  </a>
                );
              })}
            </div>

            <div className="hidden items-center gap-3 md:flex">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1 }}
                whileTap={{ scale: 0.98 }}
                className="rounded-full bg-gradient-to-r from-brand-600 via-brand-500 to-mint-500 px-5 py-2.5 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(47,128,255,0.2)] transition-shadow duration-100 hover:shadow-[0_12px_30px_rgba(47,128,255,0.2)]"
              >
                Sign Up
              </motion.a>
            </div>

            <button
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/50 bg-white/55 text-slate-700 backdrop-blur-xl transition duration-100 hover:bg-white/70 md:hidden"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </nav>

          <AnimatePresence>
            {mobileMenuOpen ? (
              <motion.div
                initial={{ opacity: 0, y: -8, height: 0 }}
                animate={{ opacity: 1, y: 0, height: 'auto' }}
                exit={{ opacity: 0, y: -8, height: 0 }}
                transition={{ duration: 0.15, ease: 'easeOut' }}
                className="overflow-hidden px-4 pb-4 md:hidden"
              >
                <div className="rounded-2xl border border-white/40 bg-white/72 p-3 shadow-[0_18px_40px_rgba(8,21,47,0.12)] backdrop-blur-xl">
                  <div className="space-y-1">
                    {navItems.map((item, index) => (
                      <motion.a
                        key={item.label}
                        href={item.href}
                        onClick={() => {
                          setMobileMenuOpen(false);
                          onMenuItemClick?.();
                        }}
                        initial={{ opacity: 0, x: -8 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.02 }}
                        className="flex items-center justify-between rounded-xl px-4 py-3 text-sm font-medium text-slate-700 transition duration-100 hover:bg-white/65 hover:text-slate-900"
                      >
                        <span>{item.label}</span>
                        <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
                      </motion.a>
                    ))}
                  </div>

                  <motion.a
                    href="#contact"
                    whileTap={{ scale: 0.97 }}
                    className="mt-3 block rounded-xl bg-gradient-to-r from-brand-600 via-brand-500 to-mint-500 px-5 py-3 text-center text-sm font-semibold text-white shadow-[0_12px_30px_rgba(47,128,255,0.18)]"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Sign Up
                  </motion.a>
                </div>
              </motion.div>
            ) : null}
          </AnimatePresence>
        </div>
      </div>
    </motion.header>
  );
};

export default Navbar;