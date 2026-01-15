import * as FaIcons from "react-icons/fa";
import * as SiIcons from "react-icons/si";

type IconStackProps = {
  icon: string
  className?: string
  children?: React.ReactNode
}

export default function IconStack({ icon, className, children }: IconStackProps) {
  const IconComponent = (FaIcons as any)[icon] || (SiIcons as any)[icon]
  const DefaultIcon = FaIcons.FaCode

  return (
    <div className="flex flex-col items-center text-center">
      {IconComponent ? (
        <IconComponent className={`w-10 h-10 text-primary ${className}`} />
      ) : (
        <DefaultIcon className={`w-10 h-10 text-primary opacity-50 ${className}`} />
      )}
      <span className="mt-2 text-sm">{children}</span>
    </div>
  )
}
