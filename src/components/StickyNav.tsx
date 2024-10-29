'use client'
import { useEffect, useState } from "react"
import Logo from "@/app/fonts/logo";
const StickyNav = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Show the nav when scrolled past 100px
            const shouldBeVisible = window.scrollY > 100;
            setIsVisible(shouldBeVisible);
        }

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);

    return (
        <nav 
            className={`
                fixed top-0 left-0 w-full 
                transition-transform duration-300 ease-in-out
                ${isVisible ? 'translate-y-0' : '-translate-y-full'}
                bg-white bg-opacity-90 shadow-md z-50
            `}
        >
            <div className="container mx-auto px-4 h-20 flex items-center justify-between">
                <Logo/>
                
            </div>
        </nav>
    )
}

export default StickyNav