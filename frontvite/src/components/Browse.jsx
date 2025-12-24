import React from 'react'
import Navbar from './pageview/Navbar'
import JobCards from './JobCards'
import useGetAllJobs from '@/hooks/useGetAllJobs';
import {  useSelector } from 'react-redux';

export default function Browse() {

  // const jobs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  useGetAllJobs();
    const {allJobs} = useSelector(store=>store.job);

  return (
    <div>
      <Navbar />

      <div className='max-w-7xl mx-auto my-10'>
        <h1 className='text-xl font-bold my-5'>
          Search results ({allJobs.length})
        </h1>

        <div className='grid grid-cols-3 gap-4'>
          {allJobs.map((job) => (
            <JobCards key={job._id} job={job} />
          ))}
        </div>
      </div>
    </div>
  )
}
