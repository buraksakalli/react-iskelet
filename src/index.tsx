import React from "react";
import "./styles.scss";

function cn(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

function getCustomStyles(width?: string | number, height?: string | number) {
  const styles: React.CSSProperties = {};
  if (width !== undefined) {
    styles.width = typeof width === 'number' ? `${width}px` : width;
  }
  if (height !== undefined) {
    styles.height = typeof height === 'number' ? `${height}px` : height;
  }
  return Object.keys(styles).length > 0 ? styles : undefined;
}

export interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  type: "text" | "title" | "thumbnail" | "avatar";
  count?: number;
  width?: string | number;
  height?: string | number;
}

interface ItemProps extends React.HTMLAttributes<HTMLDivElement> {
  count?: number;
  width?: string | number;
  height?: string | number;
}

interface MultipleLinesProps extends React.HTMLAttributes<HTMLDivElement> {
  count: number;
  baseClass: string;
  width?: string | number;
  height?: string | number;
}

const SkeletonChildren = ({ type, count, width, height, ...props }: SkeletonProps) => {
  switch (type) {
    case "text":
      return <Text {...props} count={count} width={width} height={height} />;
    case "title":
      return <Title {...props} count={count} width={width} height={height} />;
    case "thumbnail":
      return <Thumbnail {...props} count={count} width={width} height={height} />;
    case "avatar":
      return <Avatar {...props} count={count} width={width} height={height} />;
    default:
      return <Text {...props} count={count} width={width} height={height} />;
  }
};

export default function Skeleton({ type = "text", ...props }: SkeletonProps) {
  return <SkeletonChildren type={type} {...props} />;
}

const MultipleLines = ({ count, baseClass, width, height, ...props }: MultipleLinesProps) => {
  const customStyles = getCustomStyles(width, height);
  return (
    <>
      {[...Array(count)].map((_, i: number) => (
        <div 
          key={i} 
          className={cn(baseClass, props?.className!)} 
          style={{ ...customStyles, ...props.style }}
        />
      ))}
    </>
  );
};

const Text = ({ count, width, height, ...props }: ItemProps) => {
  const customStyles = getCustomStyles(width, height);
  if (count)
    return (
      <MultipleLines count={count} baseClass="skeleton__text" width={width} height={height} {...props} />
    );
  return (
    <div 
      className={cn("skeleton__text", props?.className!)} 
      style={{ ...customStyles, ...props.style }}
    />
  );
};

const Title = ({ count, width, height, ...props }: ItemProps) => {
  const customStyles = getCustomStyles(width, height);
  if (count)
    return (
      <MultipleLines count={count} baseClass="skeleton__title" width={width} height={height} {...props} />
    );
  return (
    <div 
      className={cn("skeleton__title", props?.className!)} 
      style={{ ...customStyles, ...props.style }}
    />
  );
};

const Thumbnail = ({ count, width, height, ...props }: ItemProps) => {
  const customStyles = getCustomStyles(width, height);
  if (count)
    return (
      <MultipleLines count={count} baseClass="skeleton__thumbnail" width={width} height={height} {...props} />
    );
  return (
    <div 
      className={cn("skeleton__thumbnail", props?.className!)} 
      style={{ ...customStyles, ...props.style }}
    />
  );
};

const Avatar = ({ count, width, height, ...props }: ItemProps) => {
  const customStyles = getCustomStyles(width, height);
  if (count)
    return (
      <MultipleLines count={count} baseClass="skeleton__avatar" width={width} height={height} {...props} />
    );
  return (
    <div 
      className={cn("skeleton__avatar", props?.className!)} 
      style={{ ...customStyles, ...props.style }}
    />
  );
};

Skeleton.Text = Text;
Skeleton.Title = Title;
Skeleton.Avatar = Avatar;
Skeleton.Thumbnail = Thumbnail;
