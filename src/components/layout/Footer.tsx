export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 px-6 py-10 dark:border-neutral-800">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-sm text-neutral-500 sm:flex-row">
        <p>© {new Date().getFullYear()} Nikson Andrew C. All rights reserved.</p>
        <div className="flex gap-4">
          <a href="https://github.com/NikZ-2001" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-black dark:hover:text-white">
            <i className="bi bi-github text-lg" />
          </a>
        </div>
      </div>
    </footer>
  );
}