import { Link } from 'react-router-dom'
import './App.css'

export default function Courses(props) {
    return (
        <div className='courseitem' >
            <img
                className='courseimg'
                src={props.image}
                alt={props.title}
                loading="lazy"
                decoding="async"
            />
            <Link to={`/courses/details/${props.id}`}>{props.title}</Link>
            <p>teacher:{props.instructor}</p>
            <p>category:{props.category}</p>
            <p>price:${props.price}</p>
            <p>duration:{props.duration}</p>
            <button className='enrollbtn' onClick={() => props.enrollcourse(props.id)}
                disabled={props.isenrolled(props.id)}
            >

                {props.isenrolled(props.id) ? 'enrolled' : 'enroll'}
            </button>


        </div>
    )
}