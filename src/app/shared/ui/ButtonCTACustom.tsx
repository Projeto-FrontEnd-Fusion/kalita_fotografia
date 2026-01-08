import type { ComponentProps } from "react";

export interface ButtonProps extends ComponentProps<"button"> {
  content: string;
  size: "small" | "medium" | "larger";
}

//max-w-[278px] h-16

export function ButtonCTACustom({ content, size, ...props }: ButtonProps) {
  const sizeClassName = {
    small: "w-[132px] h-[38px] md:w-[161px] md:h-[59px]",
    medium: "w-[314px] h-[56px] md:w-[278px] md:h-[59px]",
    larger: "w-[314px] h-[56px]",
    
  };

  
  return (
    <button
      {...props}
      className={`
        text-white border border-white 
      text-sm rounded-md cursor-pointer 
        ${sizeClassName[size]} ${props.className || ""} `}
    >
      {content}
    </button>
  );
}
