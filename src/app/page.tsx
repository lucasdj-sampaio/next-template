'use client';
import { SessionProvider } from '@/util/sessionProvider';

export default function Home() {
  return (
    <SessionProvider>
      <h1>HOME</h1>
    </SessionProvider>
  );
}
