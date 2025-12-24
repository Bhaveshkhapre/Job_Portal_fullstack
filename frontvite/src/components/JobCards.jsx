import React from 'react'
import { Button } from './ui/button'
import { Bookmark } from 'lucide-react'
import { Avatar, AvatarImage } from './ui/avatar'
import { Badge } from './ui/badge'
import { useNavigate } from 'react-router-dom'

export default function JobCards({job}) {

    const navigation = useNavigate();

    const dayAgoCount = (mongodbTime) =>{
        const createdAt = new Date(mongodbTime);
        const currentTime =  new Date();
        const timeDiff = currentTime- createdAt;
        return Math.floor(timeDiff/(1000*24*60*60))
    }

    return (
        <div className='p-5 rounded-md border border-gray-200 shadow-md hover:shadow-lime-50 transition-shadow duration-300 bg-white mt-5'>
            <div className='flex justify-between items-center'>
                <p> {dayAgoCount(job?.createdAt) == 0 ? "Today" : `${dayAgoCount (job?.createdAt)} day ago`} </p>
                <Button variant="destructive" className="rounded-full" size='icon'> <Bookmark /></Button>
            </div>

            <div className='flex items-center gap-2 my-2'>
                <Button>
                    <Avatar>
                        <AvatarImage src="https://icons8.com/icon/LFiG3hXtoOyH/huawei-logo" />
                    </Avatar>
                </Button>
                <div>
                    <h1 className='font-bold text-lg'> {job?.company?.name}</h1>
                    <p className='text-sm text-gray-500'> {job?.location} </p>
                </div>
            </div>
            <div>
                <h1 className='font-bold text-lg my-2'> {job?.title} </h1>
                <p className='text-sm text-gray-600'> {job?.description} </p>
            </div>

            <div className='flex items-center gap-2 mt-4'>
                <Badge className={'text-blue-700 font-bold'} variant="ghost"> {job?.position} Positions</Badge>
                <Badge className={'text-[#F83002] font-bold'} variant="ghost"> {job?.jobType}</Badge>
                <Badge className={'text-[#7209b7] font-bold'} variant="ghost">{job?.salary} LPA</Badge>
            </div>
            <div className=' flex items-center gap-4 mt-4'>
                <Button variant="outline" onClick={() => navigation(`/jobdescription/${job?._id}`)}> Details </Button>
                <Button > Save </Button>
            </div>
 
        </div>
    )
}
