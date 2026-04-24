const StatBadge = ({ icon: Icon, value }) => {
  return (
    <div className="rounded-2xl border border-slate-100 bg-white px-4 py-4 shadow-sm transition-transform duration-300 hover:-translate-y-0.5">
      <div className="flex items-center gap-3">
        <div className="rounded-xl bg-brand-50 p-2 text-brand-700">
          <Icon className="h-4 w-4" aria-hidden="true" />
        </div>
        <p className="text-sm font-semibold text-slate-700">{value}</p>
      </div>
    </div>
  );
};

export default StatBadge;