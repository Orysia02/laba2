function Education() {
  return (
    <section className="bg-slate-900/60 border border-slate-800 p-6 rounded-2xl shadow-lg mb-6 backdrop-blur-sm">
      <h2 className="text-xl font-bold text-slate-100 border-l-4 border-cyan-500 pl-3 mb-6 tracking-wider uppercase">
        🎓 Освіта
      </h2>
      <div className="p-5 rounded-xl bg-slate-900 border border-slate-800/80">
        <div className="flex justify-between items-start flex-wrap gap-2">
          <div>
            <h3 className="text-lg font-bold text-slate-200">Інженерія програмного забезпечення</h3>
            <p className="text-cyan-400 text-sm mt-1 font-medium">Технічний Університет</p>
          </div>
          <span className="text-sm font-mono text-slate-500">2022 - 2026</span>
        </div>
      </div>
    </section>
  );
}

export default Education;