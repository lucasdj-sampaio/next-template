'use client';
import { Button } from '@/components';
import type { RootState } from '@/store';
import { useDispatch, useSelector } from 'react-redux';
import { increaseCounter } from '@/store/slices/count';
import Link from 'next/link';

export default function Home() {
  const dispatch = useDispatch();

  const sectionsData = useSelector((state: RootState) => state.countSlice);

  return (
    <div>
      <h1>{sectionsData.value}</h1>

      <button
        onClick={() => {
          dispatch(increaseCounter());
        }}
      >
        +
      </button>
      <Button />

      <Link href="/login">Ir</Link>
    </div>
  );
}
