import * as React from "react";

export interface HeaderProps {}

function Header(props: HeaderProps) {
  console.log("render header");

  return <div className="header">Header</div>;
}

export default Header;
