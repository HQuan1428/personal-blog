import React from "react";
import "@/styles/tailwind.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Theme } from "@radix-ui/themes";

export default function RootLayout({
    children, 
}: {
    children: React.ReactNode;
}) {
    return (
        <html
            lang="en"
            className="mdl-js"
        >
            <head>
                <link rel="stylesheet" href="/favicon.ico" />
            </head>
            
                <body className="bg-dark text-white"> 
                    <Header />
                        <main>{children}</main>
                    <Footer />
                </body>
           
        </html>
    )
}