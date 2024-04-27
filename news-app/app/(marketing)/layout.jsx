import '../globals.css';

export const metadata = {
  title: 'News Web app',
  description: 'News Web app',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}