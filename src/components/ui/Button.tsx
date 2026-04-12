import React from "react";
import Icon from "./Icon";
import * as Lucide from "lucide-react";
type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "ghost" | "primary" | "secondary";
  text?: React.ReactNode;
  icon?: keyof typeof Lucide;
  iconPosition?: "left" | "right";
};

export default function Button({
  variant = "primary",
  text,
  icon,
  iconPosition = "left",
  children,
  ...props
}: ButtonProps) {
  const classes: Record<"ghost" | "primary" | "secondary", string> = {
    secondary: "aciton-secondary",
    primary: "action-primary",
    ghost: "action-ghost",
  };

  const content = text ?? children;

  const inner =
    icon ?
      <span className="inline-flex items-center gap-2">
        {iconPosition === "left" && (
          <Icon name={icon} className={classes[variant]} />
        )}
        {content}
        {iconPosition === "right" && (
          <Icon name={icon} className={classes[variant]} />
        )}
      </span>
    : content;

  return (
    <button className={`${classes[variant]} p-3 rounded-lg`} {...props}>
      {inner}
    </button>
  );
}
