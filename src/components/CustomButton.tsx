import { cn } from "@/lib/utils";
import { MouseEventHandler, ReactNode } from "react";
import { Button } from "./ui/button";

type TCustomButton = {
  children?: ReactNode;
  icon?: React.ReactElement;
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
};

export const CustomButton: React.FC<TCustomButton> = ({
  children,
  icon,
  className,
  onClick,
}) => {
  return (
    <Button
      className={cn("flex items-center rounded-full px-2", className)}
      variant="ghost"
      onClick={onClick}
    >
      <span>{icon}</span> {children}
    </Button>
  );
};
