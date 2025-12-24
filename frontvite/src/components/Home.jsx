import React from 'react'
import Navbar from './pageview/Navbar'
import HeroSection from './HeroSection'
import CarouselEffect from './CarouselEffect'
import NewJobs from './NewJobs'
import Footer from './pageview/Footer'
import useGetAllJobs from '@/hooks/useGetAllJobs'

export default function Hom() {
  useGetAllJobs();
  return (
    <div>
      <Navbar/>
      <HeroSection/>
       <CarouselEffect/>
      <NewJobs/>
      <Footer/> 
    </div>
  )
}
