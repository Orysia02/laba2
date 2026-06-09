function Experience() {
  return (
    <section className="bg-slate-900/60 border border-slate-800 p-6 rounded-2xl shadow-lg mb-6 backdrop-blur-sm">
      <h2 className="text-xl font-bold text-slate-100 border-l-4 border-pink-500 pl-3 mb-6 tracking-wider uppercase">
        🚀 Досвід роботи
      </h2>
      <div className="space-y-4">
        <div className="group p-5 rounded-xl bg-slate-900 border border-slate-800/80 hover:border-pink-500/40 transition-all duration-300 hover:scale-[1.01]">
          <div className="flex justify-between items-start flex-wrap gap-2">
            <h3 className="text-lg font-bold text-slate-200 group-hover:text-pink-400 transition-colors">
              Middle Node.js Developer — SpaceTech
            </h3>
            <span className="text-xs bg-pink-950/60 text-pink-400 px-3 py-1 rounded-md border border-pink-900/50 font-mono">
              2025 - 2026
            </span>
          </div>
          <p className="text-slate-400 mt-3 text-sm leading-relaxed">
            Проєктування архітектури баз даних, створення високонавантажених API та інтеграція хмарних сервісів. Оптимізував запити, зменшивши час відгуку на 25%.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Experience;