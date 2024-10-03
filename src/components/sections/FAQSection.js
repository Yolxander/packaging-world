'use client'

import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion'

export function FAQSection() {
    return (
        <div className="bg-[#f5f3ef] py-12">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
                <div className="bg-white rounded-lg shadow-lg p-8">
                    <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
                        <AccordionItem value="item-1">
                            <AccordionTrigger>What types of custom packaging do you offer?</AccordionTrigger>
                            <AccordionContent>
                                We offer a wide range of custom packaging solutions, including custom-sized boxes, branded packaging, and specialized protective packaging. Our short-run production capabilities allow us to create tailored solutions for unique projects without requiring large minimum orders.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2">
                            <AccordionTrigger>Do you offer delivery services?</AccordionTrigger>
                            <AccordionContent>
                                Yes, we provide convenient delivery options within the Greater Toronto Area (GTA). We also offer shipping services across Canada and the United States for customers outside the local area.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3">
                            <AccordionTrigger>Can I visit your warehouse to see products in person?</AccordionTrigger>
                            <AccordionContent>
                                Our warehouse and manufacturing facility is located at 880 Steeprock Drive in Toronto. We are open to the public for visits and inquiries from Monday to Friday, 9 AM to 5 PM. Feel free to stop by and explore our product range in person.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
            </div>
        </div>
    );
}
