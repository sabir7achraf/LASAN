"use client";
import "@/styles/globals.css";
import ProfileNav from "@/components/myComponent/profileNav";
import SideNav from "@/components/myComponent/sidnav";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className="h-full">
        <head/>
        <body className="h-full bg-black">
        <div className="min-h-screen flex flex-col">
            <header>
                <ProfileNav/>
            </header>
            <main className="relative z-20 -mt-24 mx-auto bg-white shadow-lg rounded-lg p-6 w-4/5 flex">
               <SideNav/>
                <div className="flex-1 pl-4">
                {children}
                </div>
            </main>

        </div>
        </body>
        </html>

    );
}