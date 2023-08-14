'use client'

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
import Sessions from '@/components/sessions';
import CoffeeMakerIcon from '@mui/icons-material/CoffeeMaker';

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
    const [isMounted, setIsMounted] = useState(false)
    useEffect(() => {
        fetch(`/api/events/sap-inside-track-aug-2023`)
            .then((res) => res.json())
            .then((data) => {
                debugger;
                setData(data)
            })
        setIsMounted(true)
    }, [])

    if (!isMounted) {
        return null
    }

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
                    <EventHeader title={data?.title} register={data?.register} />
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
                    <div className="p-4 text-2xl font-semibold">Sessions</div>
                    <div className="mx-auto bg-slate-50">
                        <div className="flex p-4 ">
                            <div className="w-1/5 p-2 ">
                                <label className='text-gray-700'>08:00 AM - 09:15 AM</label>
                            </div>
                            <div className='w-4/5 p-2'>
                                <label className='text-gray-500'>Registration and Networking</label>
                            </div>
                        </div>
                    </div>

                    <div className="mx-auto bg-slate-50">
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

                    {data?.sessions.map((session) => {
                        return (
                            <div key="session.time" className="mx-auto bg-slate-50">
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
                                                            <div key="track.tracktitle" className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4 p-4">
                                                                <h4 className="text-xs font-bold text-gray-500">{track.track}</h4>
{/*                                                                 <h4 className="text-xs font-bold text-gray-500">{track.tracktitle}</h4> */}
                                                                <div className="bg-slate-200 rounded-lg shadow-lg p-2 h-full flex flex-col justify-between">
                                                                    <p className="text-xs font-semibold text-gray-800 mt-2">{track.sessiontitle}</p>
                                                                    <p className="text-xs text-gray-600 mt-2">Speakers: {track.speakers}</p>
                                                                </div>
                                                            </div>
                                                        )
                                                        break;
                                                    case "break":
                                                        return (
                                                            <div key="session.tracktitle" className='mx-auto w-4/5 p-2 text-center bg-teal-200'>
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
                    <div className="p-4 text-2xl font-semibold">Sponsers</div>
                    <div className="p-4 font-light">
                        <p className="w-full mb-4 -mt-4 text-center text-base font-semibold uppercase text-gray-400 tracking-wider">
                            Platinum Sponsors
                        </p>
                        <div className="flex flex-row justify-between p-10">
                            <a
                                className="flex items-center justify-center text-gray-400 hover:text-gray-200"
                                href="https://laradir.com"
                                target="_blank"
                                title="Laradir"
                            >
                                <svg className="w-auto h-8 fill-current" viewBox="0 0 627 227">
                                    <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M369.6 33C369.6 14.7746 384.375 0 402.6 0H594C612.225 0 627 14.7746 627 33V193.05C627 211.275 612.225 226.05 594 226.05H402.6C384.375 226.05 369.6 211.275 369.6 193.05V33ZM418.717 170.61C425.247 174.676 432.639 176.708 440.893 176.708C447.3 176.708 453.09 175.353 458.264 172.643C461.346 171.029 464.057 169.065 466.396 166.751V174.86H490.42V41.2501H466.211V93.3721C463.872 91.0882 461.162 89.1758 458.08 87.6349C453.028 85.0477 447.3 83.7541 440.893 83.7541C432.516 83.7541 425.062 85.7869 418.532 89.8525C412.126 93.9181 407.013 99.4621 403.194 106.484C399.498 113.507 397.65 121.453 397.65 130.324C397.65 139.071 399.498 146.956 403.194 153.978C407.013 161 412.188 166.544 418.717 170.61ZM456.786 151.391C453.46 153.362 449.517 154.348 444.959 154.348C440.647 154.348 436.766 153.362 433.316 151.391C429.867 149.296 427.156 146.463 425.185 142.89C423.337 139.194 422.413 134.944 422.413 130.139C422.413 125.457 423.337 121.33 425.185 117.757C427.156 114.184 429.805 111.351 433.132 109.256C436.581 107.162 440.585 106.115 445.144 106.115C449.579 106.115 453.46 107.162 456.786 109.256C460.236 111.228 462.884 114.061 464.732 117.757C466.704 121.33 467.689 125.457 467.689 130.139C467.689 134.944 466.704 139.194 464.732 142.89C462.884 146.463 460.236 149.296 456.786 151.391ZM500.286 85.6021V174.86H524.68V85.6021H500.286ZM502.689 67.3069C505.276 69.8941 508.541 71.1877 512.483 71.1877C516.549 71.1877 519.813 69.8941 522.277 67.3069C524.865 64.5965 526.158 61.2701 526.158 57.3277C526.158 53.5085 524.865 50.2437 522.277 47.5333C519.813 44.8229 516.549 43.4677 512.483 43.4677C508.541 43.4677 505.276 44.8229 502.689 47.5333C500.101 50.2437 498.808 53.5085 498.808 57.3277C498.808 61.2701 500.101 64.5965 502.689 67.3069ZM534.575 174.86V85.6021H558.784V93.5848C558.845 93.5108 558.907 93.4371 558.969 93.3637C564.266 86.9573 571.905 83.7541 581.884 83.7541C586.196 83.7541 590.077 84.4933 593.526 85.9717C596.976 87.3269 600.118 89.6061 602.951 92.8093L587.798 110.18C586.443 108.702 584.779 107.593 582.808 106.854C580.96 106.115 578.804 105.745 576.34 105.745C571.166 105.745 566.915 107.408 563.589 110.735C560.386 113.938 558.784 118.866 558.784 125.519V174.86H534.575ZM0 44.5499V174.464H18.48H25.1328H84.6384V152.104H25.1328V44.5499H0ZM108.142 170.214C114.671 174.28 122.002 176.312 130.133 176.312C136.539 176.312 142.268 175.019 147.319 172.432C150.677 170.63 153.573 168.419 156.005 165.801V174.464H180.029V85.2059H156.005V93.787C153.573 91.1415 150.677 88.9587 147.319 87.2387C142.268 84.6515 136.539 83.3579 130.133 83.3579C122.002 83.3579 114.671 85.3907 108.142 89.4563C101.612 93.5219 96.4994 99.0659 92.8034 106.088C89.1074 113.111 87.2594 121.057 87.2594 129.928C87.2594 138.675 89.1074 146.56 92.8034 153.582C96.4994 160.604 101.612 166.148 108.142 170.214ZM151.015 147.299C146.827 151.734 141.344 153.952 134.568 153.952C130.133 153.952 126.191 152.966 122.741 150.995C119.415 148.9 116.766 146.067 114.795 142.494C112.947 138.798 112.023 134.548 112.023 129.743C112.023 125.061 112.947 120.934 114.795 117.361C116.766 113.665 119.415 110.832 122.741 108.86C126.191 106.766 130.133 105.719 134.568 105.719C139.127 105.719 143.069 106.766 146.395 108.86C149.845 110.832 152.494 113.665 154.342 117.361C156.313 120.934 157.299 125.061 157.299 129.743C157.299 136.888 155.204 142.74 151.015 147.299ZM189.896 174.464V85.2059H214.104V93.1887C214.166 93.1147 214.227 93.0409 214.289 92.9675C219.587 86.5611 227.225 83.3579 237.204 83.3579C241.516 83.3579 245.397 84.0971 248.847 85.5755C252.296 86.9307 255.438 89.2099 258.272 92.4131L243.118 109.784C241.763 108.306 240.1 107.197 238.128 106.458C236.28 105.719 234.124 105.349 231.66 105.349C226.486 105.349 222.236 107.012 218.909 110.339C215.706 113.542 214.104 118.47 214.104 125.123V174.464H189.896ZM272.987 170.214C279.517 174.28 286.847 176.312 294.978 176.312C301.385 176.312 307.114 175.019 312.165 172.432C315.523 170.63 318.418 168.419 320.85 165.801V174.464H344.874V85.2059H320.85V93.7871C318.418 91.1415 315.523 88.9587 312.165 87.2387C307.114 84.6515 301.385 83.3579 294.978 83.3579C286.847 83.3579 279.517 85.3907 272.987 89.4563C266.458 93.5219 261.345 99.0659 257.649 106.088C253.953 113.111 252.105 121.057 252.105 129.928C252.105 138.675 253.953 146.56 257.649 153.582C261.345 160.604 266.458 166.148 272.987 170.214ZM315.861 147.299C311.672 151.734 306.19 153.952 299.414 153.952C294.978 153.952 291.036 152.966 287.586 150.995C284.26 148.9 281.611 146.067 279.64 142.494C277.792 138.798 276.868 134.548 276.868 129.743C276.868 125.061 277.792 120.934 279.64 117.361C281.611 113.665 284.26 110.832 287.586 108.86C291.036 106.766 294.978 105.719 299.414 105.719C303.972 105.719 307.914 106.766 311.241 108.86C314.69 110.832 317.339 113.665 319.187 117.361C321.158 120.934 322.144 125.061 322.144 129.743C322.144 136.888 320.05 142.74 315.861 147.299Z"
                                    ></path>
                                </svg>
                            </a>
                            <a
                                className="flex items-center justify-center text-gray-400 hover:text-gray-200"
                                href="https://ploi.io"
                                target="_blank"
                                title="Ploi"
                            >
                                <svg className="w-auto h-6 fill-current" viewBox="0 0 253 93.3">
                                    <path d="M25.7 66a11.4 11.4 0 01-9.5-4.7q-3.6-4.7-3.7-12.6T16.2 36a11.4 11.4 0 019.5-4.7 11.4 11.4 0 019.6 4.7Q39 40.7 39 48.7t-3.6 12.6a11.5 11.5 0 01-9.6 4.7zm3.8-45.1a18.9 18.9 0 00-10.2 2.7 18 18 0 00-6.7 7.5h-.3v-9.3H0v71.5h12.6V66.5h.3a17 17 0 006.6 7.2 19.4 19.4 0 0010.2 2.6q10.2 0 16.1-7.4t6-20.3q0-12.9-6-20.4T29.5 21zM59.2 75.5h12.6V2.5H59.2v73.1zM105.3 66.6a11.5 11.5 0 01-9.6-4.7Q92 57.2 92 48.7t3.6-13.3a12.1 12.1 0 0119.2 0q3.6 4.7 3.6 13.3t-3.6 13.2a11.5 11.5 0 01-9.6 4.7zm0 10q11.8 0 19-7.4t7-20.6q0-13-7.1-20.4t-19-7.5q-11.7 0-18.8 7.5t-7.1 20.4q0 13.2 7 20.6t19 7.4zM145 13.7a6.7 6.7 0 004.9-2 6.6 6.6 0 002-4.8 6.6 6.6 0 00-2-4.9 6.8 6.8 0 00-5-2 6.7 6.7 0 00-4.8 2 6.5 6.5 0 00-2 4.9 6.5 6.5 0 002 4.8 6.6 6.6 0 004.8 2zm-6.3 61.9h12.6V21.8h-12.7v53.8zM168.8 76a5.7 5.7 0 10-4.1-1.6 5.6 5.6 0 004 1.7zM191.5 13.4a5.3 5.3 0 004-1.6A5.3 5.3 0 00197 8a5.5 5.5 0 10-11 0 5.3 5.3 0 001.5 4 5.3 5.3 0 004 1.5zm-4.4 62.1h8.8V22.8H187v52.8zM228.6 68.7a13.8 13.8 0 01-11.2-5q-4.3-5.2-4.3-14.5t4.3-14.4a14.9 14.9 0 0122.4 0q4.2 5 4.2 14.4t-4.2 14.4a13.8 13.8 0 01-11.2 5.1zm0 7.8q10.9 0 17.6-7.4t6.8-20q0-12.5-6.8-19.9T228.7 22q-11 0-17.7 7.3t-6.7 20q0 12.6 6.7 20t17.7 7.3z"></path>
                                </svg>
                            </a>

                            <a
                                className="flex items-center justify-center text-gray-400 hover:text-gray-200"
                                href="https://ploi.io"
                                target="_blank"
                                title="Ploi"
                            >
                                <svg className="w-auto h-6 fill-current" viewBox="0 0 253 93.3">
                                    <path d="M25.7 66a11.4 11.4 0 01-9.5-4.7q-3.6-4.7-3.7-12.6T16.2 36a11.4 11.4 0 019.5-4.7 11.4 11.4 0 019.6 4.7Q39 40.7 39 48.7t-3.6 12.6a11.5 11.5 0 01-9.6 4.7zm3.8-45.1a18.9 18.9 0 00-10.2 2.7 18 18 0 00-6.7 7.5h-.3v-9.3H0v71.5h12.6V66.5h.3a17 17 0 006.6 7.2 19.4 19.4 0 0010.2 2.6q10.2 0 16.1-7.4t6-20.3q0-12.9-6-20.4T29.5 21zM59.2 75.5h12.6V2.5H59.2v73.1zM105.3 66.6a11.5 11.5 0 01-9.6-4.7Q92 57.2 92 48.7t3.6-13.3a12.1 12.1 0 0119.2 0q3.6 4.7 3.6 13.3t-3.6 13.2a11.5 11.5 0 01-9.6 4.7zm0 10q11.8 0 19-7.4t7-20.6q0-13-7.1-20.4t-19-7.5q-11.7 0-18.8 7.5t-7.1 20.4q0 13.2 7 20.6t19 7.4zM145 13.7a6.7 6.7 0 004.9-2 6.6 6.6 0 002-4.8 6.6 6.6 0 00-2-4.9 6.8 6.8 0 00-5-2 6.7 6.7 0 00-4.8 2 6.5 6.5 0 00-2 4.9 6.5 6.5 0 002 4.8 6.6 6.6 0 004.8 2zm-6.3 61.9h12.6V21.8h-12.7v53.8zM168.8 76a5.7 5.7 0 10-4.1-1.6 5.6 5.6 0 004 1.7zM191.5 13.4a5.3 5.3 0 004-1.6A5.3 5.3 0 00197 8a5.5 5.5 0 10-11 0 5.3 5.3 0 001.5 4 5.3 5.3 0 004 1.5zm-4.4 62.1h8.8V22.8H187v52.8zM228.6 68.7a13.8 13.8 0 01-11.2-5q-4.3-5.2-4.3-14.5t4.3-14.4a14.9 14.9 0 0122.4 0q4.2 5 4.2 14.4t-4.2 14.4a13.8 13.8 0 01-11.2 5.1zm0 7.8q10.9 0 17.6-7.4t6.8-20q0-12.5-6.8-19.9T228.7 22q-11 0-17.7 7.3t-6.7 20q0 12.6 6.7 20t17.7 7.3z"></path>
                                </svg>
                            </a>

                            <a
                                className="flex items-center justify-center text-gray-400 hover:text-gray-200"
                                href="https://ploi.io"
                                target="_blank"
                                title="Ploi"
                            >
                                <svg className="w-auto h-6 fill-current" viewBox="0 0 253 93.3">
                                    <path d="M25.7 66a11.4 11.4 0 01-9.5-4.7q-3.6-4.7-3.7-12.6T16.2 36a11.4 11.4 0 019.5-4.7 11.4 11.4 0 019.6 4.7Q39 40.7 39 48.7t-3.6 12.6a11.5 11.5 0 01-9.6 4.7zm3.8-45.1a18.9 18.9 0 00-10.2 2.7 18 18 0 00-6.7 7.5h-.3v-9.3H0v71.5h12.6V66.5h.3a17 17 0 006.6 7.2 19.4 19.4 0 0010.2 2.6q10.2 0 16.1-7.4t6-20.3q0-12.9-6-20.4T29.5 21zM59.2 75.5h12.6V2.5H59.2v73.1zM105.3 66.6a11.5 11.5 0 01-9.6-4.7Q92 57.2 92 48.7t3.6-13.3a12.1 12.1 0 0119.2 0q3.6 4.7 3.6 13.3t-3.6 13.2a11.5 11.5 0 01-9.6 4.7zm0 10q11.8 0 19-7.4t7-20.6q0-13-7.1-20.4t-19-7.5q-11.7 0-18.8 7.5t-7.1 20.4q0 13.2 7 20.6t19 7.4zM145 13.7a6.7 6.7 0 004.9-2 6.6 6.6 0 002-4.8 6.6 6.6 0 00-2-4.9 6.8 6.8 0 00-5-2 6.7 6.7 0 00-4.8 2 6.5 6.5 0 00-2 4.9 6.5 6.5 0 002 4.8 6.6 6.6 0 004.8 2zm-6.3 61.9h12.6V21.8h-12.7v53.8zM168.8 76a5.7 5.7 0 10-4.1-1.6 5.6 5.6 0 004 1.7zM191.5 13.4a5.3 5.3 0 004-1.6A5.3 5.3 0 00197 8a5.5 5.5 0 10-11 0 5.3 5.3 0 001.5 4 5.3 5.3 0 004 1.5zm-4.4 62.1h8.8V22.8H187v52.8zM228.6 68.7a13.8 13.8 0 01-11.2-5q-4.3-5.2-4.3-14.5t4.3-14.4a14.9 14.9 0 0122.4 0q4.2 5 4.2 14.4t-4.2 14.4a13.8 13.8 0 01-11.2 5.1zm0 7.8q10.9 0 17.6-7.4t6.8-20q0-12.5-6.8-19.9T228.7 22q-11 0-17.7 7.3t-6.7 20q0 12.6 6.7 20t17.7 7.3z"></path>
                                </svg>
                            </a>

                            <a
                                className="flex items-center justify-center text-gray-400 hover:text-gray-200"
                                href="https://ploi.io"
                                target="_blank"
                                title="Ploi"
                            >
                                <svg className="w-auto h-6 fill-current" viewBox="0 0 253 93.3">
                                    <path d="M25.7 66a11.4 11.4 0 01-9.5-4.7q-3.6-4.7-3.7-12.6T16.2 36a11.4 11.4 0 019.5-4.7 11.4 11.4 0 019.6 4.7Q39 40.7 39 48.7t-3.6 12.6a11.5 11.5 0 01-9.6 4.7zm3.8-45.1a18.9 18.9 0 00-10.2 2.7 18 18 0 00-6.7 7.5h-.3v-9.3H0v71.5h12.6V66.5h.3a17 17 0 006.6 7.2 19.4 19.4 0 0010.2 2.6q10.2 0 16.1-7.4t6-20.3q0-12.9-6-20.4T29.5 21zM59.2 75.5h12.6V2.5H59.2v73.1zM105.3 66.6a11.5 11.5 0 01-9.6-4.7Q92 57.2 92 48.7t3.6-13.3a12.1 12.1 0 0119.2 0q3.6 4.7 3.6 13.3t-3.6 13.2a11.5 11.5 0 01-9.6 4.7zm0 10q11.8 0 19-7.4t7-20.6q0-13-7.1-20.4t-19-7.5q-11.7 0-18.8 7.5t-7.1 20.4q0 13.2 7 20.6t19 7.4zM145 13.7a6.7 6.7 0 004.9-2 6.6 6.6 0 002-4.8 6.6 6.6 0 00-2-4.9 6.8 6.8 0 00-5-2 6.7 6.7 0 00-4.8 2 6.5 6.5 0 00-2 4.9 6.5 6.5 0 002 4.8 6.6 6.6 0 004.8 2zm-6.3 61.9h12.6V21.8h-12.7v53.8zM168.8 76a5.7 5.7 0 10-4.1-1.6 5.6 5.6 0 004 1.7zM191.5 13.4a5.3 5.3 0 004-1.6A5.3 5.3 0 00197 8a5.5 5.5 0 10-11 0 5.3 5.3 0 001.5 4 5.3 5.3 0 004 1.5zm-4.4 62.1h8.8V22.8H187v52.8zM228.6 68.7a13.8 13.8 0 01-11.2-5q-4.3-5.2-4.3-14.5t4.3-14.4a14.9 14.9 0 0122.4 0q4.2 5 4.2 14.4t-4.2 14.4a13.8 13.8 0 01-11.2 5.1zm0 7.8q10.9 0 17.6-7.4t6.8-20q0-12.5-6.8-19.9T228.7 22q-11 0-17.7 7.3t-6.7 20q0 12.6 6.7 20t17.7 7.3z"></path>
                                </svg>
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
