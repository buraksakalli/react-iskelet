import React from "react";
import "./styles.scss";
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
declare function Skeleton({ type, ...props }: SkeletonProps): JSX.Element;
declare namespace Skeleton {
    var Text: ({ count, width, height, ...props }: ItemProps) => JSX.Element;
    var Title: ({ count, width, height, ...props }: ItemProps) => JSX.Element;
    var Avatar: ({ count, width, height, ...props }: ItemProps) => JSX.Element;
    var Thumbnail: ({ count, width, height, ...props }: ItemProps) => JSX.Element;
}
export default Skeleton;
