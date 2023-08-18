"use client";

import LandingNavBar from '@/components/landing-navbar'
import Image from 'next/image'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import SAP from '@/public/sap-logo-svg.svg';
import Footer from '@/components/footer'


const ContributorsPage = () => {

    return (
        <div>
            <div className="h-full">
                <div className="bg-gradient-to-r from-[#ffb805] to-[#e1cf2b] ">
                    <div className="mx-auto max-w-screen-xl">
                        <LandingNavBar />
                    </div>
                </div>


                <div className="mx-auto min-h-screen max-w-screen-xl flex flex-row pt-24">
                    {/* <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
                    <div className="absolute top-0 right-20 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
                    <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div> */}

                    <div className="w-full rounded-lg px-4 pt-4  dark:bg-gray-800 dark:border-gray-700">
                        {/* <div>
                            <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
                            <div className="absolute top-0 right-20 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
                            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
                        </div> */}
                        <div className="flex flex-col items-center pb-10">
                            <div className="rounded-full relative overflow-hidden mt-4 md:h-[250px] md:w-[250px]">
                                <div>
                                    <Image
                                        src="https://media.licdn.com/dms/image/C5603AQF1h1pPI0FNaQ/profile-displayphoto-shrink_800_800/0/1636718038591?e=1696464000&v=beta&t=YoLY6tdKKvAKmchvThWpIolT1r0VXI0FmagC4aMyw8Q"
                                        layout="fill"
                                        objectFit="cover"
                                        alt="Profile Picture"
                                    />
                                </div>
                            </div>
                            <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Arun Krishnamoorthy</h5>
                            <span className="text-sm text-gray-500 dark:text-gray-400">Contributor</span>
                            <div className="flex mt-4 space-x-3 md:mt-6">
                                <a href="https://www.linkedin.com/in/arun-krishnamoorthy-49263a35/" target="_blank" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-gray-700 rounded-lg hover:bg-black focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"><LinkedInIcon /></a>
                                <a href="https://people.sap.com/arun_krishnamoorthy" className="relative inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700"><Image
                                    src={SAP}
                                    width="32"
                                    objectFit="cover"
                                    alt="Profile Picture"
                                /></a>
                            </div>
                        </div>
                    </div>
                    <div className="w-full rounded-lg px-4 pt-4  dark:bg-gray-800 dark:border-gray-700">
                        {/* <div>
                            <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
                            <div className="absolute top-0 right-20 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
                            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
                        </div> */}
                        <div className="flex flex-col items-center pb-10">
                            <div className="rounded-full relative overflow-hidden mt-4 md:h-[250px] md:w-[250px]">
                                <div>
                                    <Image
                                        src="https://media.licdn.com/dms/image/D5603AQEVs-iqv3Kj7w/profile-displayphoto-shrink_800_800/0/1666281472958?e=1697673600&v=beta&t=SI01A5bx2F0X8MKHVgyZZJo6jnSM5L-qPS9HhxMiWhc"
                                        layout="fill"
                                        objectFit="cover"
                                        alt="Profile Picture"
                                    />
                                </div>
                            </div>
                            <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Mahesh Palavalli</h5>
                            <span className="text-sm text-gray-500 dark:text-gray-400">Organizer</span>
                            <div className="flex mt-4 space-x-3 md:mt-6">
                                <a href="https://www.linkedin.com/in/maheshpalavalli/" target="_blank" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-gray-700 rounded-lg hover:bg-black focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"><LinkedInIcon /></a>
                                <a href="https://people.sap.com/maheshkumar.palavalli" className="relative inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700"><Image
                                    src={SAP}
                                    width="32"
                                    objectFit="cover"
                                    alt="Profile Picture"
                                /></a>                            </div>
                        </div>
                    </div>
                    <div className="w-full rounded-lg px-4 pt-4  dark:bg-gray-800 dark:border-gray-700">
                        <div className="flex flex-col items-center pb-10">
                            <div className="rounded-full relative overflow-hidden mt-4 md:h-[250px] md:w-[250px]">
                                <div>
                                    <Image
                                        src="https://media.licdn.com/dms/image/D5603AQFt6sPsRD2pzg/profile-displayphoto-shrink_800_800/0/1687086850516?e=1697673600&v=beta&t=znRtEH-JwI8s4UCmWmI6TA-aYh7vwPRIwX--b2vKQHU"
                                        layout="fill"
                                        objectFit="cover"
                                        alt="Profile Picture"
                                    />
                                </div>
                            </div>
                            <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Subhajit D</h5>
                            <span className="text-sm text-gray-500 dark:text-gray-400">Organizer</span>
                            <div className="flex mt-4 space-x-3 md:mt-6">
                                <a href="https://www.linkedin.com/in/iheartsap/" target="_blank" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-gray-700 rounded-lg hover:bg-black focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"><LinkedInIcon /></a>
                                <a href="https://people.sap.com/subhajit_das" className="relative inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700"><Image
                                    src={SAP}
                                    width="32"
                                    objectFit="cover"
                                    alt="Profile Picture"
                                /></a>                            </div>
                        </div>
                    </div>
                </div>

                {/* <div className="mx-auto max-w-screen-xl">
                    <div className='mx-auto flex flex-row items-start justify-between'>
                        <div className="rounded-full relative overflow-hidden mt-4 md:h-[250px] md:w-[250px]">
                            <Image
                                src="https://media.licdn.com/dms/image/C5603AQF1h1pPI0FNaQ/profile-displayphoto-shrink_800_800/0/1636718038591?e=1696464000&v=beta&t=YoLY6tdKKvAKmchvThWpIolT1r0VXI0FmagC4aMyw8Q"
                                layout="fill"
                                objectFit="cover"
                                alt="Profile Picture"
                            />
                        </div>
                        <div className="flex-2 p-5 flex items-start justify-between space-x-8">
                            <div className="text-center p-4 space-y-6 mt-24">
                                <h1 className='text-5xl text-cyan-600 font-extrabold overflow-auto'>Arun Krishnamoorthy</h1>
                                <p className='text-gray-600 text-xl'>This website development was contributed by Arun Krishnamoorthy. He works as a Senior BTP Consultant at Aarini Consulting, Netherlands.</p>
                            </div>
                        </div>
                    </div>
                </div> */}


                {/* <div className="bg-gray-50 min-h-screen flex items-center justify-start px-16">
                    <div className="relative w-full max-w-screen-xl">
                        <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
                        <div className="absolute top-0 right-20 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
                        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
                        <div className="relative flex flex-row space-y-4">
                            <div className="flex-1 flex flex-row space-x-4 justify-between">
                                <div className="p-5 rounded-lg flex items-center justify-between space-x-16">
                                    <div className="flex-col">
                                        <div className="text-center p-16 mt-10">
                                            <div className="mx-auto p-16 rounded-full relative overflow-hidden mt-4 md:h-[350px] md:w-[350px]">
                                                <Image
                                                    src="https://media.licdn.com/dms/image/C5603AQF1h1pPI0FNaQ/profile-displayphoto-shrink_800_800/0/1636718038591?e=1696464000&v=beta&t=YoLY6tdKKvAKmchvThWpIolT1r0VXI0FmagC4aMyw8Q"
                                                    layout="fill"
                                                    objectFit="cover"
                                                    alt="Profile Picture"
                                                />
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className="flex-2 p-5 flex items-start justify-between space-x-8">
                                <div className="text-center p-4 space-y-6 mt-24">
                                    <h1 className='text-3xl text-cyan-600 font-extrabold overflow-auto'>Arun Krishnamoorthy</h1>
                                    <p className='text-gray-600 text-xl'>This website development was contributed by Arun Krishnamoorthy. He works as a Senior BTP Consultant at Aarini Consulting, Netherlands.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>
            <div className="bg-gradient-to-r from-[#041b30] to-[#001528]">
                <div className="mx-auto max-w-screen-xl">
                    <Footer />
                </div>
            </div>
        </div>
    )
}

export default ContributorsPage;