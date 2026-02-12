import Link from "next/link"
import { defaultLocale } from "@/i18n"


export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center">
      <h1 className="text-5xl font-extrabold mb-4">404</h1>
      <p className="text-lg mb-8 text-gray-500">Page not found</p>
      <Link
        href={`/${defaultLocale}`}
        className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
      >
        Go home
      </Link>
    </div>
  )
}
