'use client'
import CourseDetailsPage from "../../../components/Course/CourseDetailsPage"
import React from "react";
import config from "@/app/config";
const Page = ({params}:any) => {
    return (
        <div>
            Course
            <CourseDetailsPage id={params.id} />
        </div>
    )
}

export default Page;