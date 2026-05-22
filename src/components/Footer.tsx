export function Footer({ name }: { name: string }) {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-white/5 px-6 py-8">
      <div className="mx-auto max-w-6xl text-center text-sm text-zinc-600 sm:text-left">
        <p>
          © {year} {name}. Built with Next.js & deployed on Vercel.
        </p>
      </div>
    </footer>
  );
}
