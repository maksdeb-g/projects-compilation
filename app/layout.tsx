import "./globals.css";

export const metadata = {
  title: "Projects Compilation",
  openGraph: {
    images: ["/assets/img/landing.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased `}>{children}</body>
    </html>
  );
}
