import { Metadata } from 'next';
import { Footer } from '@/components/layout/footer';
import { MainNav } from '@/components/layout/main-nav';
import CoursesPageContent from '@/components/courses/courses-page-content';
import { BackgroundEffects } from '@/components/home/background-effects';

export const metadata: Metadata = {
  title: "Courses | Let's Learn",
  description: "Browse all available courses on Let's Learn platform",
};

export default function CoursesPage() {
  return (
    <>
      <BackgroundEffects />

      <div className='relative flex flex-col min-h-screen items-center'>
        <MainNav />

        <main className='flex-1 flex items-center justify-center py-12 w-full'>
          <CoursesPageContent />
        </main>

        <Footer />
      </div>
    </>
  );
}