"use client";

import { usechecklist } from "@/hooks/use-checklist-modal";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Timer from "@/components/Timer";
import FlipClockCountdown from "@leenguyen/react-flip-clock-countdown";
import "@leenguyen/react-flip-clock-countdown/dist/index.css";
import EventHero from "@/components/event-hero";

type props = {
  title: string | any;
  register: string | any;
  eventCompleted: boolean;
  linktoeventfeedback: string;
};

const EventHeader = ({
  title,
  register,
  eventCompleted,
  linktoeventfeedback,
}: props) => {
  const eventDate = "2023-07-31T23:59:59";
  const { onOpen: onOpenChecklist } = usechecklist();

  return (
    <div className="font-bold py-4 space-y-5 inset-0 z-20">
      <div className="flex flex-row">
        <div>
          <div className="text-2xl sm:text-4xl md:text-3xl lg:text-4xl font-extrabold space-y-1 px-4">
            <h1>{title}</h1>
            <h3>Bengaluru, India</h3>
          </div>
          <div className="flex flex-wrap mt-8">
            {linktoeventfeedback && (
              <div className="p-2">
                <a
                  target="_blank"
                  href={linktoeventfeedback}
                  rel="noopener noreferrer"
                >
                  <Button className="bg-gradient-to-br from-purple-900 to-blue-700 px-4 md:text-lg p-4 md:p-6    text-white hover:bg-blue-800 hover:text-white">
                    Event Feedback
                  </Button>
                </a>
              </div>
            ) }
            {register && (
              <div className="p-2">
                <a target="_blank" href={register} rel="noopener noreferrer">
                  <Button className="px-4 bg-gradient-to-br from-purple-900 to-blue-700  md:text-lg p-4 md:p-6    text-white hover:bg-blue-800 hover:text-white">
                    Register Here
                  </Button>
                </a>
              </div>
            )}
            <div className="p-2">
              <a href="/paths" rel="noopener noreferrer">
                <Button className="px-4 bg-gradient-to-br from-purple-900 to-blue-700 md:text-lg p-4 md:p-6   text-white hover:bg-blue-800 hover:text-white">
                  AI Discovery Paths
                </Button>
              </a>
            </div>
            {!eventCompleted && (
              <div className="p-2">
                <Button onClick={()=>{onOpenChecklist()}} className="px-4 bg-gradient-to-br from-purple-900 to-blue-700 md:text-lg p-4 md:p-6   text-white hover:bg-blue-800 hover:text-white">
                  Attendee Checklist
                </Button>
              </div>
            )}
           </div>
        </div>
<div><script src=https://widget.konfhub.com/widget.js button_id="btn_d3f6b031f6e8"></script></div>
        {/* <div className="flex px-20 items-center"> */}
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
        {/* </div> */}
      </div>
    </div>
  );
};

export default EventHeader;
