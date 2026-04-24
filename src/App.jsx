import { useEffect, useState } from 'react';
import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  Briefcase,
  Building2,
  Calculator,
  Car,
  CircleDollarSign,
  Clock3,
  CreditCard,
  HeartHandshake,
  Home,
  Landmark,
  LineChart,
  LockKeyhole,
  PiggyBank,
  Scale,
  ShieldCheck,
  Sparkles
} from 'lucide-react';
import ContactSection from './components/ContactSection';
import DSAStrengthsSection from './components/DSAStrengthsSection';
import FinancialTools from './components/FinancialTools';
import AboutSection from './components/AboutSection';
import Footer from './components/Footer';
import LoanCategories from './components/LoanCategories';
import ServicesSection from './components/ServicesSection';
import TestimonialsSection from './components/TestimonialsSection';
import ValuesSection from './components/ValuesSection';
import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import brandLogo from './assests/ChatGPT Image Apr 24, 2026, 12_30_34 PM.png';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Products', href: '#products' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' }
];

const loanCategories = [
  { icon: Briefcase, title: 'Business Loan' },
  { icon: Home, title: 'Home Loan' },
  { icon: Car, title: 'New Car Loan' },
  { icon: CircleDollarSign, title: 'Personal Loans' },
  { icon: Car, title: 'Used Against Car' }
];

const financialTools = [
  {
    icon: LineChart,
    title: 'Credit Score Check',
    description: 'Check your credit score instantly and for free'
  },
  {
    icon: BadgeCheck,
    title: 'CIBIL Score Check',
    description: 'Get your detailed CIBIL report in minutes'
  },
  {
    icon: Calculator,
    title: 'EMI Calculator',
    description: 'Calculate your monthly EMI with ease'
  },
  {
    icon: Scale,
    title: 'Loan Eligibility Checker',
    description: 'Find out how much loan you can get'
  },
  {
    icon: BarChart3,
    title: 'Balance Transfer Tool',
    description: 'Compare and save on your existing loans'
  }
];

const aboutStats = [
  { icon: ShieldCheck, value: '100% Secure & Compliant' },
  { icon: HeartHandshake, value: '50K+ Happy Customers' },
  { icon: Clock3, value: '24 Hrs Quick Approval' },
  { icon: BadgeCheck, value: 'DSA Certified Agent' }
];

const services = [
  {
    icon: Landmark,
    title: 'Personal & Business Loans',
    description: 'Smartly curated lending options for personal milestones and business growth.'
  },
  {
    icon: ShieldCheck,
    title: 'Comprehensive Insurance',
    description: 'Well-rounded insurance guidance to protect health, assets, and future goals.'
  },
  {
    icon: CreditCard,
    title: 'Credit Card Solutions',
    description: 'Find cards aligned to your spending profile, rewards, and repayment comfort.'
  },
  {
    icon: Sparkles,
    title: 'Loan Restructuring',
    description: 'Structured support to optimize existing loan terms and improve repayment ease.'
  },
  {
    icon: PiggyBank,
    title: 'Financial Planning',
    description: 'Practical, transparent planning support for better long-term financial outcomes.'
  },
  {
    icon: Building2,
    title: 'Business Solutions',
    description: 'Tailored financial solutions designed to keep your operations agile and scalable.'
  }
];

const whyChooseUs = [
  'Multi-lender Access',
  'Transparent Comparisons',
  'Reduced Paperwork',
  'Faster Approvals',
  'One-stop Marketplace'
];

const corePrinciples = [
  'Honesty & Transparency',
  'Customer-Centric Approach',
  'Operational Efficiency',
  'Data Privacy & Security'
];

