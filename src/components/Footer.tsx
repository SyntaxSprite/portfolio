export function Footer({ name }: { name: string }) {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-white/[0.06] px-6 py-10">
      <div className="mx-auto max-w-6xl">
        <p className="text-sm text-zinc-600">
          © {year} {name}
        </p>
      </div>
    </footer>
  );
}
