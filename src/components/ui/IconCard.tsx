type IconCardProps = {
  children: React.ReactNode
}

export default function IconCard({ children }: IconCardProps) {
  return (
    <div className="p-4 bg-secondary rounded-lg shadow-md hover:shadow-lg transition-shadow">
      {children}
    </div>
  )
}
