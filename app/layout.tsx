
import type { Metadata } from "next";
import "./globals.css";
import { Orbitron } from "next/font/google";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/ui/app-sidebar"

export const metadata: Metadata = {
  title: "G00By-iNK!",
  description: "The world is finally ready...",
};

const orbitron = Orbitron({
  subsets: ["latin"],
  display: "swap",
});        
         
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html> 
    <SidebarProvider>
      <AppSidebar />
      <body>
        <main>
        
        <SidebarTrigger />
        {children}
        </main>
        </body>
      
    </SidebarProvider>
    </html>
  )
}
