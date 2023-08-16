'use client'

import LandingNavBar from '@/components/landing-navbar'
import DropDownTracks from './DropDown'
import EventHeader from '@/components/event-header-section'
import EventHero from '@/components/event-hero'
import Footer from '@/components/footer'
import TimelineComponent from '@/components/timeline'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { useState } from 'react'
import { useEffect, useRef } from 'react'
import Image from 'next/image'
import Bengaluru from '@/public/bengaluru_city.png'
import { useRouter } from 'next/navigation'
import Sessions from '@/components/sessions';
import CoffeeMakerIcon from '@mui/icons-material/CoffeeMaker';
import AcloudGuruji from '@/public/sponsers/acloudguruji.png';
import archtech from '@/public/sponsers/archtech.png';
import primus from '@/public/sponsers/primus.png';
import s2integrations from '@/public/sponsers/s2integrations.png';
import sappress from '@/public/sponsers/sap-press.jpg';
import { Button } from '@/components/ui/button'
import Link from 'next/link'

type track = {
    id: string
    trackName: string
    active: boolean
}
type tracks = {
    tracktitle: string,
    sessiontitle: string,
    speakers: string,
    track: string
}

type session = {
    time: string,
    type: string,
    tracktitle: string,
    sessionsByTrack: tracks[]
}

type eventdata = {
    id: string
    title: string
    register: string
    sessions: session[]
    tracks: track[]
}

type event = eventdata | null



