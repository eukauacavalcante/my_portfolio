import { Button } from "@/components/ui/button"
import { Spinner } from "@/components/ui/spinner"


export default function Loading() {
  return (
    <div className="flex justify-center items-center h-screen">
      <Button disabled size="sm">
        <Spinner />
      </Button>
    </div>
  )
}
