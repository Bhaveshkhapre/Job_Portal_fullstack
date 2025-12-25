import React, { use } from "react";
import { Popover, PopoverContent, PopoverTrigger, } from "../ui/popover"
import { Avatar, AvatarImage } from "../ui/avatar"
import { Button } from "../ui/button";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { LogOut, User2 } from "lucide-react";
import { toast } from "sonner";
import { User_Api } from '@/api/auth'
import { setUser } from '@/redux/authSlice'
import axios from 'axios'


const Navbar = () => {

    const { user } = useSelector(store => store.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const logoutHandler = async () => {
        try {
            const res = await axios.get(`${User_Api}/logout`, {
                withCredentials: true,
            });

            if (res.data.success) {
                dispatch(setUser(null));
                navigate("/");
                toast.success(res.data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error(error.response?.data?.message || "Logout failed");
        }
    };



    return (
        <div className="bg-white">
            <div className="flex items-center justify-between mx-auto max-w-7xl h-16">
                <div>
                    <Link to="/"><h1 className="text-2xl font-bold">Naukri<span className="text-green-600">Portal</span></h1></Link>
                </div>
                <div className="flex items-center gap-12">
                    <ul className="flex space-x-4 gap-5 items-center cursor-pointer">
                        {
                            user && user.role === 'recruiter' ? (
                                <>
                                    <li><Link to="/admin/companies">Companies</Link></li>
                                    <li><Link to="/admin/jobs">Jobs</Link></li>
                                </>
                            ) : (
                                <>
                                    <li><Link to="/">Home</Link></li>
                                    <li><Link to="/jobs">Jobs</Link></li>
                                    <li><Link to="/browse">Browse</Link></li>
                                </>
                            )
                        }

                    </ul>

                    {
                        !user ? (
                            <div className="flex gap-2 items-center">
                                <Link to="/login"><Button variant="outline" >Login</Button></Link>
                                <Link to="/signup"><Button variant="ghost" className="bg-blue-400 text-white hover:bg-blue-700">Signup</Button></Link>
                            </div>
                        )
                            : (
                                <Popover>
                                    <PopoverTrigger asChild>
                                        <Avatar className="cursor-pointer">
                                            <AvatarImage src={user?.profile?.profilePhoto} />
                                        </Avatar>
                                    </PopoverTrigger>
                                    <PopoverContent className="w-80">
                                        <div className="flex gap-4 space-y-2">
                                            <Avatar className="cursor-pointer">
                                                <AvatarImage src={user?.profile?.profilePhoto} />
                                            </Avatar>
                                            <div>
                                                <h3 className="font-medium"> {user?.fullname} </h3>
                                                <p className="text-sm text-muted-foreground"> {user?.email} </p>
                                            </div>
                                        </div>

                                        <div className='flex flex-col my-2 text-gray-600'>
                                            {
                                                user && user.role === 'student' && (
                                                    <div className='flex w-fit items-center gap-2 cursor-pointer'>
                                                        <User2 />
                                                        <Button variant="link"> <Link to="/profile">View Profile</Link></Button>
                                                    </div>
                                                )
                                            }

                                            <div className='flex w-fit items-center gap-2 cursor-pointer'>
                                                <LogOut />
                                                <Button onClick={logoutHandler} variant="link">Logout</Button>
                                            </div>
                                        </div>
                                    </PopoverContent>
                                </Popover>
                            )
                    }


                </div>
            </div>


        </div>

    )
}

export default Navbar;