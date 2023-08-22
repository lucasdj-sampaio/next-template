'use client';
import { useRouter } from 'next/navigation';
import Signin from '../login/signin/page';

interface SessionProviderProps {
  children: React.ReactNode;
}

export const SessionProvider: React.FC<SessionProviderProps> = ({
  children,
}: SessionProviderProps) => {
  const userSession = true; //Set authSession rules
  const router = useRouter();

  if (!userSession) {
    router.push('/login/signin');
    return <Signin />;
  } else {
    return <>{children}</>;
  }
};
