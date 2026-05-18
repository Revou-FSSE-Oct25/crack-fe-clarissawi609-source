'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/hooks/useAuth';
import { Logo } from '@/components/logo';

interface HeaderProps {
  toggleSidebar: () => void;
}

export function Header({ toggleSidebar }: HeaderProps) {
  const { user, logout } = useAuth();

  return (
    <header className='fixed top-0 left-0 right-0 h-16 z-50 border-b border-white/20 bg-white/30 backdrop-blur-xl shadow-lg'>
      <div className='h-full max-w-7xl mx-auto px-6 flex items-center justify-between'>
        
        {/* Left */}
        <div className='flex items-center gap-4'>
          <Button
            variant='ghost'
            onClick={toggleSidebar}
            className='hover:bg-white/20 text-black'
          >
            ☰
          </Button>

{/* LOGO */}
<div>
  <Link
    href='/admin'
    className='flex items-center gap-3 group'
  >
    <Logo />

    <span className='text-xl font-bold tracking-tight text-black'>
      Mandarin Academy Admin
    </span>
  </Link>
</div>
        </div>

        {/* Right */}
        <div className='flex items-center gap-4'>
          <div className='px-4 py-2 rounded-full bg-white/40 backdrop-blur-md border border-white/20 text-sm font-medium text-black shadow-sm'>
            {user?.username} {user?.role ? `(${user.role})` : ''}
          </div>

          <Button
            variant='outline'
            size='sm'
            onClick={logout}
            className='border-white/20 bg-white/30 backdrop-blur-md hover:bg-white/50 text-black'
          >
            Logout
          </Button>
        </div>
      </div>
    </header>
  );
}
