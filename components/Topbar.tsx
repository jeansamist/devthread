"use client";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { Home, Login, TrendUp, Sun1, Moon } from "iconsax-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { FunctionComponent } from "react";
import { Input } from "./ui/input";
export const Topbar: FunctionComponent = () => {
  const { theme, setTheme } = useTheme();
  function toggleTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }
  return (
    <nav className="relative bg-card border-b h-16 flex items-center z-50">
      <div className="container flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-4 w-4 bg-primary"></div>
          <div className="font-bold">DevThread</div>
        </div>
        <div className="flex items-center gap-4">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href="/" legacyBehavior passHref>
                  <NavigationMenuLink
                    className={cn(
                      navigationMenuTriggerStyle(),
                      "bg-card",
                      "space-x-2 font-bold hover:bg-card"
                    )}
                  >
                    <Home variant="Bold" size={20} className="text-primary" />
                    <span>Home</span>
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/trends" legacyBehavior passHref>
                  <NavigationMenuLink
                    className={cn(
                      navigationMenuTriggerStyle(),
                      "bg-card",
                      "space-x-2"
                    )}
                  >
                    <TrendUp variant="Linear" size={20} />
                    <span>Popular</span>
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <span className="text-muted-foreground">|</span>
          <Link href="/login" className={cn(buttonVariants(), "space-x-2")}>
            <Login variant="Linear" size={20} />
            <span>Sing In</span>
          </Link>
          <div>
            <Button
              variant={"ghost"}
              className="p-0 w-8 h-8"
              onClick={toggleTheme}
            >
              {theme === "light" ? <Sun1 size={16} /> : <Moon size={16} />}
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};
