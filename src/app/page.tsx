import { redirect } from "next/navigation";
import { defaultLocale } from "@/i18n/i18n";

// Fallback caso o middleware não intercepte (ex: acesso direto)
export default function RootPage() {
  redirect(`/${defaultLocale}`);
}
