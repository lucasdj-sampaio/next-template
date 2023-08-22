'use client';
import { privateAuthRote } from '@/util/authRules';

export default function Home() {
  privateAuthRote();

  return <h1>HOME</h1>;
}
