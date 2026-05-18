"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";

export function HeroSection() {
  const { user } = useAuth();

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 md:grid-cols-2 items-center">
          {/* Left Content */}
          <div className="flex flex-col space-y-4">
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-red-500 via-orange-400 to-amber-300 bg-clip-text text-transparent">
              Your Journey to Fluent Mandarin Starts Here
            </h1>

            <p className="text-lg text-muted-foreground md:text-xl">
              Learn Mandarin through structured courses and immersive video
              lessons designed for beginners to advanced learners.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mt-4">
              <Button asChild size="lg">
                <Link href="/courses">Discovers</Link>
              </Button>

              {!user && (
                <Button asChild variant="outline" size="lg">
                  <Link href="/auth/signup">Start Learning Free</Link>
                </Button>
              )}
            </div>
          </div>

          {/* Right Hero Image */}
          <div className="rounded-lg overflow-hidden h-[300px] md:h-[400px] lg:h-[500px] relative">
            <img
              src="/mandarin-hero.jpg"
              alt="Mandarin Learning"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
