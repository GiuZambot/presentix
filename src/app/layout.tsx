import "bootstrap/dist/css/bootstrap.min.css";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "/public/components/bootstrap-wysiwyg-master/external/google-code-prettify/prettify.css";
import "/public/components/bootstrap-wysiwyg-master/index.css";
import "/public/css/editor.css";
// Removed /public/css/estilos.css as styles are now componentized

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Presentix",
  description: "Recreating the Presentix website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Lato:100,300,400,700,900,400italic"
        />
        <link
          href="http://netdna.bootstrapcdn.com/font-awesome/3.0.2/css/font-awesome.css"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
