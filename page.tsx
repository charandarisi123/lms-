'use client'
import React, {FC,useState} from "react";
import Heading from "./utils/Heading";
import Header from "./components/Header";
import Hero from "./components/Route/Hero";
import Courses from "./components/Route/Courses"
// import FAQ from "./components/FAQ/FAQ"
// import config from "@/app/config";
interface Props{}

const Page: FC<Props> = (props) => {
  const[open,setOpen] = useState(false);
  const[activeItem,setActiveItem] = useState(0);
  const [route,setRoute] = useState("Login");

  return (
    <div>
      <Heading
        title="Student Learning Management System"
        description="LMS is a platform for students to learn and get help from teachers"
        keywords="Programing,MERN,Machine Learing,Python"
      />
      <Header
        open={open}
        setOpen={setOpen}
        activeItem={activeItem}
        setRoute = {setRoute}
        route={route}
      />
      <Hero />
      <Courses />
      {/* <FAQ /> */}
    </div>
  );
};

export default Page;