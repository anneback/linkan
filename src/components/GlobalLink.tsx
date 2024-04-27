"use client";
import Link from "next/link";
import SvgIcon, { Icons } from "./SvgIcon";

type GlobalLinkProps = {
  icon: Icons;
  text: string;
  href: string;
};

const GlobalLink = (props: GlobalLinkProps) => {
  const { icon, text, href } = props;
  return (
    <button
      className="flex flex-col items-center"
      onClick={() => console.log(href)}
    >
      <SvgIcon icon={icon} />
      <p className="text-xs text-slate-300">{text}</p>
    </button>
  );
};

export default GlobalLink;
