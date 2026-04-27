import {
  Globe,
  Home,
  Server,
  Terminal,
  Boxes,
  Activity,
  Bell,
  ShieldCheck,
  FileText,
  BookOpen,
  Rocket,
  Network,
  Cpu,
  HardDrive,
  Send,
  MessageSquare,
  CreditCard,
  Crown,
  KeyRound,
  Code,
  type LucideIcon,
} from 'lucide-react';

const iconMap: Record<string, LucideIcon> = {
  Globe,
  Home,
  Server,
  Terminal,
  Boxes,
  Activity,
  Bell,
  ShieldCheck,
  FileText,
  BookOpen,
  Rocket,
  Network,
  Cpu,
  HardDrive,
  Send,
  MessageSquare,
  CreditCard,
  Crown,
  KeyRound,
  Code,
};

interface IconProps {
  name: string;
  className?: string;
  size?: number;
}

export function Icon({ name, className, size = 16 }: IconProps) {
  const IconComponent = iconMap[name];

  if (!IconComponent) {
    return null;
  }

  return <IconComponent className={className} size={size} />;
}
