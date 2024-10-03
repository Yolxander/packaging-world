'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export function Header() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [showQuoteForm, setShowQuoteForm] = useState(false)
    const [formStep, setFormStep] = useState(1)
    const [contactMethod, setContactMethod] = useState('')
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false) // State for mobile menu

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY
            setIsScrolled(scrollTop > 50)
        }

        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    const toggleQuoteForm = () => {
        setShowQuoteForm(!showQuoteForm)
        setFormStep(1)
    }

    const nextStep = () => setFormStep(formStep + 1)
    const prevStep = () => setFormStep(formStep - 1)

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen) // Toggle mobile menu visibility
    }

    // New function to handle both actions (quote form and closing mobile menu)
    const handleQuoteButtonClick = () => {
        toggleQuoteForm();
        if (isMobileMenuOpen) toggleMobileMenu(); // Close mobile menu if it's open
    }

    return (
        <>
            <header className={`sticky top-0 bg-white shadow-sm transition-all duration-300 z-50 ${isScrolled ? 'py-2' : 'py-4'}`}>
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-8">
                            <Link href="/" className="flex items-center relative space-x-2">
                                <div className="relative flex items-center">
                                    <div className={`absolute w-12 h-12 flex items-center justify-center transition-opacity duration-300 ${isScrolled ? 'opacity-100' : 'opacity-0'}`}>
                                        <Image
                                            src="/icon.ico"
                                            alt="Logo Icon"
                                            width={42}
                                            height={42}
                                            className="rounded-md"
                                        />
                                    </div>
                                    {isScrolled ? (
                                        <Image
                                            src="/icon.ico"
                                            alt="Logo Icon"
                                            width={32}
                                            height={32}
                                            className="rounded-md"
                                        />
                                    ) : (
                                        <span className={`text-xl font-bold transition-opacity duration-300`}>
                                            Packaging World
                                        </span>
                                    )}
                                </div>
                            </Link>
                        </div>
                        <div className="hidden md:flex items-center space-x-4">
                            <nav>
                                <ul className="flex space-x-6">
                                    <li className="relative">
                                        <Link href="#" className="link-brush">
                                            All Products
                                        </Link>
                                    </li>
                                    <li className="relative">
                                        <Link href="#" className="link-brush">
                                            Quick Box
                                        </Link>
                                    </li>
                                    <li className="relative">
                                        <Link href="#" className="link-brush">
                                            Contact Us
                                        </Link>
                                    </li>
                                    <li className="relative quote-container">
                                        <button onClick={toggleQuoteForm} className="get-quote-btn">
                                            Get Quote
                                        </button>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        {/* Hamburger Menu for Mobile */}
                        <div className="md:hidden flex items-center">
                            <button onClick={toggleMobileMenu} className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`}>
                                <span className="block w-8 h-1 bg-gray-800 mb-1"></span>
                                <span className="block w-8 h-1 bg-gray-800 mb-1"></span>
                                <span className="block w-8 h-1 bg-gray-800"></span>
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            {/* Mobile Navigation Menu */}
            {isMobileMenuOpen && (
                <div className="fixed inset-0 bg-white z-40 flex flex-col items-center justify-center">
                    <nav className="flex flex-col space-y-4">
                        <Link href="#" className="link-brush" onClick={toggleMobileMenu}>
                            All Products
                        </Link>
                        <Link href="#" className="link-brush" onClick={toggleMobileMenu}>
                            Quick Box
                        </Link>
                        <Link href="#" className="link-brush" onClick={toggleMobileMenu}>
                            Contact Us
                        </Link>
                        <button onClick={handleQuoteButtonClick} className="get-quote-btn">
                            Get Quote
                        </button>
                    </nav>
                </div>
            )}

            {/* Quote Form Wizard */}
            {showQuoteForm && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full animate-fade-in max-h-[90vh] overflow-y-auto relative">
                        <h2 className="text-2xl font-bold mb-4">Get a Quote</h2>
                        <button
                            onClick={toggleQuoteForm}
                            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-lg"
                        >
                            &#x2715;
                        </button>
                        <form>
                            {formStep === 1 && (
                                <>
                                    <div className="mb-4">
                                        <label className="block text-sm font-medium mb-2">Please Respond By</label>
                                        <select
                                            className="w-full p-2 border border-gray-300 rounded"
                                            value={contactMethod}
                                            onChange={(e) => setContactMethod(e.target.value)}
                                        >
                                            <option value="" disabled>Select method</option>
                                            <option value="telephone">Telephone</option>
                                            <option value="email">E-mail</option>
                                        </select>
                                    </div>

                                    {contactMethod === 'telephone' && (
                                        <div className="mb-4">
                                            <label className="block text-sm font-medium mb-2">Telephone</label>
                                            <input
                                                type="tel"
                                                className="w-full p-2 border border-gray-300 rounded"
                                                placeholder="Enter telephone"
                                            />
                                        </div>
                                    )}

                                    {contactMethod === 'email' && (
                                        <div className="mb-4">
                                            <label className="block text-sm font-medium mb-2">E-mail</label>
                                            <input
                                                type="email"
                                                className="w-full p-2 border border-gray-300 rounded"
                                                placeholder="Enter email"
                                            />
                                        </div>
                                    )}

                                    <div className="mb-4">
                                        <label className="block text-sm font-medium mb-2">Full Name</label>
                                        <input
                                            type="text"
                                            className="w-full p-2 border border-gray-300 rounded"
                                            placeholder="Enter first name"
                                            required
                                        />
                                    </div>
                                    <button
                                        type="button"
                                        onClick={nextStep}
                                        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-all duration-300"
                                    >
                                        Next
                                    </button>
                                </>
                            )}
                            {formStep === 2 && (
                                <>
                                    <div className="mb-4">
                                        <label className="block text-sm font-medium mb-2">Company*</label>
                                        <input
                                            type="text"
                                            className="w-full p-2 border border-gray-300 rounded"
                                            placeholder="Enter company name"
                                            required
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label className="block text-sm font-medium mb-2">Qty</label>
                                        <input
                                            type="text"
                                            className="w-full p-2 border border-gray-300 rounded"
                                            placeholder="Enter quantity"
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label className="block text-sm font-medium mb-2">Description</label>
                                        <textarea
                                            className="w-full p-2 border border-gray-300 rounded"
                                            placeholder="Enter description"
                                        ></textarea>
                                    </div>
                                    <div className="flex justify-between">
                                        <button
                                            type="button"
                                            onClick={prevStep}
                                            className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition-all duration-300"
                                        >
                                            Back
                                        </button>
                                        <button
                                            type="submit"
                                            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-all duration-300"
                                        >
                                            Submit
                                        </button>
                                    </div>
                                </>
                            )}
                        </form>
                    </div>
                </div>
            )}
        </>
    )
}
