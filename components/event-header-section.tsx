"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import Timer from "@/components/Timer";
import FlipClockCountdown from '@leenguyen/react-flip-clock-countdown';
import '@leenguyen/react-flip-clock-countdown/dist/index.css';
import EventHero from "@/components/event-hero";

type props = {
    title: string | any;
    register: string | any;
}

const EventHeader = ({ title, register}: props ) => {

    const eventDate = '2023-07-31T23:59:59';

    return (
    <div className="font-bold py-20 space-y-5">
        <div className="flex flex-row">
            <div>
                <div className="text-2xl sm:text-5xl md:text-3xl lg:text-4xl font-extrabold space-y-5 px-4">
                    <h1>{title}</h1>
                    <h2>Bengaluru, India</h2>
                </div>  
                <div className="p-4 mt-8">
                    {/* <Link href={register}> */}
                    <a target="_blank" href={register} rel="noopener noreferrer">
                    <Button className="md:text-lg p-4 md:p-6 rounded-full font-semibold  text-white hover:bg-gray-500 hover:text-white">
                        Register
                    </Button>
                    </a>
                    {/* </Link> */}
                </div>
            </div>
            <div className="flex px-20 items-center">
                {/* <EventHero /> */}
                {/* <div className="grid grid-cols-2 gap-6 max-w-md mx-auto">
                    <div className="bg-blue-300 text-white text-center rounded-md">
                        <div className="bg-[#15314b] font-medium p-2">
                            <div className="flex items-start">What</div>
                        </div>
                        <div>
                            <h4>Details of the event to be specified here..</h4>
                        </div>
                    </div>
                    <div className="bg-blue-300 text-white text-center">
                        <div className="bg-[#02203c] font-medium p-2">
                            <div className="flex items-start">Who</div>
                        </div>
                        <div>
                            <h4>Details about event organizers</h4>
                        </div>
                    </div>
                    <div className="bg-blue-300 text-white text-center">
                        <div className="bg-[#02203c] font-medium p-2">
                            <div className="flex items-start">When</div>
                        </div>
                        <div>
                            <h4>When the event is going to take place with timer</h4>
                        </div>
                    </div>
                    <div className="bg-blue-300 text-white text-center">
                        <div className="bg-[#02203c] font-medium p-2">
                            <div className="flex items-start">Where</div>
                        </div>
                        <div>
                            <h4>Where the event is going to take place</h4>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    </div>
    )
}  

export default EventHeader;