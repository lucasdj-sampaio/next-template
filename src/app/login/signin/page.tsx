'use client';
import { setLoged } from '@/store/slices/count';
import { publicAuthRote } from '@/util/authRules';
import { useDispatch } from 'react-redux';

export default function Signin() {
  const dispatch = useDispatch();
  publicAuthRote();

  return (
    <button
      onClick={() => {
        dispatch(setLoged());
      }}
    >
      Login
    </button>
  );
}
