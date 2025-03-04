import Link from "next/link";
import React from "react";
import ThemeToggle from "./ThemeToggle";

const links = ["about", "projects", "contact"];

const Navbar = () => {
  return (
    <nav className=" border-b-[0.5px] border-slate-300 dark:border-slate-600 bg-white dark:bg-black w-full dark:shadow-none">
      <div className="container mx-auto min-h-[10vh] flex items-center justify-between">
        <Link href={"/"} className="font-bold uppercase tracking-wider">
          Portfolio
        </Link>
        <div className="space-x-6">
          {links.map((l, i) => (
            <Link href={`/${l}`} key={i}>
              {`${l.charAt(0).toUpperCase()}${l.slice(1, l.length)}`}
            </Link>
          ))}
        </div>
        <ThemeToggle />
      </div>
    </nav>
  );
};

export default Navbar;
