import '../../public/css/reset.css';
import '../../public/css/themes.css';
import { MyProvider } from '@/store/provider';
import GlobalStyles from '@/styles/GlobalStyles';
import { Metadata } from 'next';
import { Inter } from 'next/font/google';
import StyledComponentsRegistry from './registry';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Default project',
  description: 'Template for next.js',
  icons: { icon: './favicon.ico' },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="apptheme">
      <body className={inter.className}>
        <StyledComponentsRegistry>
          <MyProvider>
            <GlobalStyles />
            {children}
          </MyProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
