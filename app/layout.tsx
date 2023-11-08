import type { Metadata } from 'next';
import { Figtree } from 'next/font/google';

import Sidebar from '@/components/sidebar';
import SupabaseProvider from '@/components/providers/supabase-provider';
import UserProvider from '@/components/providers/user-provider';

import './globals.css';

const font = Figtree({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Spotify - Web Player: Music for everyone',
  description: 'Listen to music!',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={font.className}>
        <SupabaseProvider>
          <UserProvider>
            <Sidebar>{children}</Sidebar>
          </UserProvider>
        </SupabaseProvider>
      </body>
    </html>
  );
}
