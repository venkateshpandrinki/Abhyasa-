'use client'
import { useEffect, useState } from "react"
import Navbar from "./Navbar";
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
                transition-transform duration-300 ease-in-out z-40
                 
                ${isVisible ? 'translate-y-0' : '-translate-y-full'}
               
            `}
        >
            <div className="  bg-gradient-to-br from-black via-gray-900 to-gray-800 pointer-events-auto">

            <Navbar/>
            </div>
        </nav>
    )
}

export default StickyNav