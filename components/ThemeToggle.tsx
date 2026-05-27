"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export default function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Prevent hydration mismatch by waiting until mounted on the client
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    // Return a placeholder or empty button matching the size to avoid layout shift
    return <div className="w-10 h-10" /> 
  }

  // Use resolvedTheme to know exactly what is rendering (handles "system" preference)
  const isDark = resolvedTheme === "dark"

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="p-2 rounded-lg bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:opacity-90 transition-all duration-200"
      aria-label="Toggle dark mode"
    >
      {isDark ? "☀️ Light Mode" : "🌙 Dark Mode"}
    </button>
  )
}