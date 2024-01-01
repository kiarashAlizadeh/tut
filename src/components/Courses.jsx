import courses from "../db"
import Course from "./Course"

function Courses({ courseTitle, btnText, btnLink }) {
  return (
    <>
      <h1 className="mx-auto mb-5 mt-10 w-fit font-IRANKharazmi text-3xl font-bold text-black lg:text-4xl">
        {courseTitle}
      </h1>
      <div className="mb-10 flex flex-wrap justify-center gap-4 px-5">
        {courses.map((course) => (
          <Course key={course.id} {...course} />
        ))}
      </div>
      <button
        className="mx-auto flex w-fit items-center gap-x-2 rounded-lg bg-[#1f6182] px-4 py-2 font-semibold text-white hover:bg-opacity-70 md:text-xl"
        onClick={() => (window.location.href = btnLink)}
      >
        {btnText}
      </button>
    </>
  )
}

export default Courses
