import React, { useState } from 'react'
import Navbar from '../pageview/Navbar'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { RadioGroup } from '../ui/radio-group'
import { Button } from '../ui/button'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'sonner'
import { User_Api } from "@/api/auth";
import { useDispatch } from 'react-redux';
import { setLoading } from '@/redux/authSlice'
import { Loader2 } from 'lucide-react'
import { useSelector } from 'react-redux';
import { setUser } from '@/redux/authSlice'; 

export default function Login() {

    const [input, setInput] = useState({
        email: "",
        password: "",
        role: ""
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

    const submitHandler = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("email", input.email);
        formData.append("password", input.password);
        formData.append("role", input.role);

        try {
            dispatch(setLoading(true));
            const res = await axios.post(
                `${User_Api}/login`,
                formData,
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                    withCredentials: true,
                }
            );

            if (res.data.success) {
                dispatch(setUser(res.data.user));
                navigation("/");
                toast.success(res.data.message);

            }
        } catch (error) {
            console.log(error);
        } finally {
            dispatch(setLoading(false));
        }
    };

    return (
        <div>


            <Navbar />

            <div className='flex items-center justify-center max-w-7xl mx-auto'>
                <form onSubmit={submitHandler} className='w-1/2 my-10 p-4 border rounded-md shadow-lg'>
                    <h1 className="font-bold text-xl mb-5">Log In</h1>

                    <div className='my-2'>
                        <Label className="mb-2">Email</Label>
                        <Input type="email" placeholder="Enter your email" value={input.email} name="email" onChange={handleChange} />
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

                    </div>
                    {
                        loading ? <Button className="w-full my-4"> <Loader2 className='mr-2 h-4 w-4 animate-spin' /> Please wait </Button> : <Button type="submit" className="w-full my-4">Login</Button>
                    }
                    <span className='text-sm mx-1'>Already have an account? <Link to="/signup" className='text-blue-600'>Signup</Link></span>
                </form>

            </div>



        </div>
    )
}


