import courses from "../db"

import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

import Loader from "../components/Loader"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import CourseDetail from "../components/CourseDetail"

function CourseDetailPage() {
  const courseId = useParams().courseId

  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 1000)
  }, [])

  return (
    <>
      {isLoading ? <Loader /> : <> </>}
      <Navbar />
      <CourseDetail {...courses[courseId - 1]} />
      <Footer />
    </>
  )
}

export default CourseDetailPage
