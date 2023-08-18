'use client';
import { RootState } from '@/store';
import Link from 'next/link';
import { useSelector } from 'react-redux';

export default function Login() {
  const sectionsData = useSelector((state: RootState) => state.countSlice);

  return (
    <div>
      <Link href="./">Voltar</Link>
      <h1>{sectionsData.value}</h1>
    </div>
  );
}
