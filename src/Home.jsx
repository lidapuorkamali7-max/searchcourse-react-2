import Courses from "./Courses"
import './App.css'
import { useState } from "react"
import { Link } from "react-router-dom"
export default function Home({courses,enrollcourse,isenrolled}){
  
  
    return(
        
      <div>
        <h1 className="courses-title">courses list</h1>
        <hr />
        <Link to='/enrollist' className="mylearning-title">my learning page</Link>
          <div  className="courseslist">
            
            {courses.map(
                (course)=>
                    <Courses    key={course.id}    title={course.title} image={course.image}
                  instructor={course.instructor} category={course.category}
                  price={course.price} duration={course.duration}  id={course.id} 
                   enrollcourse={enrollcourse} isenrolled={isenrolled}
                />
            )}

        </div>
      </div>
    )
}