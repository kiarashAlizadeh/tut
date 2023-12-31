import Course from "./Course"
import {
  cSharp,
  bgMainCSharp,
  python,
  bgMainPython,
  webLogos,
  bgMainWeb,
} from "../assets"

function Courses({ courseTitle, btnText, btnLink }) {
  const courses = [
    {
      id: 1,
      title: "آموزش طراحی وب مقدماتی",
      desc: "مدرس : استاد علیرضا اسلامی زاد",
      bgImage: bgMainWeb,
      logo: webLogos,
      btnColor: "404D85",
      price: 0,
    },
    {
      id: 2,
      title: "آموزش C# مقدماتی",
      desc: " مدرس : استاد علیرضا اسلامی زاد",
      bgImage: bgMainCSharp,
      logo: cSharp,
      btnColor: "6558FF",
      price: 0,
    },
    {
      id: 3,
      title: "آموزش Python مقدماتی",
      desc: "مدرس : استاد علیرضا اسلامی زاد",
      bgImage: bgMainPython,
      logo: python,
      btnColor: "4C8ABB",
      price: "100,000",
    },
  ]
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
