'use client'
import { useEffect, useState, type ComponentProps } from "react";

export interface TitleProps extends ComponentProps<"h2"> {
  content: string;
  size: "small" | "medium" | "larger";
  align: "left" | "center" | "right";
}

export const Title = ({ content, ...props }: TitleProps) => {
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
    <h2
      {...props}
      className="lg:w-10/12 whitespace-pre-line md:whitespace-normal center-title-small font-antonio text-kalita-brown-dark lg:text-5xl"
    >
      {displayContent}
    </h2>
  );
};