'use client';
import { Provider } from 'react-redux';
import { store } from '@/store';

interface ProviderProps {
  children: React.ReactNode;
}

export const MyProvider: React.FC<ProviderProps> = ({
  children,
}: ProviderProps) => {
  return <Provider store={store}>{children}</Provider>;
};
