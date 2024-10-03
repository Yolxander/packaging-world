'use client'

import Link from 'next/link'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

export function Footer() {
    return (
        <footer className="bg-gray-800 text-white py-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li><Link href="#" className="hover:underline">Online Catalog</Link></li>
                            <li><Link href="#" className="hover:underline">Custom Packaging</Link></li>
                            <li><Link href="#" className="hover:underline">Shipping Services</Link></li>
                            <li><Link href="#" className="hover:underline">About Us</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
                        <p>880 Steeprock Drive, Toronto, ON</p>
                        <p>Email: info@packagingworld.com</p>
                        <p>Phone: (123) 456-7890</p>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
                        <p className="mb-4">Stay updated with our latest offers and products</p>
                        <div className="flex">
                            <Input type="email" placeholder="Your email" className="rounded-r-none" />
                            <Button className="rounded-l-none">Subscribe</Button>
                        </div>
                    </div>
                </div>
                <div className="mt-8 text-center">
                    <p>&copy; 2024 Packaging World. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
