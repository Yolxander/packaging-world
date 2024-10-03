'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export function Header() {
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY
            setIsScrolled(scrollTop > 50) // When user scrolls down more than 50px
        }

        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <header className={`sticky top-0 bg-white shadow-sm transition-all duration-300 z-50 ${isScrolled ? 'py-2' : 'py-4'}`}>
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-8">
                        <Link href="/" className="flex items-center relative space-x-2">
                            {/* Container for logo and text */}
                            <div className="relative flex items-center">
                                {/* Small Icon (Image instead of PW text) */}
                                <div className={`absolute w-12 h-12 flex items-center justify-center transition-opacity duration-300 ${isScrolled ? 'opacity-100' : 'opacity-0'}`}>
                                    <Image
                                        src="/icon.ico"
                                        alt="Logo Icon"
                                        width={42}
                                        height={42}
                                        className="rounded-md"
                                    />
                                </div>
                                {/* Full Logo Text */}
                                <span className={`text-xl font-bold transition-opacity duration-300 ${isScrolled ? 'opacity-0' : 'opacity-100'}`}>
                                    Packaging World
                                </span>
                            </div>
                        </Link>
                    </div>
                    <div className="flex items-center space-x-4">
                        <nav>
                            <ul className="flex space-x-6">
                                <li className="relative">
                                    <Link href="#" className="link-brush">
                                        All Products
                                    </Link>
                                </li>
                                <li className="relative">
                                    <Link href="#" className="link-brush">
                                        Custom Solutions
                                    </Link>
                                </li>
                                <li className="relative">
                                    <Link href="#" className="link-brush">
                                        Quick Box
                                    </Link>
                                </li>
                                <li className="relative">
                                    <Link href="#" className="link-brush">
                                        Shipping
                                    </Link>
                                </li>
                                {/* Updated Get Quote button with gradient and border */}
                                <li className="relative quote-container">
                                    <Link href="#" className="get-quote-btn">
                                        Get Quote
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    )
}
