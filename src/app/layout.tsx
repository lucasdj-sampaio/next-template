import { MyProvider } from '@/store/provider';
import GlobalStyles from '@/styles/GlobalStyles';
import { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Default project',
  description: 'Template for next.js',
  icons: { icon: '/favicon.ico' },
  archives: ['../../public/css/reset.css', '../../public/css/theme.css'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="apptheme">
      <body className={inter.className}>
        <MyProvider>
          <GlobalStyles />
          {children}
        </MyProvider>
      </body>
    </html>
  );
}
