export function Footer() {
  return (
    <footer className="relative py-10 border-t border-pencil/10 text-center z-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="font-sketch text-graphite text-sm">
          © 2025 Sushant Kumar · Handcrafted in Bengaluru
        </p>
        <p className="font-sketch text-pencil/40 text-xs">
          sketched with graphite, shipped with code
        </p>
      </div>
    </footer>
  );
}
