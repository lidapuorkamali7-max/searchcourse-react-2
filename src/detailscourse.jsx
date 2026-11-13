import { Link, useParams } from "react-router-dom"
import './App.css'
import '@fortawesome/fontawesome-free/css/all.min.css'

export default function Detailscourse({ courses }) {

    let { id } = useParams()
    let selectedcourse = courses.find(
        (course) => course.id === Number(id)
    )
    return (
        <div>
            <h1>details of the course</h1>
            <hr />
            <div className="coursedetail">
                <div>
                    <img className="detailimg" src={selectedcourse.image} alt="picture" />
                    <h4>{selectedcourse.title}</h4>
                    <Link className="backhomebtn"  to='/'>back to home</Link>

                </div>
                <div>
                    <ol>
                        {selectedcourse.lessons.map(
                            (item) => <div className="lessonitem">
                                <li key={item.id}>
                                 <Link to={`/courses/${id}/lessons/${item.id}`}>
                                 {item.title}
                                 </Link>

                                </li>
                                <Link to={`/courses/${id}/lessons/${item.id}`}>
                                <i className="fa-solid fa-play"></i></Link>
                            </div>

                        )}
                    </ol>

                </div>
            </div>

        </div>
    )
}