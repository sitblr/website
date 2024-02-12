import { ChevronUpIcon } from '@heroicons/react/solid'
import { Transition } from '@headlessui/react'
import { useEffect, useState } from 'react'
export default function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false)
  
    const scrollHandler = () => {
        console.log("scroll triggered")
        document.documentElement.scrollTop > 300 ? setIsVisible(true) : setIsVisible(false)
    }
  
    useEffect(() => {
        console.log("use effect trigger")
        document.addEventListener('scroll', scrollHandler)
        return () => document.removeEventListener('scroll', scrollHandler)
    }, [])
    return (
        <Transition
            show={isVisible}
            enter="transition-opacity duration-200"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
        >
            <div
                className="fixed bottom-5 right-5 cursor-pointer"
                onClick={() => document.documentElement.scrollTop = 0 }
            >
                <ChevronUpIcon className="w-10 h-10 text-white bg-blue-500 rounded-full" />
            </div>
        </Transition>
    )
}