import { Link, useParams } from "react-router-dom"
import '@fortawesome/fontawesome-free/css/all.min.css'
import './App.css'
import './App.css'
import { useReducer } from "react"
export default function Lesson({ courses,dispatch,completedlessons }) {
   
    let { courseid, lessonid } = useParams()
    let selectedcourse = courses.find(
        (course) => course.id == Number(courseid)
    )
    let selectedlesson = selectedcourse.lessons.find(
        (item) => item.id == Number(lessonid)
    )
    let isCompleted = completedlessons.includes(selectedlesson.id)
    let totalLessons = selectedcourse.lessons.length

    let completedCount = completedlessons.length

    let progress = (completedCount / totalLessons) * 100
    return (
        <div>
            <h1>{selectedcourse.title}</h1>
            <h4>{selectedlesson.title}</h4>
            <p>lesson{selectedlesson.id}</p>
            <div className="progresscontainer">
                <h3>Course progress</h3>

                <p>
                    {completedCount} of {totalLessons} lessons completed
                </p>

                <div className="progressbar">
                    <div
                        className="progressfill"
                        style={{ width: `${progress}%` }}
                    ></div>
                </div>
                

                <h4>{progress.toFixed(1)}%</h4>
                   <button className="markbtn"
                onClick={() => dispatch({
                    type: isCompleted ? 'undo-lesson' : 'complete-lesson',
                    payload: selectedlesson.id
                })}
            >
                {isCompleted ? 'Undo completion' : 'Mark as completed'}
            </button>
            </div>
            
            <div>
                <video className="lessonvideo" src="#" controls>
                </video>

            </div>
         
            <Link className='backhomebtn' to='/'>back to home</Link>
        </div>
    )
}

