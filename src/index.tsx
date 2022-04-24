import React from "react";
import "./styles.scss";

function cn(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  type: "text" | "title" | "thumbnail" | "avatar";
  count?: number;
}

interface ItemProps extends React.HTMLAttributes<HTMLDivElement> {
  count?: number;
}

interface MultipleLinesProps extends React.HTMLAttributes<HTMLDivElement> {
  count: number;
  baseClass: string;
}

const SkeletonChildren = ({ type, count, ...props }: SkeletonProps) => {
  switch (type) {
    case "text":
      return <Text {...props} count={count} />;
    case "title":
      return <Title {...props} count={count} />;
    case "thumbnail":
      return <Thumbnail {...props} count={count} />;
    case "avatar":
      return <Avatar {...props} count={count} />;
    default:
      return <Text {...props} count={count} />;
  }
};

export default function Skeleton({ type = "text", ...props }: SkeletonProps) {
  return <SkeletonChildren type={type} {...props} />;
}

const MultipleLines = ({ count, baseClass, ...props }: MultipleLinesProps) => {
  return (
    <>
      {[...Array(count)].map((_, i: number) => (
        <div key={i} className={cn(baseClass, props?.className!)} />
      ))}
    </>
  );
};

const Text = ({ count, ...props }: ItemProps) => {
  if (count)
    return (
      <MultipleLines count={count} baseClass="skeleton__text" {...props} />
    );
  return <div className={cn("skeleton__text", props?.className!)} />;
};

const Title = ({ count, ...props }: ItemProps) => {
  if (count)
    return (
      <MultipleLines count={count} baseClass="skeleton__title" {...props} />
    );
  return <div className={cn("skeleton__title", props?.className!)} />;
};

const Thumbnail = ({ count, ...props }: ItemProps) => {
  if (count)
    return (
      <MultipleLines count={count} baseClass="skeleton__thumbnail" {...props} />
    );
  return <div className={cn("skeleton__thumbnail", props?.className!)} />;
};

const Avatar = ({ count, ...props }: ItemProps) => {
  if (count)
    return (
      <MultipleLines count={count} baseClass="skeleton__avatar" {...props} />
    );
  return <div className={cn("skeleton__avatar", props?.className!)} />;
};

Skeleton.Text = Text;
Skeleton.Title = Title;
Skeleton.Avatar = Avatar;
Skeleton.Thumbnail = Thumbnail;