function App() {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  if (showLoader) {
    return <Preloader brandLogo={brandLogo} brandName="Funds24" />;
  }

  return (
    <div className="relative overflow-x-clip text-slate-800">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[580px] bg-hero-glow" />

      <Navbar brandLogo={brandLogo} navItems={navItems} />

      <main className="relative z-10">
        <section id="home" className="section-shell scroll-mt-24 pb-14 pt-10 sm:scroll-mt-28 sm:pb-20 sm:pt-16 lg:pb-24">
          <div className="grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
            <div className="animate-fadeup">
              <span className="pill-badge">
                <LockKeyhole className="h-3.5 w-3.5" aria-hidden="true" />
                Certified DSA Platform
              </span>
              <h1 className="mt-6 max-w-xl font-['Poppins'] text-3xl font-semibold leading-tight text-ink sm:text-4xl lg:text-5xl">
                Fast & Secure Financial Services
              </h1>
              <p className="mt-4 text-lg font-medium text-brand-700">Funds24.in</p>
              <p className="mt-5 max-w-xl text-base leading-7 text-slate-600 sm:text-lg">
                As a certified Direct Selling Agent (DSA), we provide access to multiple lenders,
                transparent comparisons, and a fully digital experience. Your financial goals,
                simplified.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <button className="group inline-flex items-center gap-2 rounded-xl bg-ink px-5 py-3 text-sm font-semibold text-white shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:bg-slate-900">
                  Check Eligibility
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
                <button className="rounded-xl border border-brand-100 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-300 hover:text-ink">
                  Explore Products
                </button>
              </div>
            </div>

            <div className="animate-fadeup [animation-delay:120ms]">
              <div className="glass-card animate-floaty relative overflow-hidden">
                <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-brand-400/15 blur-2xl" />
                <div className="absolute -bottom-10 -left-10 h-24 w-24 rounded-full bg-mint-300/30 blur-2xl" />
                <p className="pill-badge w-fit">
                  <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
                  Premium Advisory
                </p>
                <h3 className="mt-4 text-xl font-semibold text-ink sm:text-2xl">Financial Solutions - Tailored for You</h3>
                <p className="mt-4 text-sm font-medium text-slate-600">
                  Quick approval • Minimal documentation
                </p>
                <div className="mt-7 grid gap-3 text-sm sm:grid-cols-2">
                  <div className="rounded-xl border border-slate-100 bg-white p-4">
                    <p className="text-xs uppercase tracking-wide text-slate-500">Digital Journey</p>
                    <p className="mt-2 font-semibold text-ink">End-to-End Online</p>
                  </div>
                  <div className="rounded-xl border border-slate-100 bg-white p-4">
                    <p className="text-xs uppercase tracking-wide text-slate-500">Lender Network</p>
                    <p className="mt-2 font-semibold text-ink">Multi-bank Access</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="section-shell">
          <div className="gradient-divider" />
        </div>

        <LoanCategories items={loanCategories} />

        <FinancialTools items={financialTools} />

        <AboutSection stats={aboutStats} />

        <ServicesSection services={services} />

        <section className="section-shell py-10 sm:py-14">
          <div className="grid gap-6 lg:grid-cols-2">
            <article className="group relative overflow-hidden rounded-[22px] bg-gradient-to-br from-ink via-[#1d335c] to-[#263f70] p-5 text-white shadow-[0_16px_34px_rgba(11,26,56,0.2)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_45px_rgba(11,26,56,0.26)] sm:p-6">
              <div className="absolute -right-8 -top-10 h-32 w-32 rounded-full bg-white/10 blur-2xl" />
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
              <div className="relative z-10">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/12 text-white shadow-inner backdrop-blur-sm">
                  <Sparkles className="h-4 w-4" aria-hidden="true" />
                </div>
                <h3 className="mt-4 font-['Poppins'] text-2xl font-semibold tracking-tight sm:text-[1.85rem]">Our Mission</h3>
                <p className="mt-4 text-[0.95rem] leading-7 text-white/92 sm:text-base sm:leading-8">
                  To democratize access to financial services by providing transparent, efficient,
                  and customer-centric solutions that empower individuals and businesses to achieve
                  their financial goals.
                </p>
              </div>
            </article>

            <article className="group relative overflow-hidden rounded-[22px] bg-gradient-to-br from-[#4e8f66] via-[#4f8a64] to-[#5b8f6a] p-5 text-white shadow-[0_16px_34px_rgba(34,76,52,0.22)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_45px_rgba(34,76,52,0.28)] sm:p-6">
              <div className="absolute -left-8 -bottom-10 h-32 w-32 rounded-full bg-white/10 blur-2xl" />
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
              <div className="relative z-10">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/12 text-white shadow-inner backdrop-blur-sm">
                  <BadgeCheck className="h-4 w-4" aria-hidden="true" />
                </div>
                <h3 className="mt-4 font-['Poppins'] text-2xl font-semibold tracking-tight sm:text-[1.85rem]">Our Vision</h3>
                <p className="mt-4 text-[0.95rem] leading-7 text-white/92 sm:text-base sm:leading-8">
                  To become India's most trusted financial services platform, known for integrity,
                  innovation, and putting customers first in every decision we make.
                </p>
              </div>
            </article>
          </div>
        </section>

        <DSAStrengthsSection />

        <ValuesSection corePrinciples={corePrinciples} whyChooseUs={whyChooseUs} />

        <TestimonialsSection />

        <ContactSection />
      </main>

      <Footer brandLogo={brandLogo} />
    </div>
  );
}

export default App;