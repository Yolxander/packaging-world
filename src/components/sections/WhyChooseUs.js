'use client'

import { Truck, Box, Recycle, Headphones } from 'lucide-react'

export function WhyChooseUs() {
    return (
        <div className="bg-white py-12">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 text-center">Why Choose Packaging World?</h2>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="flex flex-col items-center text-center">
                        <div className="bg-blue-100 p-4 rounded-full mb-4">
                            <Truck className="h-8 w-8 text-blue-600" />
                        </div>
                        <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
                        <p>Local GTA delivery and shipping across North America</p>
                    </div>
                    <div className="flex flex-col items-center text-center">
                        <div className="bg-blue-100 p-4 rounded-full mb-4">
                            <Box className="h-8 w-8 text-blue-600" />
                        </div>
                        <h3 className="text-xl font-semibold mb-2">Custom Solutions</h3>
                        <p>Tailored packaging for unique projects and short-run production</p>
                    </div>
                    <div className="flex flex-col items-center text-center">
                        <div className="bg-blue-100 p-4 rounded-full mb-4">
                            <Recycle className="h-8 w-8 text-blue-600" />
                        </div>
                        <h3 className="text-xl font-semibold mb-2">Eco-friendly Options</h3>
                        <p>Sustainable packaging solutions to reduce environmental impact</p>
                    </div>
                    <div className="flex flex-col items-center text-center">
                        <div className="bg-blue-100 p-4 rounded-full mb-4">
                            <Headphones className="h-8 w-8 text-blue-600" />
                        </div>
                        <h3 className="text-xl font-semibold mb-2">Expert Support</h3>
                        <p>Dedicated customer service to assist with all your packaging needs</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
