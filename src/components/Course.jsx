import { Link } from "react-router-dom"

import { FaLongArrowAltLeft } from "react-icons/fa"

function Course({ id, title, desc, bgImage, logo, btnColor, price }) {
  return (
    <>
      <div
        className="flex h-[420px] w-full max-w-[350px] flex-col items-center justify-between gap-y-4 rounded-xl px-6 py-10"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "top center",
          backgroundSize: "cover",
        }}
      >
        <img src={logo} className="z-10" alt={`${logo}`} />
        <div className="flex flex-col items-center gap-y-3">
          <span className="font-IRANKharazmi text-xl font-bold text-white">
            {title}
          </span>
          <span className="text-sm  text-white">{desc}</span>
          <span className="text-white">
            هزینه دوره :
            {price === 0 ? (
              <span className="mr-2 font-bold">رایگان !</span>
            ) : (
              <span className="mr-2 font-bold">{price} تومان</span>
            )}
          </span>
        </div>
        <Link
          style={{ backgroundColor: `#${btnColor}` }}
          className="courseBtn mx-auto flex  w-fit flex-row-reverse items-center gap-x-1 rounded-xl px-4 py-2 text-xl font-bold text-white"
          to={`/course/${id}`}
        >
          <FaLongArrowAltLeft /> جزئیات دوره
        </Link>
      </div>
    </>
  )
}

export default Course
