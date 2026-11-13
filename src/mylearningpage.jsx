
import { Link } from 'react-router-dom'
import './App.css'
export default function Mylearningpage({enrolist,setEnrolist}){


    function deletecourse(id){
        let deleted=enrolist.filter(
            (course)=> course.id!==id
        )
        setEnrolist(deleted)
    }
     
    return(
        <div>
            <h1>enrolled courses</h1>
            <hr />
          <div className='enrollist'>
              {enrolist.map(
                (course)=>
                    <div className='enrolitem'>
                        <img  className='enrolimg'  src={course.image} alt="" />
                    <h4>{course.title}</h4>
                    <h4>{course.category}</h4>
                    <p>{course.instructor}</p>
                    <p>price:${course.price}</p>
                    <p>{course.duration}</p>
                    <button  className='deletebtn' onClick={()=>deletecourse(course.id)}   >delete</button>
                    </div>
            )}
          </div>
          <Link   className='backhomebtn' to='/'>back to home</Link>
        </div>
    )
}