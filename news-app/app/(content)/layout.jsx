import MainHeader from '@/components/main-header';
import '../globals.css';

export const metadata = {
  title: 'News Web app',
  description: 'News Web application',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <MainHeader />
        {children}
      </body>
    </html>
  );
}