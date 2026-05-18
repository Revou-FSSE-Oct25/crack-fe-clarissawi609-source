"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { useSession, signOut } from "next-auth/react";
import { Languages, User, LogOut, Menu, X } from "lucide-react";
import { useState } from "react";

export function MainNav() {
  const pathname = usePathname();
  const { data: session, status } = useSession();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (path: string) => {
    return pathname === path;
  };

  const navItems = [
    ...(session ? [{ name: "Dashboard", path: "/dashboard" }] : []),
    { name: "Courses", path: "/courses" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full flex justify-center border-b border-white/20 bg-white/30 backdrop-blur-xl shadow-lg">
      <div className="container flex h-16 items-center justify-between px-4">

        {/* Left */}
        <div className="flex items-center gap-6 md:gap-10">
          <Link
            href="/"
            className="flex items-center space-x-2 transition hover:opacity-80"
          >
            <Languages className="h-6 w-6 text-black" />

            <span className="hidden sm:inline-block text-lg font-bold tracking-tight text-black">
              Mandarin Academy
            </span>
          </Link>

          <nav className="hidden md:flex gap-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`text-sm font-medium transition-all duration-200 hover:text-black ${
                  isActive(item.path)
                    ? "text-black font-semibold"
                    : "text-black/60"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>

        {/* Right */}
        <div className="hidden md:flex items-center gap-4">
          {status === "authenticated" ? (
            <div className="flex items-center gap-4">

              <Button
                variant="ghost"
                size="icon"
                asChild
                className="hover:bg-white/30"
              >
                <Link href="/profile">
                  <User className="h-5 w-5 text-black" />
                  <span className="sr-only">Profile</span>
                </Link>
              </Button>

              <Button
                variant="outline"
                onClick={() => signOut()}
                className="border-white/20 bg-white/20 backdrop-blur-md hover:bg-white/40 text-black"
              >
                <LogOut className="mr-2 h-4 w-4" />
                Sign out
              </Button>

            </div>
          ) : (
            <div className="flex items-center gap-4">

              <Button
                variant="ghost"
                asChild
                className="hover:bg-white/30 text-black"
              >
                <Link href="/auth/signin">Sign in</Link>
              </Button>

              <Button
                asChild
                className="bg-black text-white hover:bg-black/80"
              >
                <Link href="/auth/signup">Sign up</Link>
              </Button>

            </div>
          )}
        </div>

        {/* Mobile Button */}
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            className="hover:bg-white/30"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6 text-black" />
            ) : (
              <Menu className="h-6 w-6 text-black" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-16 z-50 md:hidden bg-white/70 backdrop-blur-2xl">
          <div className="container py-6 flex flex-col gap-6">

            <nav className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`text-lg font-medium transition-colors ${
                    isActive(item.path)
                      ? "text-black"
                      : "text-black/60"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            <div className="flex flex-col gap-4">
              {status === "authenticated" ? (
                <>
                  <Button
                    variant="outline"
                    asChild
                    className="border-white/20 bg-white/30 backdrop-blur-md"
                  >
                    <Link
                      href="/profile"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <User className="mr-2 h-4 w-4" />
                      Profile
                    </Link>
                  </Button>

                  <Button
                    variant="default"
                    onClick={() => signOut()}
                    className="bg-black hover:bg-black/80"
                  >
                    <LogOut className="mr-2 h-4 w-4" />
                    Sign out
                  </Button>
                </>
              ) : (
                <>
                  <Button
                    variant="outline"
                    asChild
                    className="border-white/20 bg-white/30 backdrop-blur-md"
                  >
                    <Link
                      href="/auth/signin"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Sign in
                    </Link>
                  </Button>

                  <Button
                    asChild
                    className="bg-black text-white hover:bg-black/80"
                  >
                    <Link
                      href="/auth/signup"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Sign up
                    </Link>
                  </Button>
                </>
              )}
            </div>

          </div>
        </div>
      )}
    </header>
  );
} 