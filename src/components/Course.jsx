import { Link } from "react-router-dom"

function Course({ id, title, desc, bgImage, logo, btnColor }) {
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
          <span className="text-xl font-bold text-white">{title}</span>
          <span className="text-sm  text-white">{desc}</span>
        </div>
        <Link
          className="mx-auto w-fit rounded-xl  px-4 py-2 text-xl font-bold text-white"
          to={`/course/${id}`}
          style={{ backgroundColor: `#${btnColor}` }}
        >
          جزئیات دوره
        </Link>
      </div>
    </>
  )
}

export default Course
