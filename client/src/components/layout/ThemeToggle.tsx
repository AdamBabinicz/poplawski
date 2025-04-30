import { useTheme } from "../ui/theme-provider";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      type="button"
      className="p-1 text-gray-500 dark:text-gray-400 hover:text-cosmic-blue dark:hover:text-cosmic-blue transition-colors rounded-md"
      aria-label="Toggle dark mode"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {/* Sun icon for dark mode (show in dark mode) */}
      <i className='bx bx-sun hidden dark:inline text-2xl' aria-hidden="true"></i>
      {/* Moon icon for light mode (show in light mode) */}
      <i className='bx bx-moon inline dark:hidden text-2xl' aria-hidden="true"></i>
    </button>
  );
}
