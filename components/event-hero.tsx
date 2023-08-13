import EventHeader from '@/components/event-header-section'
import FlipClockCountdown from '@leenguyen/react-flip-clock-countdown'
import '@leenguyen/react-flip-clock-countdown/dist/index.css'
import Image from 'next/image'

const EventHero = () => {
  return (
    // <div className="relative">
    // <Image src="/bengaluru_city.png" alt="Background Image" className="absolute inset-0 object-cover w-full h-full opacity-50" />
    // <div className="absolute inset-0 flex items-center justify-center">
    //     <div className="bg-black bg-opacity-50 p-8 rounded-lg">
    //     <EventHeader title="hello" register="" />
    //     <p className="text-white mt-4">Your text goes here.</p>
    //     </div>
    // </div>
    // </div>

    <div>
      <div className="bg-gradient-to-r from-[#ffb805] to-[#e1cf2b]">
        <div className="mx-auto max-w-screen-xl bg-[url('/bengaluru_city.png')]">
          <EventHeader title="hello" register="" />
        </div>
        <div className="absolute inset-0 flex justify-end z-10">
          <FlipClockCountdown className="mb-80"
            to={new Date().getTime() + 24 * 3600 * 1000 + 5000}
          />
        </div>
      </div>
    </div>
  )
}

export default EventHero
