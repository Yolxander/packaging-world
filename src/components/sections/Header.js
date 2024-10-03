'use client'

import Link from 'next/link'
import { Search, ShoppingCart, Globe } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export function Header() {
    return (
        <header className="bg-white shadow-sm">
            <div className="container mx-auto px-4 py-4">
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-8">
                        <Link href="/" className="flex items-center space-x-2">
                            <div className="w-8 h-8 bg-blue-600 rounded-md flex items-center justify-center">
                                <span className="text-white font-bold">PW</span>
                            </div>
                            <span className="text-xl font-bold">Packaging World</span>
                        </Link>
                        <nav>
                            <ul className="flex space-x-6">
                                <li><Link href="#" className="text-sm hover:text-blue-600">All Products</Link></li>
                                <li><Link href="#" className="text-sm hover:text-blue-600">Custom Solutions</Link></li>
                                <li><Link href="#" className="text-sm hover:text-blue-600">Quick Box</Link></li>
                                <li><Link href="#" className="text-sm hover:text-blue-600">Shipping</Link></li>
                                <li><Link href="#" className="text-sm hover:text-blue-600">About Us</Link></li>
                            </ul>
                        </nav>
                    </div>
                    <div className="flex items-center space-x-4">
                        <div className="relative">
                            <Input
                                type="text"
                                placeholder="Search products..."
                                className="pl-10 pr-4 py-2 w-64"
                            />
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                        </div>
                        <Button variant="ghost" size="icon">
                            <Globe className="h-5 w-5" />
                        </Button>
                        <Button variant="outline">Log in</Button>
                        <Button variant="ghost" size="icon">
                            <ShoppingCart className="h-5 w-5" />
                        </Button>
                    </div>
                </div>
            </div>
        </header>
    );
}
