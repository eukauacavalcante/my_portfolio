import { Button } from "@/components/ui/Button";
import { Spinner } from "@/components/ui/Spinner";
import { getTranslations } from "next-intl/server";

export default async function Loading() {
  const t = await getTranslations("loading");

  return (
    <div className="flex justify-center items-center h-screen">
      <Button disabled size="sm">
        <Spinner />
        {t("loading")}
      </Button>
    </div>
  );
}
