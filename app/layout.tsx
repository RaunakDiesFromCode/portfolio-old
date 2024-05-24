import type { Metadata } from "next";
import { Inter_Tight
  
 } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
// import CustomCursor from "@/components/Cursor";
import AnimatedCursor from "react-animated-cursor"
import Header from "./components/Header";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";

const spaceGrotesque = Inter_Tight
({ subsets: ["latin"] });

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

        <div className="fixed top-0 left-0 right-0 z-30  overflow-hidden xl:w-[100%] sm:w-[80%] ">
          <BackgroundGradientAnimation className="sticky top-0 left-0 right-0 z-0 overflow-hidden" />
        </div>


        <div className="fixed top-0 left-0 right-0 z-50 px-5">
          <Header/>
        </div>

        {/* <div className="fixed top-0 left-0right-0 z-40 ">
          <Socials />
        </div> */}

        <AnimatedCursor
          innerSize={10}
          outerSize={40}
          color='0, 0, 0, 0'
          outerAlpha={0.3}
          innerScale={2}
          outerScale={1}
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
