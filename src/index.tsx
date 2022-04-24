import React from "react";
import "./styles.scss";

function cn(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  type?: "text" | "title" | "thumbnail" | "image" | "select";
}

const SkeletonChildren = ({ type, ...props }: SkeletonProps) => {
  switch (type) {
    case "text":
      return <Text {...props} />;
    case "title":
      return <Title {...props} />;
    case "thumbnail":
      return <Thumbnail {...props} />;
    case "image":
      return <Image {...props} />;
    default:
      return <Text {...props} />;
  }
};

export default function Skeleton({ type = "text", ...props }: SkeletonProps) {
  return <SkeletonChildren type={type} {...props} />;
}

const Text = ({ ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("skeleton__text", props?.className!)} />
);
const Title = ({ ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("skeleton__title", props?.className!)} />
);
const Thumbnail = ({ ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("skeleton__thumbnail", props?.className!)} />
);
const Image = ({ ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("skeleton__image", props?.className!)} />
);

Skeleton.Text = Text;
Skeleton.Title = Title;
Skeleton.Image = Image;
Skeleton.Thumbnail = Thumbnail;
