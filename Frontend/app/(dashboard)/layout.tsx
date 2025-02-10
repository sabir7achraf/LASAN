"use client";
import "@/styles/globals.css";
import ProfileNav from "@/components/myComponent/profileNav";
import SideNav from "@/components/myComponent/sidnav";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className="h-full" style={{backgroundColor: "#000000"}}>
        <head/>
        <body className="h-full " >
        <div className="min-h-screen flex flex-col ">
            <header>
                <ProfileNav/>
            </header>
            <main className="relative z-20 -mt-28 mb-5 mx-auto  shadow-lg rounded-lg p-6 w-4/5 flex" style={{backgroundColor: "#1A1A19"}}>
                <SideNav/>
                <div className="flex-1 pl-4 m">
                    {children}
                </div>
            </main>


        </div>

        </body>
        </html>

    );
}