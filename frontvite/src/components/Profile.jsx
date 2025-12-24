import React from 'react'
import Navbar from './pageview/Navbar'
import { AvatarImage, Avatar } from './ui/avatar'
import { Button } from './ui/button'
import { Contact, Mail, PenLine } from 'lucide-react'
import { Badge } from './ui/badge'
import { Label } from './ui/label'
import AppliedJobTable from './AppliedJobTable'
import { useState } from 'react'
import UpdateProfileJobModal from './UpdateProfileJobModal'
import { useSelector } from 'react-redux'

export default function Profile() {

    // const skills = ["JavaScript", "React", "Node.js", "CSS", "HTML"];
    const isResume = true;
    const [open, setOpen] = useState(false);

    const { user } = useSelector(store => store.auth)

    return (
        <div>
            <Navbar />
            <div className='max-w-4xl mx-auto bg-white border border-gray-200 rounded-2xl my-5  p-8 '>
                <div className='flex justify-between'>

                    <div className='flex items-center gap-4'>
                        <Avatar className='w-24 h-24'>
                            <AvatarImage src="https://icons8.com/icon/LFiG3hXtoOyH/huawei-logo" />
                        </Avatar>

                        <div>
                            <h1 className='text-2xl font-medium'> {user?.fullname} </h1>
                            <p className='text-gray-600'>Software Engineer</p>
                            <p className='mt-2 text-gray-800'>{user?.profile?.bio}</p>
                        </div>
                        <Button onClick={() => setOpen(true)} className="text-right" variant='outline'><PenLine /></Button>
                    </div>

                </div>

                <div className='my-5'>
                    <div className='flex items-center gap-3 my-2'>
                        <Mail />
                        <p className='text-gray-600'> {user?.email}  </p>
                    </div>
                    <div className='flex items-center gap-3 my-2'>
                        <Contact />
                        <p className='text-gray-600'>  {user?.phoneNumber} </p>
                    </div>
                </div>

                <div className='my-5'>
                    <h1>Skills</h1>
                    <div className='flex items-center gap-1'>
                        {user?.profile?.skills?.length > 0 ? (
                            user.profile.skills.map((skill, i) => (
                                <Badge key={i}>{skill}</Badge>
                            ))
                        ) : (
                            <span className="text-gray-500">No skills added</span>
                        )}
                    </div>

                </div>

                <div className='grid w-full  max-w-sm items-center gap-3'>
                    <Label className="text-md font-bold">Resume</Label>
                   {
                        isResume ? <a target='blank' href={user?.profile?.resume} className='text-blue-500 w-full hover:underline cursor-pointer'>{user?.profile?.resumeOriginalName }</a> : <span>NA</span>
                    }
                </div>
            </div>

            <div className='max-w-4xl mx-auto bg-white rounded-2xl'>
                <h1 className='font-bold text-lg my-5'>Applied Jobs</h1>
                <AppliedJobTable />
            </div>

            <UpdateProfileJobModal open={open} setOpen={setOpen} />

        </div>
    )
}
