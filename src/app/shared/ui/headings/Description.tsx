"use client"
import { useEffect, useState, type ComponentProps } from "react";

export interface DescriptionProps extends ComponentProps<"p"> {
  content: string;
  size: "small" | "medium" | "larger";
  align: "left" | "center" | "right";
}
export const Description = ({ content, ...props }: DescriptionProps) => {

  const [windowWidth, setWindowWidth] = useState<number | null>(null);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const displayContent = windowWidth && windowWidth >= 768 
    ? content.replace("\n", "") 
    : content;
  return (
    <p
      {...props}
      className="lg:w-8/12 whitespace-pre-line md:whitespace-normal center-description-small font-nunito leading-relaxed text-lg lg:text-2xl"
    >
      {displayContent}
      
    </p>
  );
};
