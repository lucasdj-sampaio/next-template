import { redirect } from 'next/navigation';

export const privateAuthRote = () => {
  const authOk = true;
  !authOk && redirect('/login/signin');
};

export const publicAuthRote = () => {
  const authOk = false;
  !authOk && redirect('/');
};
