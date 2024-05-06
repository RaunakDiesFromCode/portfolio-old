import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";

const spaceGrotesque = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("http://localhost:3000"),

  title: "Raunak",
  authors: {
    name: "raunak",
  },

  description:
    "Based on India, I am an Android Developer and a full stack web developer",
  openGraph: {
    title: "Raunak",
    description:
      "Based on India, I am an Android Developer and a full stack web developer",
    url: "http://localhost:3000",
    siteName: "raunak",
    images: "og.png",
    type: "website",
  },
  keywords: ["daily web coding", "raunak", "dailywebcoding"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={spaceGrotesque.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
