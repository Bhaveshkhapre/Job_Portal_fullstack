import React, { use } from 'react'
import Navbar from '../pageview/Navbar'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { RadioGroup } from '../ui/radio-group'
import { Button } from '../ui/button'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
import { toast } from 'sonner'
import { User_Api } from "@/api/auth";
import { setLoading } from '@/redux/authSlice'
import { Loader2 } from 'lucide-react'
import { useDispatch, useSelector } from 'react-redux';

export default function () {

    const [input, setInput] = useState({
        fullname: "",
        phoneNumber: "",
        email: "",
        password: "",
        role: "",
        file: ""
    })
    const { loading } = useSelector(store => store.auth);
    const navigation = useNavigate();
    const dispatch = useDispatch();


    const handleChange = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    const changeFileHandler = (e) => {

        setInput({
            ...input, file: e.target.files?.[0]
        })
    }

    const submitHandler = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("fullname", input.fullname);
        formData.append("phoneNumber", input.phoneNumber);
        formData.append("email", input.email);
        formData.append("password", input.password);
        formData.append("role", input.role);

        if (input.file) {
            formData.append("file", input.file);
        }

        try {
            dispatch(setLoading(true));

            const res = await axios.post(
                `${User_Api}/register`,
                formData,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                    withCredentials: true,
                }
            );

            if (res.data.success) {
                navigation("/login");
                toast.success(res.data.message);

            }
        } catch (error) {
            console.log(error);
            toast.error(error.response.data.message);
        } finally {
            dispatch(setLoading(false));
        }
    };


    return (
        <div>
            <Navbar />

            <div className='flex items-center justify-center max-w-7xl mx-auto'>
                <form onSubmit={submitHandler} className='w-1/2 my-10 p-4 border rounded-md shadow-lg'>
                    <h1 className="font-bold text-xl mb-5">Sign Up</h1>
                    <div className='my-2'>
                        <Label className="mb-2">Full Name </Label>
                        <Input type="text" placeholder="Enter your full name " value={input.fullname} name="fullname" onChange={handleChange} />
                    </div>

                    <div className='my-2'>
                        <Label className="mb-2">Email</Label>
                        <Input type="email" placeholder="Enter your email" value={input.email} name="email" onChange={handleChange} />
                    </div>

                    <div className='my-2'>
                        <Label className="mb-2">Phone No</Label>
                        <Input type="text" placeholder="Enter your phone no" value={input.phoneNumber} name="phoneNumber" onChange={handleChange} />
                    </div>

                    <div className='my-2'>
                        <Label className="mb-2">Password</Label>
                        <Input type="password" placeholder="Enter your Password" value={input.password} name="password" onChange={handleChange} />
                    </div>

                    <div className='flex justify-between items-center'>
                        <RadioGroup className="flex items-center gap-4 my-5">
                            <div className="flex items-center space-x-2">
                                <Input type="radio" value="student" name="role" className='cursor-pointer' checked={input.role === 'student'}
                                    onChange={handleChange} />
                                <Label htmlFor="option-one">Student</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Input type="radio" value="recruiter" name="role" className='cursor-pointer' checked={input.role === 'recruiter'}
                                    onChange={handleChange} />
                                <Label htmlFor="option-two">Recruiter</Label>
                            </div>
                        </RadioGroup>
                        <div className='flex items-center gap-2'>
                            <Label> Profile </Label>
                            <Input type="file" accept="image/*" className='cursor-pointer' onChange={changeFileHandler} />
                        </div>
                    </div>

                    {
                        loading ? <Button className="w-full my-4"> <Loader2 className='mr-2 h-4 w-4 animate-spin' /> Please wait </Button> : <Button type="submit" className="w-full my-4">Signup</Button>
                    }
                    <span className='text-sm mx-1'>Already have an account? <Link to="/login" className='text-blue-600'>Login</Link></span>
                </form>

            </div>

        </div>
    )
}
