import Link from 'next/link';
import Image from "next/image"
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Montserrat } from "next/font/google";

const font = Montserrat({ weight: '600', subsets: ['latin'] });

const LandingNavBar = () => {
  return (
    <nav className="p-4 bg-transparent flex items-center justify-between ">
      <Link href="/" className="flex items-center">
        <div className="relative h-14 w-14 mr-4">
          <Image fill alt="Logo" src="/logo.png" />
        </div>
        <h1 className={cn("text-2xl font-bold text-black", font.className)}>
          SAP Inside Track Bengaluru
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
        <Link href="/">
          <Button className="rounded-full">
            Give your Feedback
          </Button>
        </Link>
      </div>
    </nav>
  )
}

export default LandingNavBar;