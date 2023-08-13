
import LandingNavBar from '@/components/landing-navbar'
import EventHeader from '@/components/event-header-section'
import EventHero from '@/components/event-hero'
import Footer from '@/components/footer'
import TimelineComponent from '@/components/timeline'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { useState } from 'react'
import { useEffect } from 'react'
import Image from 'next/image'
import Bengaluru from '@/public/bengaluru_city.png'
import { useRouter } from 'next/navigation'
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
  

const Sessions = () => {
    return (
        <div>
            <Table>
                {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
                <TableHeader>
                    <TableRow>
                    <TableHead className="w-[200px]">Time</TableHead>
                    <TableHead>Title</TableHead>
                    <TableHead>Track</TableHead>
                    <TableHead className="w-[200px]">Speakers</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <TableRow>
                    <TableCell className="font-medium">08:00 AM - 09:15 AM</TableCell>
                    <TableCell>Registration and Networking</TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                    </TableRow>
                    <TableRow>
                    <TableCell className="font-medium">09:30 AM - 09:45 AM</TableCell>
                    <TableCell>Keynote from Sindhu Gangadharan (SVP & MD, SAP Labs India | Head User Enablement</TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                    </TableRow>
                    <TableRow>
                    <TableCell className="font-medium">10:00 AM - 10:25 AM</TableCell>
                    <TableCell>Insights into Value Chain using Modern Architecture: calculation of CO2e</TableCell>
                    <TableCell>SAP Cloud Products 1</TableCell>
                    <TableCell>
                        <div className="flex flex-col space-y-2">
                            <h3>Sanil Bhandari (SAP Labs)</h3>
                            <h3>Sridevi Sridharan (Résoudre Des Solution Informatiques )</h3>
                        </div>
                    </TableCell>
                    </TableRow>
                    <TableRow>
                    <TableCell className="font-medium"></TableCell>
                    <TableCell>SAP BTP and Data to Value Strategy</TableCell>
                    <TableCell>SAP BTP General and Cross Topics</TableCell>
                    <TableCell>
                        <div className="flex flex-col space-y-2">
                            <h3>Dharani Karthikeyan(SAP Labs)</h3>
                        </div>
                    </TableCell>
                    </TableRow>
                    <TableRow>
                    <TableCell className="font-medium"></TableCell>
                    <TableCell>SAP BTP and Data to Value Strategy</TableCell>
                    <TableCell>SAP BTP General and Cross Topics</TableCell>
                    <TableCell>
                        <div className="flex flex-col space-y-2">
                            <h3>Dharani Karthikeyan(SAP Labs)</h3>
                        </div>
                    </TableCell>
                    </TableRow>
                    <TableRow>
                    <TableCell className="font-medium"></TableCell>
                    <TableCell>SAP BTP and Data to Value Strategy</TableCell>
                    <TableCell>SAP BTP General and Cross Topics</TableCell>
                    <TableCell>
                        <div className="flex flex-col space-y-2">
                            <h3>Dharani Karthikeyan(SAP Labs)</h3>
                        </div>
                    </TableCell>
                    </TableRow>
                    <TableRow>
                    <TableCell className="font-medium"></TableCell>
                    <TableCell>SAP BTP and Data to Value Strategy</TableCell>
                    <TableCell>SAP BTP General and Cross Topics</TableCell>
                    <TableCell>
                        <div className="flex flex-col space-y-2">
                            <h3>Dharani Karthikeyan(SAP Labs)</h3>
                        </div>
                    </TableCell>
                    </TableRow>
                    <TableRow>
                    <TableCell className="font-medium"></TableCell>
                    <TableCell>SAP BTP and Data to Value Strategy</TableCell>
                    <TableCell>SAP BTP General and Cross Topics</TableCell>
                    <TableCell>
                        <div className="flex flex-col space-y-2">
                            <h3>Dharani Karthikeyan(SAP Labs)</h3>
                        </div>
                    </TableCell>
                    </TableRow>
                    <TableRow>
                    <TableCell className="font-medium"></TableCell>
                    <TableCell>SAP BTP and Data to Value Strategy</TableCell>
                    <TableCell>SAP BTP General and Cross Topics</TableCell>
                    <TableCell>
                        <div className="flex flex-col space-y-2">
                            <h3>Dharani Karthikeyan(SAP Labs)</h3>
                        </div>
                    </TableCell>
                    </TableRow>
                    <TableRow>
                    <TableCell className="font-medium"></TableCell>
                    <TableCell>SAP BTP and Data to Value Strategy</TableCell>
                    <TableCell>SAP BTP General and Cross Topics</TableCell>
                    <TableCell>
                        <div className="flex flex-col space-y-2">
                            <h3>Dharani Karthikeyan(SAP Labs)</h3>
                        </div>
                    </TableCell>
                    </TableRow>
                    <TableRow>
                    <TableCell className="font-medium"></TableCell>
                    <TableCell>SAP BTP and Data to Value Strategy</TableCell>
                    <TableCell>SAP BTP General and Cross Topics</TableCell>
                    <TableCell>
                        <div className="flex flex-col space-y-2">
                            <h3>Dharani Karthikeyan(SAP Labs)</h3>
                        </div>
                    </TableCell>
                    </TableRow>
                    <TableRow>
                    <TableCell className="font-medium"></TableCell>
                    <TableCell>SAP BTP and Data to Value Strategy</TableCell>
                    <TableCell>SAP BTP General and Cross Topics</TableCell>
                    <TableCell>
                        <div className="flex flex-col space-y-2">
                            <h3>Dharani Karthikeyan(SAP Labs)</h3>
                        </div>
                    </TableCell>
                    </TableRow>
                    <TableRow>
                    <TableCell className="font-medium"></TableCell>
                    <TableCell>SAP BTP and Data to Value Strategy</TableCell>
                    <TableCell>SAP BTP General and Cross Topics</TableCell>
                    <TableCell>
                        <div className="flex flex-col space-y-2">
                            <h3>Dharani Karthikeyan(SAP Labs)</h3>
                        </div>
                    </TableCell>
                    </TableRow>
                    <TableRow>
                    <TableCell className="font-medium"></TableCell>
                    <TableCell>SAP BTP and Data to Value Strategy</TableCell>
                    <TableCell>SAP BTP General and Cross Topics</TableCell>
                    <TableCell>
                        <div className="flex flex-col space-y-2">
                            <h3>Dharani Karthikeyan(SAP Labs)</h3>
                        </div>
                    </TableCell>
                    </TableRow>
                </TableBody>
            </Table>

            {/* <div className="flex flex-row items-start justify-around space-x-4">
                <div className="font-lightt">
                    <TimelineComponent startTime="08:00 AM" endTime="09:10 AM" />
                </div>
                <div className="flex flex-col space-y-4 mt-2">
                    <div className="font-light">
                        <p className="mb-2">Registration and Networking</p>
                    </div>
                </div>
                <div className="font-light flex flex-row">
                    <p className="mb-10">
                        <Avatar>
                            <AvatarImage src="https://github.com/shadcn.png" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                    </p>
                </div>
                <div className="font-light">
                    <p className="mb-10">
                        <Badge variant="outline">UI5</Badge>
                    </p>
                </div>
            </div> */}
        </div>
    );
}

export default Sessions;