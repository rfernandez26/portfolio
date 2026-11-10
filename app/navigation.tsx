"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Code2 } from "lucide-react";

const links = [
  ["/", "Home"],
  ["/about", "About"],
  ["/education", "Education"],
  ["/hobbies", "Hobbies"],
  ["/contact", "Contact"],
];

export default function Navigation() {
  const pathname = usePathname();
  return (
    <header className="site-header">
      <div className="nav-inner">
        <Link href="/" className="brand"><Code2 size={21} strokeWidth={1.8} /><span>Rachel<span className="brand-light">Portfolio</span></span></Link>
        <nav aria-label="Main navigation">
          {links.map(([href, label]) => (
            <Link key={href} href={href} aria-current={pathname === href ? "page" : undefined}>{label}</Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
