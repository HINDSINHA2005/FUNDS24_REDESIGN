const SectionHeader = ({ badge, title, subtitle, align = 'left' }) => {
  const centered = align === 'center';

  return (
    <div className={centered ? 'mx-auto max-w-3xl text-center' : ''}>
      {badge ? <span className="pill-badge">{badge}</span> : null}
      <h2 className="section-title mt-4">{title}</h2>
      {subtitle ? <p className="section-subtitle">{subtitle}</p> : null}
    </div>
  );
};

export default SectionHeader;