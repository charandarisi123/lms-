/* eslint-disable react-hooks/rules-of-hooks */



'use client'
import React, { FC, useState } from 'react'
import Protected from '../hooks/useProtected'
import Heading from '../utils/Heading'
import Header from '../components/Header'
import Profile from "../components/Profile/Profile"
import {useSelector} from 'react-redux'
//import config from "@/app/config";
type Props = {}

const page: FC<Props> = (props) => {
    const [open, setOpen] = useState(false);
    const [activeItem, setActiveItem] = useState(0);
    const [route, setRoute] = useState("Login");
    const {user} = useSelector((state:any) => state.auth);
    return (
        <div>
            <Protected>
                <Heading
                    title={`${user?.name} profile - LMS`}
                    description="LMS is a platform for students to learn and get help from teachers"
                    keywords="Programing,MERN,Machine Learing,Python"
                />
                <Header
                    open={open}
                    setOpen={setOpen}
                    activeItem={activeItem}
                    setRoute={setRoute}
                    route={route}
                />
                <Profile
                    user={user}
                />
            </Protected>
        </div>
    )
}
export default page