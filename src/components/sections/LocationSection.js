'use client'

import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { MapPin, Clock } from 'lucide-react'

export function LocationSection() {
    return (
        <div className="bg-white py-12">
            <div className="container mx-auto px-4">
                <div className="bg-[#3a4e9d] text-white rounded-lg shadow-lg p-8 flex items-center">
                    <div className="w-1/2 pr-8">
                        <h2 className="text-3xl font-bold mb-4">Visit Our Warehouse</h2>
                        <p className="mb-6">Come by and explore our products in person. We're located in Toronto and open Monday to Friday from 9 AM to 5 PM.</p>
                        <div className="flex space-x-4 items-center mb-4">
                            <MapPin className="text-white h-6 w-6" />
                            <p>880 Steeprock Drive, Toronto, ON (North of Sheppard Ave W, off Allen Expressway)</p>
                        </div>
                        <div className="flex space-x-4 items-center">
                            <Clock className="text-white h-6 w-6" />
                            <p>Open Monday to Friday, 9 AM - 5 PM</p>
                        </div>
                        <div className="flex space-x-4 mt-6">
                            <Button variant="outline" className="text-black border-white hover:bg-white hover:text-[#1b4541]">Get Directions</Button>
                        </div>
                    </div>
                    <div className="w-1/2">
                        <Image
                            src="https://maps.googleapis.com/maps/api/staticmap?center=880+Steeprock+Drive,Toronto,ON&zoom=15&size=500x300&key=AIzaSyDdwQwsHi-_JmG1n62xVx2sonXav9oyfGU"
                            alt="Map to our location"
                            width={500}
                            height={300}
                            className="rounded-lg"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
