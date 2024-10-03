'use client'

import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { CheckCircle } from 'lucide-react'

export function HeroSection() {
    return (
        <div className="bg-[#f5f3ef] py-[5%] ">
            <div className="container mx-auto px-4">
                <div className="bg-white rounded-lg shadow-lg px-8 py-12 flex">
                    <div className="w-1/2 pr-8">
                        <h1 className="text-5xl font-bold mb-4">Comprehensive packaging solutions for your business</h1>
                        <p className="text-xl mb-6">Discover a wide range of packaging, shipping, and moving supplies tailored to your needs</p>
                        <div className="flex space-x-4 mb-8">
                            <Button className="bg-[#5872c7]" size="lg">Shop Now</Button>
                            <Button variant="outline" size="lg">Custom Solutions</Button>
                        </div>
                        <div className="flex space-x-6 mb-8">
                            <div className="flex items-center space-x-2">
                                <CheckCircle className="text-[#5e78c9]" size={20} />
                                <span className="text-sm">Stock & Custom Boxes</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <CheckCircle className="text-[#5e78c9]" size={20} />
                                <span className="text-sm">GTA Delivery</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <CheckCircle className="text-[#5e78c9]" size={20} />
                                <span className="text-sm">North America Shipping</span>
                            </div>
                        </div>
                    </div>
                    <div className="w-1/2 relative z-1">
                        <Image
                            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2020-08-11-epILlgDjwM5Zj7PFSUT40RueFLYL8E.jpg"
                            alt="Various sizes of cardboard boxes"
                            fill={true}
                            style={{ objectFit: "cover" }}
                            className="rounded-lg"
                        />
                        <div className="absolute top-0 left-0 bg-[#5e78c9] text-white px-4 py-2 rounded-tl-lg rounded-br-lg font-semibold">
                            CUSTOM BOXES NOW AVAILABLE
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
