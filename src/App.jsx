

import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './Home'
import Courses from './Courses'
import Detailscourse from './detailscourse'
import Mylearningpage from './mylearningpage'
import { useEffect, useReducer, useState } from 'react'
import Lesson from './lesson'

export default function App() {
    const courses = [
        {
            id: 1,
            title: "React Fundamentals",
            image: "/images/react.webp",
            instructor: "John Smith",
            category: "Programming",
            price: 49,
            duration: "8 hours",
            lessons: [
                { id: 1, title: "Introduction to React" },
                { id: 2, title: "Understanding Components" },
                { id: 3, title: "Props and State" },
                { id: 4, title: "Handling Events" },
                { id: 5, title: "Working with Lists and Forms" }
            ]
        },
        {
            id: 2,
            title: "JavaScript for Beginners",
            image: "/images/javascript.jpg",
            instructor: "Sarah Johnson",
            category: "Programming",
            price: 39,
            duration: "6 hours",
            lessons: [
                { id: 1, title: "Introduction to JavaScript" },
                { id: 2, title: "Variables and Data Types" },
                { id: 3, title: "Functions and Events" },
                { id: 4, title: "Arrays and Objects" },
                { id: 5, title: "Array Methods: Map, Filter and Find" }
            ]

        },
        {
            id: 3,
            title: "UI/UX Design Masterclass",
            image: "/images/ui-ux.jpg",
            instructor: "Michael Brown",
            category: "Design",
            price: 59,
            duration: "10 hours",
            lessons: [
                { id: 1, title: "Introduction to UI and UX" },
                { id: 2, title: "Understanding User Research" },
                { id: 3, title: "Wireframing and Prototyping" },
                { id: 4, title: "Color Theory and Typography" },
                { id: 5, title: "Designing User Interfaces" }
            ]
        },
        {
            id: 4,
            title: "HTML and CSS Complete Course",
            image: "/images/html-css.jpg",
            instructor: "Emma Wilson",
            category: "Programming",
            price: 29,
            duration: "5 hours",
            lessons: [
                { id: 1, title: "HTML Document Structure" },
                { id: 2, title: "HTML Elements and Forms" },
                { id: 3, title: "CSS Selectors and Properties" },
                { id: 4, title: "Flexbox and CSS Grid" },
                { id: 5, title: "Responsive Web Design" }
            ]
        },
        {
            id: 5,
            title: "Python Programming",
            image: "/images/python.png",
            instructor: "David Miller",
            category: "Programming",
            price: 45,
            duration: "9 hours",
            lessons: [
                { id: 1, title: "Introduction to Python" },
                { id: 2, title: "Variables and Data Types" },
                { id: 3, title: "Conditions and Loops" },
                { id: 4, title: "Functions and Modules" },
                { id: 5, title: "Lists, Tuples and Dictionaries" }
            ]
        },
        {
            id: 6,
            title: "Digital Marketing",
            image: "/images/digital-marketing.png",
            instructor: "Olivia Davis",
            category: "Marketing",
            price: 35,
            duration: "7 hours",
            lessons: [
                { id: 1, title: "Introduction to Digital Marketing" },
                { id: 2, title: "Search Engine Optimization (SEO)" },
                { id: 3, title: "Social Media Marketing" },
                { id: 4, title: "Email Marketing" },
                { id: 5, title: "Digital Marketing Analytics" }
            ]
        },
        {
            id: 7,
            title: "Graphic Design with Photoshop",
            image: "/images/photoshop.jpg",
            instructor: "James Taylor",
            category: "Design",
            price: 55,
            duration: "12 hours",
            lessons: [
                { id: 1, title: "Getting Started with Photoshop" },
                { id: 2, title: "Working with Layers" },
                { id: 3, title: "Selection Tools and Masks" },
                { id: 4, title: "Image Editing and Retouching" },
                { id: 5, title: "Creating a Graphic Design Project" }
            ]
        },
        {
            id: 8,
            title: "TypeScript for React Developers",
            image: "/images/typescript.png",
            instructor: "Sophia Anderson",
            category: "Programming",
            price: 50,
            duration: "8 hours",
            lessons: [
                { id: 1, title: "Introduction to TypeScript" },
                { id: 2, title: "Basic Types and Type Annotations" },
                { id: 3, title: "Interfaces and Type Aliases" },
                { id: 4, title: "Typing React Props and State" },
                { id: 5, title: "Working with Events and Hooks" }
            ]
        }
    ]
    function reducer(state, action) {
        switch (action.type) {
            case 'complete-lesson':
                if (state.includes(action.payload)) {
                    return state
                }
                return [...state, action.payload]
            case 'undo-lesson':
                return state.filter(
                    (id) => id !== action.payload
                )

            default:
                return state
        }

    }
    let initialState = []
    let [completedlessons, dispatch] = useReducer(reducer, initialState)


    let [enrolist, setEnrolist] = useState(
        () => {
            let saved = localStorage.getItem('enrollist')
            return saved ? JSON.parse(saved) : []

        }
    )
    function enrollcourse(id) {
        let selected = courses.find(
            (course) => course.id === id

        )
        let existing = enrolist.find(
            (course) => course.id === selected.id
        )
        if (existing) {
            return
        }
        else {
            let newarray = [...enrolist, selected]
            setEnrolist(newarray)
        }

    }
    function isenrolled(id) {
        return enrolist.some(
            (course) => course.id == id
        )
    }
    useEffect(() => {
        localStorage.setItem('enrollist', JSON.stringify(enrolist))
    }, [enrolist])
    return (
        <div>

            <Router>
                <Routes>
                    <Route path='/' element={<Home isenrolled={isenrolled} courses={courses} enrollcourse={enrollcourse} />} />
                    <Route path='/courses' element={<Courses />} />
                    <Route path='/courses/details/:id' element={<Detailscourse courses={courses} />} />
                    <Route path='/enrollist' element={<Mylearningpage courses={courses} enrolist={enrolist} setEnrolist={setEnrolist} />} />
                    <Route path='/courses/:courseid/lessons/:lessonid/' element={<Lesson completedlessons={completedlessons} dispatch={dispatch} courses={courses} />} />
                </Routes>
            </Router>

        </div>
    )
}


