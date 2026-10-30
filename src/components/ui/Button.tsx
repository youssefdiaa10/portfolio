import Link from "next/link";
import type { AnchorHTMLAttributes, ReactNode } from "react";

type ButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  children: ReactNode;
};

export function Button({ href, children, ...props }: ButtonProps) {
  return <Link className="button" href={href} {...props}>{children}</Link>;
}
