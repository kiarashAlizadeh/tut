import { useState, useEffect } from "react"

import LoaderComponent from "../components/LoaderComponent"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Header from "../components/Header"
import Courses from "../components/Courses"

function Home() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 1500)
  }, [])

  return (
    <>
      {isLoading ? <LoaderComponent /> : <> </>}
      <div className="flex h-screen flex-col justify-between">
        <Navbar />
        <Header />
        <Courses
          courseTitle={"جدیدترین دوره ها"}
          btnText={"مشاهده تمامی دوره ها"}
          btnLink={"/courses"}
        />
        <Footer />
      </div>
    </>
  )
}

export default Home
