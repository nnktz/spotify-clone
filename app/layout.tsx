import type { Metadata } from 'next';
import { Figtree } from 'next/font/google';

import getSongsByUserId from '@/actions/get-songs-by-user-id';

import Sidebar from '@/components/sidebar';
import Player from '@/components/player';
import SupabaseProvider from '@/components/providers/supabase-provider';
import UserProvider from '@/components/providers/user-provider';
import ModalProvider from '@/components/providers/modal-provider';
import ToastProvider from '@/components/providers/toast-provider';

import './globals.css';

const font = Figtree({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Spotify - Web Player: Music for everyone',
  description: 'Listen to music!',
};

export const revalidate = 0;

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const userSongs = await getSongsByUserId();

  return (
    <html lang='en'>
      <body className={font.className}>
        <ToastProvider />
        <SupabaseProvider>
          <UserProvider>
            <ModalProvider />
            <Sidebar songs={userSongs}>{children}</Sidebar>
            <Player />
          </UserProvider>
        </SupabaseProvider>
      </body>
    </html>
  );
}
