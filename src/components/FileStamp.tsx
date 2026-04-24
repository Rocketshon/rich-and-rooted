"use client";

import { usePathname } from "next/navigation";

// Per README: home=001, about=002, services=003, journal=004, post=004a, contact=005, disclaimers=006
function fileNumber(pathname: string): string {
  if (pathname === "/") return "001";
  if (pathname.startsWith("/about")) return "002";
  if (pathname.startsWith("/services")) return "003";
  if (pathname === "/blog" || pathname === "/blog/") return "004";
  if (pathname.startsWith("/blog/")) return "004a";
  if (pathname.startsWith("/contact")) return "005";
  if (pathname.startsWith("/disclaimers")) return "006";
  return "000";
}

export default function FileStamp() {
  const pathname = usePathname() ?? "/";
  const n = fileNumber(pathname);
  return (
    <div className="file-stamp" aria-hidden="true">
      File№&nbsp;{n}&nbsp;·&nbsp;Applicant-Side&nbsp;·&nbsp;Rich &amp; Rooted
    </div>
  );
}
