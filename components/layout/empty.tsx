import { LayoutProps } from "@/models";
import Link from "next/link";
import * as React from "react";

export function EmptyLayout(props: LayoutProps) {
  return <>{props.children}</>;
}
