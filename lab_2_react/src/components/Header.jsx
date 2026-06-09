function Header() {
  return (
    <header className="text-center bg-slate-900 border border-purple-500/30 p-8 rounded-3xl shadow-[0_0_25px_rgba(139,92,246,0.15)] mb-6 transition-all duration-300 hover:border-purple-500/60">
      <h1 className="text-4xl font-black bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent tracking-tight mb-2">
        Ореста (Варіант 13)
      </h1>
      <p className="text-xl font-medium text-purple-300 tracking-wide">
        Позиція: Junior Frontend Developer / UI-UX Designer
      </p>
      <div className="mt-4 flex justify-center gap-6 text-sm text-slate-400">
        <span className="flex items-center gap-1">📍 Львів, Україна</span>
        <span>•</span>
        <p>
          Email: <a href="mailto:orysiamagon45@gmail.com" className="hover:text-purple-400 transition-colors duration-200 underline decoration-purple-500/40">
            orysiamagon45@gmail.com
          </a>
        </p>
      </div>
    </header>
  );
}

export default Header;