import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({ children, className, hover = true }: CardProps) {
  return (
    <div className={cn("civic-card p-6", hover && "cursor-default", className)}>
      {children}
    </div>
  );
}
