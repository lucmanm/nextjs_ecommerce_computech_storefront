import { cn } from "@/lib/utils";
import { MouseEventHandler, ReactNode } from "react";
import { Button } from "./ui/button";

type TCustomButton = {
  children?: ReactNode;
  icon?: React.ReactElement;
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
  isDisabled?: boolean | undefined;
};

export const CustomButton: React.FC<TCustomButton> = ({
  children,
  icon,
  className,
  onClick,
  isDisabled,
}) => {
  return (
    <Button
      disabled={isDisabled}
      className={cn("flex items-center rounded-full px-2", className)}
      variant="ghost"
      onClick={onClick}
    >
      <span>{icon}</span> {children}
    </Button>
  );
};
