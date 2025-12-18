"use client"

import {useState} from "react"
import {usePathname, useRouter} from "next/navigation"

export default function Header() {
  const router = useRouter()
  const pathname = usePathname()
  const [isLanguageOpen, setIsLanguageOpen] = useState(false)

  const changeLanguage = (newLocale: "en" | "es") => {
    if (!pathname) return

    const segments = pathname.split("/")

    // pathname always starts with /
    // segments[1] is the locale
    segments[1] = newLocale

    const newPath = segments.join("/") || `/${newLocale}`
    router.push(newPath)
    setIsLanguageOpen(false)
  }

  return (
    <header className="flex items-center justify-between p-4">
      <div className="text-lg font-bold">Faro</div>

      <div className="relative">
        <button
          onClick={() => setIsLanguageOpen(prev => !prev)}
          className="px-3 py-2 border rounded"
        >
          Language
        </button>

        {isLanguageOpen && (
          <div className="absolute right-0 mt-2 w-32 border rounded bg-white shadow">
            <button
              onClick={() => changeLanguage("en")}
              className="block w-full px-4 py-2 text-left hover:bg-gray-100"
            >
              English
            </button>
            <button
              onClick={() => changeLanguage("es")}
              className="block w-full px-4 py-2 text-left hover:bg-gray-100"
            >
              Español
            </button>
          </div>
        )}
      </div>
    </header>
  )
}
