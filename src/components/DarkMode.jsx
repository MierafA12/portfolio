'use client'
export default function DarkMode({ darkMode, setDarkMode }) {
  return (
    <div className="text-right px-4 py-2">
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="bg-gray-200 dark:bg-gray-700 px-4 py-1 rounded"
      >
        {darkMode ? "☀ Light Mode" : "🌙 Dark Mode"}
      </button>
    </div>
  );
}
