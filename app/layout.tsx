import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
// import CustomCursor from "@/components/Cursor";
import AnimatedCursor from "react-animated-cursor"

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
        <AnimatedCursor
          innerSize={10}
          outerSize={40}
          color='0, 0, 0, 0'
          outerAlpha={0.3}
          innerScale={2}
          outerScale={2}
          trailingSpeed={10}
          innerStyle={{
            backgroundColor: 'rgb(0, 255, 255)'
          }}
          outerStyle={{
            // mixBlendMode: 'exclusion',
            border: '3px solid rgb(0, 255, 255)'
          }}
        />
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
