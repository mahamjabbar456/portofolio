'use client';

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

const PageTransition = ({ children }: {
    children: React.ReactNode;
}) => {
    const pathname = usePathname();
    return (
        <AnimatePresence>
            <div key={pathname}>
                <motion.div
                 initial={{ opacity: 1 }}
                 animate={{ opacity: 0, transition: { delay: 1, duration: 0.6, ease: "easeInOut" } }}
                 className="h-screen w-screen fixed top-0 pointer-events-none bg-mainPrimary"
                 />
                {children}
            </div>
        </AnimatePresence>
    )
}

export default PageTransition
