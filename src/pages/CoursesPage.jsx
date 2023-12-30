import { useEffect, useState } from "react"
import Courses from "../components/Courses"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Loader from "../components/Loader"

function CoursesPage() {
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
      <Courses
        courseTitle={"دوره های آموزشی"}
        btnText={"بیشتر"}
        btnLink={"#"}
      />
      <Footer />
    </>
  )
}

export default CoursesPage
