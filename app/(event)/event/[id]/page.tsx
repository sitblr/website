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

type track = {
  id: string
  trackName: string
  active: boolean
}

type eventdata = {
  id: string
  title: string
  register: string
  tracks: track[]
}

type event = eventdata | null

const EventPage = () => {

  return (
    // ffe505
<div className="h-full"></div>
  )
}

export default EventPage
