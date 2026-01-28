import Link from "next/link";
import type { ComponentProps } from "react";

export interface ButtonProps extends ComponentProps<"button"> {
  content: string;
  size: "small" | "medium" | "larger";
  href?: string
}

//max-w-[278px] h-16

export function ButtonCTA({ content, size, href='', ...props }: ButtonProps) {
  const sizeClassName = {
    small: "w-[132px] h-[38px] md:w-[161px] md:h-[59px]",
    medium: "w-[314px] h-[56px] md:w-[278px] md:h-[59px]",
    larger: "w-[314px] h-[56px]",
    
  };

  
  return (
    <button
      {...props}
      className={`hover:bg-black
        text-white bg-kalita-brown-medium text-kalita-background-light 
      text-sm rounded-md cursor-pointer 
        ${sizeClassName[size]} ${props.className || ""} `}
    >
      <Link href={href as string}>{content}</Link>
    </button>
  );
}
