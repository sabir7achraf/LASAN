import {Metadata, Viewport} from "next";
import {siteConfig} from "@/config/site";
import { Providers } from "@/app/(home)/providers";
import clsx from "clsx";
import {fontSans} from "@/config/fonts";
import "@/styles/globals.css";

    export const metadata: Metadata = {
        title: {
            default: siteConfig.name,
            template: `%s - ${siteConfig.name}`,
        },
        description: siteConfig.description,
        icons: {
            icon: "/favicon.ico",
        },
    };

    export const viewport: Viewport = {
        themeColor: [
            { media: "(prefers-color-scheme: light)", color: "white" },
            { media: "(prefers-color-scheme: dark)", color: "black" },
        ],
    };
export default function LoginLayout({ children }: { children: React.ReactNode;}) {
  return (
     <html lang="en">
     <head>
     </head>
     <body
         className={clsx(
             "min-h-screen bg-background font-sans antialiased",
             fontSans.variable,
         )}>
     <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
      <section >
          <div >
              {children}
          </div>
      </section>
     </Providers>
     </body>
     </html>
  )
}


