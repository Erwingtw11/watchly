export const metadata = {
  title: "Watchly",
  description: "Movies App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
