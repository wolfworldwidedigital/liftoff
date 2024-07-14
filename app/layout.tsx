import "../styles/globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cusmato - AI-Onboarding",
  openGraph: {
    title: "Cusmato - AI-Onboarding",
    description:
      "Cusmato is an AI-powered CX Enhancer",
    images: [
      {
        url: "https://cusmato.com/opengraph-image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cusmato - AI-Onboarding",
    description:
      "Liftoff is an AI-powered mock interview platform that helps you practice for your next job interview.",
    images: ["https://demo.useliftoff.com/opengraph-image"],
    creator: "@tmeyer_me",
  },
  metadataBase: new URL("https://cusmato.com/"),
  themeColor: "#FFF",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="scroll-smooth antialiased [font-feature-settings:'ss01']">
        {children}
      </body>
    </html>
  );
}
