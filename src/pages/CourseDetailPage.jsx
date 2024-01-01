import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

import Loader from "../components/Loader"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import CourseDetail from "../components/CourseDetail"

function CourseDetailPage() {
  const [isLoading, setIsLoading] = useState(true)
  const courseId = parseInt(useParams().courseId)

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 1000)
  }, [])

  return (
    <>
      {isLoading ? <Loader /> : <> </>}
      <Navbar />
      <CourseDetail id={courseId} />
      <Footer />
    </>
  )
}

export default CourseDetailPage
