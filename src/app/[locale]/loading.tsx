import { Button } from "@/components/ui/button"
import { Spinner } from "@/components/ui/spinner"
import { getTranslations } from "next-intl/server"


export default async function Loading() {
    const t = await getTranslations("loading")

    return (
    <div className="flex justify-center items-center h-screen">
        <Button disabled size="sm">
        <Spinner />
        {t("loading")}
        </Button>
    </div>
    )
}
