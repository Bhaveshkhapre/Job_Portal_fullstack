import React from 'react'
import Navbar from '../pageview/Navbar'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { ArrowLeft } from 'lucide-react'
import { Label } from '../ui/label'
import { useNavigate } from 'react-router-dom'

export default function CompanySetup() {

        const navigate = useNavigate();

    return (
        <div>
            <Navbar />
            <div className='max-w-xl mx-auto my-10'>
                <form>
                    <div className='flex items-center gap-5 p-8'>
                        <Button onClick={() => navigate("/admin/companies")} variant="outline" className="flex items-center gap-2 text-gray-500 font-semibold">
                            <ArrowLeft />
                            <span>Back</span>
                        </Button>
                        <h1 className='font-bold text-xl'>Company Setup</h1>
                    </div>
                    <div className='grid grid-cols-2 gap-4'>
                        <div>
                            <Label>Company Name</Label>
                            <Input
                                type="text"
                                name="name"

                            />
                        </div>
                        <div>
                            <Label>Description</Label>
                            <Input
                                type="text"
                                name="description"

                            />
                        </div>
                        <div>
                            <Label>Website</Label>
                            <Input
                                type="text"
                                name="website"

                            />
                        </div>
                        <div>
                            <Label>Location</Label>
                            <Input
                                type="text"
                                name="location"

                            />
                        </div>
                        <div>
                            <Label>Logo</Label>
                            <Input
                                type="file"
                                accept="image/*"
                                className="w-full"
                            />
                        </div>
                    </div>

                    <Button type="submit" className="w-full my-4">Update</Button>

                </form>

            </div>
        </div>
    )
}
