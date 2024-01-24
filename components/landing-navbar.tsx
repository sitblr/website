import Link from 'next/link';
import Image from "next/image"
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Montserrat } from "next/font/google";

const font = Montserrat({ weight: '600', subsets: ['latin'] });

const LandingNavBar = () => {
  return (
    <nav className="p-4 bg-transparent flex items-center justify-between flex-wrap">
      <Link href="/" className="flex items-center">
        <div className="relative h-9 w-9 mr-4 sm:h-14 sm:w-14">
          <Image fill alt="Logo" src="/logo.png" />
        </div>
        <h1 className={cn("text-2xl font-bold text-black", font.className)}>
          SAP Community Bengaluru
        </h1>
      </Link>
      <div className="flex items-center gap-x-2">
        {/* <Link href="/">
          <Button  className="rounded-full">
            Past Events
          </Button>
        </Link>
        <Link href="/">
          <Button  className="rounded-full">
            Organizers
          </Button>
        </Link> */}
        {/* <a target="_blank" href="https://forms.gle/fvbPFrWD8XYSt3Qy9" rel="noopener noreferrer">
          <Button className="bg-blue-700 px-4 md:text-lg p-4 md:p-6 rounded-full font-semibold  text-white hover:bg-gray-500 hover:text-white">
            Event Feedback
          </Button>
        </a> */}
      </div>
    </nav>
  )
}

export default LandingNavBar;