import { useState, useEffect } from "react"

import LoaderComponent from "../components/LoaderComponent"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { notFound } from "../assets"

function NotFound() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 1000)
  }, [])
  return (
    <>
      {isLoading ? (
        <LoaderComponent />
      ) : (
        <>
          <Navbar />
          <div className="mx-auto mt-5 flex max-h-dvh max-w-[800px] select-none flex-col items-center px-1 sm:h-auto">
            <h1 className="mb-1 text-2xl font-bold text-[#095373] md:text-3xl">
              !Error
            </h1>

            <img
              src={notFound}
              alt="notFound"
              className="select-none md:max-h-[500px]"
              draggable="false"
            />
            <div className="mb-5 text-lg font-semibold text-[#095373] md:text-xl">
              صفحه مورد نظر شما پیدا نشد!
            </div>
            <button
              className="rounded-lg bg-[#0062d1] px-4 py-2 font-semibold text-white hover:bg-opacity-70 md:text-xl"
              onClick={() => (window.location.href = "/")}
            >
              بازگشت به صفحه اصلی
            </button>
          </div>
          <Footer />
        </>
      )}
    </>
  )
}

export default NotFound
