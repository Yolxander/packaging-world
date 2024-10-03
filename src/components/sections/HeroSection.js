'use client'

import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { CheckCircle } from 'lucide-react'

export function HeroSection() {
    return (
        <div className="bg-[#f5f3ef] py-[5%]">
            <div className="container mx-auto px-4">
                <div className="bg-white rounded-lg shadow-lg px-8 py-12 flex flex-col md:flex-row">
                    <div className="w-full md:w-1/2 pr-0 md:pr-8 mb-8 md:mb-0">
                        <h1 className="text-3xl md:text-5xl font-bold mb-4 animate-fade-in">Comprehensive packaging solutions for your business</h1>
                        <p className="text-lg md:text-xl mb-6 animate-fade-in">Discover a wide range of packaging, shipping, and moving supplies tailored to your needs</p>
                        <div className="flex space-x-4 mb-8 animate-fade-in">
                            <Button className="bg-[#5872c7]" size="lg">Shop Now</Button>
                            <Button variant="outline" size="lg">Custom Solutions</Button>
                        </div>
                        <div className="flex flex-col md:flex-row space-x-0 md:space-x-6 mb-8">
                            <div className="flex items-center space-x-2 mb-2 md:mb-0">
                                <CheckCircle className="text-[#5e78c9]" size={20} />
                                <span className="text-sm">Stock & Custom Boxes</span>
                            </div>
                            <div className="flex items-center space-x-2 mb-2 md:mb-0">
                                <CheckCircle className="text-[#5e78c9]" size={20} />
                                <span className="text-sm">GTA Delivery</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <CheckCircle className="text-[#5e78c9]" size={20} />
                                <span className="text-sm">North America Shipping</span>
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 relative z-1">
                        <Image
                            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2020-08-11-epILlgDjwM5Zj7PFSUT40RueFLYL8E.jpg"
                            alt="Various sizes of cardboard boxes"
                            fill={true}
                            style={{ objectFit: "cover" }}
                            className="rounded-lg animate-fade-in"
                        />
                        <div className="absolute top-0 left-0 bg-[#5e78c9] text-white px-4 py-2 rounded-tl-lg rounded-br-lg font-semibold animate-fade-in">
                            CUSTOM BOXES NOW AVAILABLE
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
              .animate-fade-in {
                  animation: fadeIn 0.5s ease-in;
              }

              @keyframes fadeIn {
                  from {
                      opacity: 0;
                      transform: translateY(10px);
                  }
                  to {
                      opacity: 1;
                      transform: translateY(0);
                  }
              }
            `}</style>
        </div>
    );
}
