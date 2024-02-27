import { LayoutProps } from "@/models";
import Link from "next/link";
import * as React from "react";

export function AdminLayout(props: LayoutProps) {
  return (
    <div>
      <h1>Admin Layout</h1>
      <div>Sidebar</div>

      <Link href={"/"}>Home</Link>
      <Link href={"/about"}>About</Link>

      <div>{props.children}</div>
    </div>
  );
}
