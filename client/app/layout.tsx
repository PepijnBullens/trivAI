import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Link from "next/link";

const geistSans = localFont({
    src: "./fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
});
const geistMono = localFont({
    src: "./fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
});

export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                <div className="min-h-screen flex flex-col bg-background">
                    <header className="border-b">
                        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                            <Link className="text-2xl font-bold" href={"/"}>
                                Trivia Master
                            </Link>
                        </div>
                    </header>
                    {children}
                </div>
            </body>
        </html>
    );
}
