import { redirect } from "next/navigation";
import { defaultLocale } from "@/i18n";

interface DetailPageProps {
  params: { id: string };
}

export default function DetailPage({ params }: DetailPageProps) {
  redirect(`/${defaultLocale}/projects/${params.id}`);
}
