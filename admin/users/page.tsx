'use client'
import DashboardHero from '@/app/components/Admin/DashboardHero'
import AdminSidebar from '@/app/components/Admin/sidebar/AdminSidebar'
import AdminProtected from '@/app/hooks/adminProtected'
import Heading from '@/app/utils/Heading'
import React from 'react'
import config from "@/app/config";
import AllUsers from "../../components/Admin/Users/AllUsers"
type Props={}
const page = (props: Props) => {
    return (
      <div>
          <AdminProtected>
          <Heading
          title="Elearning - Admin"
          description="ELearning is a platform for students to learn and get help from teachers" 
          keywords="Prograaming, MERN, Redux, Machine Learning"
          />
          <div className="flex h-screen">
              <div className='1500px:w-[16%] w-1/5'>
                  <AdminSidebar/>
              </div>
              <div className='w-[85%]'>
                  <DashboardHero />
                  <AllUsers isTeam={false} />
              </div>
          </div>
          </AdminProtected>
      </div>
    )
  }

export default page