const Home = () => {
    const router = useRouter()
    const [data, setData] = useState<event>(null)

    const [query, setQuery] = useState<String>("")

    const multipleSearch = (data) => {
        if (!query) {
            return JSON.parse(JSON.stringify(data));
        }

        let filteredData = JSON.parse(JSON.stringify(data));
        let filteredSessions = [];
        filteredData.sessions.forEach(function (item) {
            if (item.type === "grid") {
                var filtSessionsByTrack = item.sessionsByTrack.filter(function (el) {
                    return el.description.toLowerCase().includes(query.toLowerCase()) ||
                        el.sessiontitle.toLowerCase().includes(query.toLowerCase()) ||
                        el.track.toLowerCase().includes(query.toLowerCase());
                }
                );
            } else {
                filtSessionsByTrack = item.sessionsByTrack;
            }
            if (filtSessionsByTrack.length > 0) {
                item.sessionsByTrack = filtSessionsByTrack;
                filteredSessions.push(item);
            }
        });
        filteredData.sessions = filteredSessions;
        return filteredData;
    }

    const [isMounted, setIsMounted] = useState(false)
    useEffect(() => {
        fetch(`/api/events/sap-inside-track-aug-2023`)
            .then((res) => res.json())
            .then((data) => {
                setData(data)
            })
        setIsMounted(true)
    }, [])
    const searchButton = useRef(null);
    if (!isMounted) {
        return null
    }

    const onChangeHandle = function (e) {
        setQuery(e.target.value)
    }

    const onFocusHandle = function () {
        // debugger;
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth',
        });
    }

    const filteredData = multipleSearch(data)
    return (
        // ffe505
        <div className="h-full">
            <div className="bg-gradient-to-r from-[#ffb805] to-[#e1cf2b] ">
                <div className="mx-auto max-w-screen-xl">
                    <LandingNavBar />
                </div>
            </div>
            <div className="bg-gradient-to-r from-[#ffb805] to-[#e1cf2b]">
                <div className="mx-auto max-w-screen-xl bg-[url('/bengaluru_city.png')]">
                    <EventHeader title={filteredData?.title} register={filteredData?.register} />
                </div>
            </div>
            <div>
                <div className="mx-auto max-w-screen-xl">
                    <div className="p-4 font-light text-gray-700">
                        We have an exciting agenda planned for this event. There will be a
                        total of 9 tracks with a dedicated track for Hands-on on the latest
                        SAP Technologies including but not limited to SAP BTP, Concur, UX,
                        SAP S/4HANA, AI with SAP, and Low Code/No Code. Check the below sessions for more details.
                    </div>
                </div>
            </div>
            <div>
                <div className="mx-auto max-w-screen-xl">


                    <div className="font-semibold ">
                        <Link legacyBehavior href="https://docs.google.com/spreadsheets/d/1uuVxpWiAthIiWt4l9Djzg1YfTAY_AdxZKiIC5WPugOU/edit">
                            <a className="decoration-blue-500 underline underline-offset-auto" target="_blank" rel="noopener noreferrer">
                                <p className="p-2 text-blue-600">Link to Excel</p></a></Link></div>
                    <div className='flex flex-row justify-between'>
                        <div className="p-2 text-2xl font-semibold">Sessions</div>
                        <input type="text" ref={searchButton} onFocus={onFocusHandle} name="search" onChange={onChangeHandle} className="w-1/5 mt-1 px-3 py-2 bg-white border shadow-sm border-grey-300 placeholder-grey-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="Search sessions here..." />
                        {/* <DropDownTracks/> */}
                        {/* <Button>Download Session Details</Button> */}
                    </div>
                    {query ? "" : (
                        <div>
                            <div className="mx-auto bg-gray-50">
                                <div className="flex p-4 ">
                                    <div className="w-1/5 p-2 ">
                                        <label className='text-gray-700'>08:00 AM - 09:15 AM</label>
                                    </div>
                                    <div className='w-4/5 p-2'>
                                        <label className='text-gray-500'>Registration and Networking</label>
                                    </div>
                                </div>
                            </div>

                            <div className="mx-auto bg-gray-50">
                                <div className="flex p-4 ">
                                    <div className="w-1/5 p-2">
                                        <label className='text-gray-700'>09:30 AM - 09:45 AM</label>
                                    </div>
                                    <div className='w-4/5 p-2 flex flex-col justify-between'>
                                        <label className='text-gray-500'>Keynote from Sindhu Gangadharan (SVP & MD, SAP Labs India | Head User Enablement)</label>
                                        {/*                                 <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full relative overflow-hidden mt-4 md:h-[160px] md:w-[160px]">
                                    <Image
                                        src="https://media.licdn.com/dms/image/D5603AQGTDZhMQ-rZdQ/profile-displayphoto-shrink_800_800/0/1678471357277?e=1697673600&v=beta&t=cI3L2iZ-AI9GUTqmmZvmcCm8FSRelDieOF78gYhvcFA"
                                        layout="fill"
                                        objectFit="cover"
                                        alt="Guest Speaker"
                                    />
                                </div> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                    {filteredData?.sessions.map((session, idx) => {
                        return (
                            <div key={session.time + idx} className="mx-auto bg-gray-50">
                                <div className="flex p-4 ">
                                    <div className="w-1/5 p-2">
                                        <label className='text-gray-700'>{session.time}</label>
                                    </div>
                                    <div className='w-4/5'>
                                        <div className="flex flex-wrap">
                                            {session.sessionsByTrack.map((track) => {
                                                switch (session.type) {
                                                    case "grid":
                                                        return (
                                                            <div key={track.track + track.sessionseq} className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4 p-4">
                                                                {/* <h4 className="text-xs font-bold text-gray-500">{track.track}</h4>
                                                                <h4 className="text-xs font-bold text-gray-500">{track.tracktitle}</h4> */}
                                                                <div className="bg-slate-100 border border-slate-200 rounded-none shadow-md p-2 h-full flex flex-col justify-between">
                                                                    <div>
                                                                        <h4 className="text-xs font-bold text-gray-700">{track.track}</h4>
                                                                        <p className="text-xs text-gray-500">{track.tracktitle}</p>
                                                                    </div>
                                                                    <hr />

                                                                    <p className="text-xs font-semibold text-gray-700 mt-2">{track.sessiontitle}</p>
                                                                    <p className="text-xs text-gray-800 mt-2 line-clamp-2">{track.description}</p>
                                                                    <hr />
                                                                    <p className="text-xs font-semibold text-gray-500 mt-2">{track.speakers}</p>
                                                                </div>
                                                            </div>
                                                        )
                                                        break;
                                                    case "break":
                                                        return (
                                                            <div key="track.sessionseq" className='mx-auto w-full p-2 text-center bg-teal-200'>
                                                                <label className=' text-gray-500'>{session.tracktitle}</label>
                                                            </div>
                                                        )
                                                        break;
                                                }
                                            })}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}


                    {/* <div className="mx-auto bg-slate-50">
                        <div className="flex p-4 ">
                            <div className="w-1/5 p-2">
                                <label className='text-gray-700'>10:00 AM - 10:25 AM</label>
                            </div>
                            <div className='w-4/5'>
                                <div className="flex flex-wrap">

                                    <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4 p-4">
                                        <h4 className="text-xs font-bold text-gray-500">SAP BTP General and Cross Topics</h4>
                                        <div className="bg-yellow-100 rounded-lg shadow-lg p-2 h-full flex flex-col justify-between">
                                            <p className="text-xs font-semibold text-gray-800 mt-2">SAP BTP and Data to Value Strategy</p>
                                            <p className="text-xs text-gray-600 mt-2">Speakers: Dharani Karthikeyan (SAP labs)</p>
                                        </div>
                                    </div>

                                    <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4 p-4">
                                        <h4 className="text-xs font-bold text-gray-500">Pro Code + Low Code + Integration</h4>
                                        <div className="bg-yellow-100 rounded-lg shadow-lg p-2 h-full flex flex-col justify-between">
                                            <p className="text-xs font-semibold text-gray-800 mt-2">Using SAP Build Process Automation Pre-packaged Content to Accelerate Application Development</p>
                                            <p className="text-xs text-gray-600 mt-2">Speakers: Archana Shukla (SAP labs)</p>
                                        </div>
                                    </div>

                                    <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4 p-4">
                                        <h4 className="text-xs font-bold text-gray-500">Data-to-Value + A.I</h4>
                                        <div className="bg-yellow-100 rounded-lg shadow-lg p-2 h-full flex flex-col justify-between">
                                            <p className="text-xs font-semibold text-gray-800 mt-2">Reusable AI Assets. A look at reusable AI assets from SAP</p>
                                            <p className="text-xs text-gray-600 mt-2">Speakers: Prasanna Bhat (SAP labs)</p>
                                        </div>
                                    </div>

                                    <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4 p-4">
                                        <h4 className="text-xs font-bold text-gray-500">SAP Cloud Products 1</h4>
                                        <div className="bg-yellow-100 rounded-lg shadow-lg p-2 h-full flex flex-col justify-between">
                                            <p className="text-xs font-semibold text-gray-800 mt-2">Insights into Value Chain using Modern Architecture: calculation of CO2e</p>
                                            <p className="text-xs text-gray-600 mt-2">Speakers: Sanil Bhandari (SAP labs)</p>
                                        </div>
                                    </div>

                                    <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4 p-4">
                                        <h4 className="text-xs font-bold text-gray-500">SAP Cloud Products 2</h4>
                                        <div className="bg-yellow-100 rounded-lg shadow-lg p-2 h-full flex flex-col justify-between">
                                            <p className="text-xs font-semibold text-gray-800 mt-2">Get the latest outlook of SAP Cloud ALM for Implementation</p>
                                            <p className="text-xs text-gray-600 mt-2">Speakers: Sonal Kumar, Umesh Jagadesh (SAP labs)</p>
                                        </div>
                                    </div>

                                    <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4 p-4">
                                        <h4 className="text-xs font-bold text-gray-500">SAP Concur</h4>
                                        <div className="bg-yellow-100 rounded-lg shadow-lg p-2 h-full flex flex-col justify-between">
                                            <p className="text-xs font-semibold text-gray-800 mt-2">Concur Welcome, Keynote, Product Direction and beyond</p>
                                            <p className="text-xs text-gray-600 mt-2">Speakers: Srivatsan Santhanam, Priyam Pandia, Amruta Mohanty(SAP labs)</p>
                                        </div>
                                    </div>

                                    <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4 p-4">
                                        <h4 className="text-xs font-bold text-gray-500">SAP UX & Cross Topics</h4>
                                        <div className="bg-yellow-100 rounded-lg shadow-lg p-2 h-full flex flex-col justify-between">
                                            <p className="text-xs font-semibold text-gray-800 mt-2">Global Search</p>
                                            <p className="text-xs text-gray-600 mt-2">Speakers: Roohi Ganatra (SAP labs)</p>
                                        </div>
                                    </div>

                                    <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4 p-4">
                                        <h4 className="text-xs font-bold text-gray-500">SAP Community & Cross Topics</h4>
                                        <div className="bg-yellow-100 rounded-lg shadow-lg p-2 h-full flex flex-col justify-between">
                                            <p className="text-xs font-semibold text-gray-800 mt-2">ABAP - Open to All!</p>
                                            <p className="text-xs text-gray-600 mt-2">Speakers: Mainak Aich (VS&Co)</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
            <div>
                <div className="mx-auto max-w-screen-xl">
                    <div className="p-4 text-2xl font-semibold">Sponsors</div>
                    <div className="p-4 font-light">
                        {/* <p className="w-full mb-4 -mt-4 text-center text-base font-semibold uppercase text-gray-400 tracking-wider">
                            Platinum Sponsors
                        </p> */}

                        <div className="flex flex-row justify-between p-10">
                            <a
                                className="flex items-center justify-center text-gray-400 hover:text-gray-200"
                                href="https://laradir.com"
                                target="_blank"
                                title="Laradir"
                            >
                                <Image
                                    width={200}
                                    height={200}
                                    src={AcloudGuruji}
                                    objectFit="cover"
                                    alt="A Cloud Guruju"
                                />

                            </a>
                            <a
                                className="flex items-center justify-center text-gray-400 hover:text-gray-200"
                                href="https://ploi.io"
                                target="_blank"
                                title="Ploi"
                            >
                                <div className='object-contain'>
                                    <Image
                                        // className="w-auto"
                                        src={archtech}
                                        width={250}
                                        height={200}
                                        objectFit="cover"
                                        alt="archtech"
                                    />
                                </div>
                            </a>

                            <a
                                className="flex items-center justify-center text-gray-400 hover:text-gray-200"
                                href="https://ploi.io"
                                target="_blank"
                                title="Ploi"
                            >
                                <div className='object-contain'>
                                    <Image
                                        // className="w-auto"
                                        src={primus}
                                        width={100}
                                        height={100}
                                        objectFit="contain"
                                        alt="A Cloud Guruju"
                                    />
                                </div>
                            </a>

                            <a
                                className="flex items-center justify-center text-gray-400 hover:text-gray-200"
                                href="https://ploi.io"
                                target="_blank"
                                title="Ploi"
                            >
                                <div className='object-contain'>
                                    <Image
                                        // className="w-auto"
                                        src={s2integrations}
                                        width={100}
                                        height={100}
                                        objectFit="contain"
                                        alt="A Cloud Guruju"
                                    />
                                </div>
                            </a>

                            <a
                                className="flex items-center justify-center text-gray-400 hover:text-gray-200"
                                href="https://ploi.io"
                                target="_blank"
                                title="Ploi"
                            >
                                <Image
                                    width={175}
                                    height={175}
                                    src={sappress}
                                    objectFit="cover"
                                    alt="A Cloud Guruju"
                                />
                            </a>
                        </div>
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

export default Home
