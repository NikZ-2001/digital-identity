export default function Footer() {
  return (
    <footer className="glass-card mt-24 px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-sm text-neutral-500 sm:flex-row">
        <p>© {new Date().getFullYear()} <span className="gradient-text font-medium">Nikson Andrew C</span>. All rights reserved.</p>
        <div className="flex gap-4">
          <a href="https://github.com/NikZ-2001" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-accent-purple">
            <i className="bi bi-github text-lg" />
          </a>
        </div>
      </div>
    </footer>
  );
}