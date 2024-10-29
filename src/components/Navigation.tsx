import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";

const navList = [
  {
    title: "Pricing",
    href: "/pricing",
  },
  {
    title: "Contact",
    href: "/contact",
  },
];

export function Navigation() {
  return (
    <nav className="fixed w-screen top-2 z-50">
      <div className="py-3 px-4 container flex items-center justify-between bg-background rounded-md z-50 mx-auto">
        <p className="font-bold italic">EState</p>
        <ul className="flex items-center gap-4">
          {navList.map((nav) => {
            return (
              <li key={nav.title}>
                <Link
                  className="text-muted-foreground hover:text-primary hover:underline"
                  href={nav.href}
                >
                  {nav.title}
                </Link>
              </li>
            );
          })}
        </ul>
        <div>
          <Avatar>
            <AvatarImage src="" />
            <AvatarFallback>U</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </nav>
  );
}
