
import Footer from "@/components/footer";
import { Navbar } from "@/components/navbar";

import { cn } from "@/lib/utils";

export default function MainLayout({children}: {children: React.ReactNode}){
    return (
        <>
        <Navbar />
        {children}
        <Footer />
        </>
    )
}