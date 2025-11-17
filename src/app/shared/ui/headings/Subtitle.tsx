import type { ComponentProps } from "react";

export interface SubTitleProps extends ComponentProps<"h3"> {
  content: string;
  size: "small" | "medium" | "larger";
  align: "left" | "center" | "right";
}
export const SubTitle = ({ content, ...props }: SubTitleProps) => {
  return (
    <h3
      {...props}
      className="font-nunito text-kalita-brown-medium leading-relaxed text-lg lg:text-2xl"
    >
      {content}
    </h3>
  );
};
