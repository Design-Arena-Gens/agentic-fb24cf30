import { FiCompass, FiActivity, FiUsers, FiMessageCircle } from "react-icons/fi";
import type { IconType } from "react-icons";

const iconMap: Record<string, IconType> = {
  FiCompass,
  FiActivity,
  FiUsers,
  FiMessageCircle
};

type IconBadgeProps = {
  icon: string;
};

export function IconBadge({ icon }: IconBadgeProps) {
  const Icon = iconMap[icon] ?? FiCompass;

  return (
    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-lagoon/30 text-mint shadow-glow">
      <Icon className="h-6 w-6" />
    </div>
  );
}
