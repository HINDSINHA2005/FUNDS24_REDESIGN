const FeatureCard = ({ icon: Icon, title, description, className = '' }) => {
  return (
    <article className={`fin-card ${className}`.trim()}>
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500/12 to-mint-500/18 text-brand-700">
        <Icon className="h-5 w-5" aria-hidden="true" />
      </div>
      <h3 className="mt-5 text-lg font-semibold text-ink">{title}</h3>
      {description ? <p className="mt-2 text-sm leading-6 text-slate-600">{description}</p> : null}
    </article>
  );
};

export default FeatureCard;