export function Footer({ name }: { name: string }) {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-white/5 px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-sm text-zinc-600 sm:flex-row">
        <p>
          © {year} {name}. Built with Next.js & deployed on Vercel.
        </p>
        <p className="font-mono text-xs">
          Edit{" "}
          <span className="text-zinc-500">src/data/portfolio.json</span> to
          update
        </p>
      </div>
    </footer>
  );
}
