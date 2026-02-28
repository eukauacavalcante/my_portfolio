import { Separator } from "@/components/ui/separator";
import PageButton from "@/components/ui/PageButton";
import { getLocale, getTranslations } from "next-intl/server";

export default async function NotFound() {
  const locale = await getLocale();
  const t = await getTranslations({ locale, namespace: "notFound" });

  return (
    <div className="text-gray-200 flex flex-col items-center justify-center p-6 md:p-12 text-center min-h-screen">
      <h1 className="text-5xl md:text-6xl font-extrabold mb-4 text-transparent bg-clip-text bg-linear-to-r from-red-500 to-red-700 tracking-tight">
        404
      </h1>
      <h2 className="text-2xl md:text-5xl font-bold mb-3 text-primary">
        {t("title")}
      </h2>
      <p className="text-muted-foreground md:text-xl mb-10 max-w-lg">
        {t("description")}
      </p>

      <Separator className="max-w-6xl mx-auto my-12" />

      <PageButton
        href={`/${locale}`}
        target="_self"
        ariaLabel={t("backPortfolio")}
        title={t("backPortfolio")}
      >
        {t("backPortfolio")}
      </PageButton>
    </div>
  );
}
