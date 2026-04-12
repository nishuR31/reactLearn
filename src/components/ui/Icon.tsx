import React from "react";
import * as LucideIcons from "lucide-react";

type IconName = keyof typeof LucideIcons;

interface IconProps extends React.ComponentProps<"svg"> {
  readonly name?: IconName | string;
  readonly size?: number | string;
  readonly className?: string;
  readonly props?: React.HTMLAttributes<any>;
}

export default function Icon({
  name,
  size = 16,
  className,
  ...props
}: IconProps) {
  if (!name) return null;
  const IconComp = (LucideIcons as any)[name];
  if (!IconComp)
    return (
      <LucideIcons.BadgeQuestionMark
        size={+size}
        className={className}
        {...props}
      />
    );
  const Comp = IconComp as React.ComponentType<any>;
  return <Comp size={+size} className={className} {...props} />;
}

export { Icon };
