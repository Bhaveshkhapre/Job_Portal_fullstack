import React, { useEffect } from 'react'
import Navbar from './pageview/Navbar'
import HeroSection from './HeroSection'
import CarouselEffect from './CarouselEffect'
import NewJobs from './NewJobs'
import Footer from './pageview/Footer'
import useGetAllJobs from '@/hooks/useGetAllJobs'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

export default function Hom() {
  useGetAllJobs();
  const { user } = useSelector(store => store.auth)
  const navigate = useNavigate()

  useEffect(() => {
    if (user?.role == 'recruiter') {
      navigate("/admin/companies")
    }
  }, [])
  return (
    <div>
      <Navbar />
      <HeroSection />
      <CarouselEffect />
      <NewJobs />
      <Footer />
    </div>
  )
}
