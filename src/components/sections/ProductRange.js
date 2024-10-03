'use client'

import { ChevronRight, Box, ShoppingCart, Shield, Scissors } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function ProductRange() {
    const productCategories = [
        { name: "BOXES", icon: Box, description: "Various sizes and styles of cardboard boxes for all your packaging needs." },
        { name: "BAGS", icon: ShoppingCart, description: "Paper and plastic bags for retail and packaging purposes." },
        { name: "PROTECTIVE PACKAGING", icon: Shield, description: "Materials to ensure your items are safe during shipping and storage." },
        { name: "TAPES", icon: Scissors, description: "Adhesive tapes for sealing and securing packages." },
    ];

    return (
        <div className="bg-[#f5f3ef] py-12">
            <div className="container mx-auto px-4">
                <div className="bg-white rounded-lg shadow-lg p-8">
                    <h2 className="text-3xl font-bold mb-8 text-center">Some roducts</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {productCategories.map((category, index) => (
                            <div key={index} className="bg-gray-100 rounded-lg p-6 flex flex-col items-center text-center">
                                <category.icon className="h-12 w-12 text-blue-600 mb-4" />
                                <h3 className="text-xl font-semibold mb-2">{category.name}</h3>
                                <p className="text-gray-600 mb-4">{category.description}</p>
                                <Button variant="outline" className="mt-auto">
                                    See Details
                                    <ChevronRight className="ml-2 h-4 w-4" />
                                </Button>
                            </div>
                        ))}
                    </div>
                    <div className="mt-8 text-center">
                        <Button className="bg-[#5e78c9]" size="lg">
                            View All Products
                            <ChevronRight className="ml-2 h-5 w-5" />
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
