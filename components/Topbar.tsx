import Link from "next/link";
import { FunctionComponent } from "react";
import logo from "./../images/devthread.svg";
import Image from "next/image";
import {} from "@radix-ui/react-icons";
import { buttonVariants } from "./ui/button";
export const Topbar: FunctionComponent = () => {
  return (
    <nav className="h-28 border-b border-border mx-8 p-8 flex items-center justify-between">
      <Link href={"/"}>
        <Image src={logo} alt="logo" className="w-28" />
      </Link>
      <div className="hidden md:block space-x-4 font-medium text-primary/80">
        <Link href={"/"} className="font-bold text-primary">
          Home
        </Link>
        <Link href={"/"}>Articles</Link>
        <Link href={"/"}>About</Link>
      </div>
      <div className="space-x-4 hidden md:block">
        <Link className={buttonVariants({ variant: "default" })} href={"/"}>
          Sing up
        </Link>
        <Link className={buttonVariants({ variant: "secondary" })} href={"/"}>
          Sing in
        </Link>
      </div>
    </nav>
  );
};
