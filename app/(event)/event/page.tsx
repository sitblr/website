"use client";

import LandingNavBar from "@/components/landing-navbar"
import EventHeader from "@/components/event-header-section";
import Footer from "@/components/footer";
import TimelineComponent from '@/components/timeline';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { useState } from 'react';
import { useEffect } from "react";
import Image from "next/image";
import Bengaluru from '@/public/bengaluru_city.png'

// const getEventData = async () => {
//   debugger;
//   const response = await fetch(`/api/events`);
//   console.log(response);
//   return response.json();
// }

const EventPage = () => {

    // const aEventData = getEventData();
    const [data,setData] = useState(null);
    const [isMounted,setIsMounted] = useState(false);
    useEffect(() => {
      fetch('/api/events')
      .then((res) => res.json())
      .then((data) => {
        debugger;
        setData(data)
      })
      debugger;
      setIsMounted(true);
    },[]);

    if(!isMounted){
      return null;
    }

    return (
      // ffe505
     <div className="h-full">
      <div className="bg-gradient-to-r from-[#ffb805] to-[#e1cf2b] ">
        <div className= "mx-auto max-w-screen-xl" >
            <LandingNavBar />
        </div>
      </div>
      <div className="bg-gradient-to-r from-[#ffb805] to-[#e1cf2b]">
        <div className= "mx-auto max-w-screen-xl bg-[url('/bengaluru_city.png')]" >
            <EventHeader />
        </div>
      </div>
      <div>
        <div className="mx-auto max-w-screen-xl">
            <div className="p-4 text-2xl font-semibold">Agenda</div>
            <div className="p-4 font-light">We have an exciting agenda planned for this event. There will be a total of 9 tracks and a dedicated track for Hands-on on the latest SAP Technologies including but not limited to SAP BTP, Concur, UX, SAP S/4HANA, AI with SAP and Low Code/No Code. Follow the below blog post to get the latest agenda. </div>
        </div>
      </div>
      <div>
        <div className="mx-auto max-w-screen-xl">
            <div className="p-4 text-2xl font-semibold">Sessions</div>
            <div className="flex flex-row items-center align-middle justify-around space-x-4">
              <div className="font-lightt">
                {/* Session details goes here */}
                <TimelineComponent startTime="08:00 AM" endTime="09:10 AM" />
              </div>
              <div className="font-light">
                <p className="mb-10">
                  Registration and Networking
                </p>
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
            </div>
            <div className="flex flex-row items-center align-middle justify-around space-x-4">
              <div className="font-lightt">
                {/* Session details goes here */}
                <TimelineComponent startTime="09:15 AM" endTime="09:0 AM" />
              </div>
              <div className="font-light">
                <p className="mb-10">
                  Registration and Networking
                </p>
              </div>
              <div className="font-light">
                <p className="mb-10">
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                </p>
              </div>
              <div className="font-light">
                <p className="mb-10">
                <Badge variant="outline">CDS</Badge>
                </p>
              </div>
            </div>
        </div>
      </div>
      <div>
        <div className="mx-auto max-w-screen-xl">
            <div className="p-4 text-2xl font-semibold">Sponsers</div>
            <div className="p-4 font-light">
              Sponser details goes here
            </div>
        </div>
      </div>
      <div>
        <div className="mx-auto max-w-screen-xl">
            <div className="p-4 text-2xl font-semibold">Organizers</div>
            <div className="p-4 font-light">
              Sponser details goes here
            </div>
        </div>
      </div>
      <div>
        <div className="mx-auto max-w-screen-xl">
            <div className="p-4 text-2xl font-semibold">Volunteers</div>
            <div className="p-4 font-light">
              Sponser details goes here
            </div>
        </div>
      </div>
      <div className="bg-gradient-to-r from-[#041b30] to-[#001528]">
        <div className="mx-auto max-w-screen-xl">
        <Footer />
        </div>
      </div>
    </div>
    )
}

export default EventPage;