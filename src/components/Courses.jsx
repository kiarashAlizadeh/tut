import Course from "./Course"
import {
  cSharp,
  bgMainCSharp,
  python,
  bgMainPython,
  webLogos,
  bgMainWeb,
} from "../assets"

function Courses() {
  const courses = [
    {
      id: 1,
      title: "آموزش طراحی وب مقدماتی",
      desc: "مدرس : استاد علیرضا اسلامی زاد",
      bgImage: bgMainWeb,
      logo: webLogos,
      btnColor: "404D85",
    },
    {
      id: 2,
      title: "آموزش #C مقدماتی",
      desc: " مدرس : استاد علیرضا اسلامی زاد",
      bgImage: bgMainCSharp,
      logo: cSharp,
      btnColor: "6558FF",
    },
    {
      id: 3,
      title: "آموزش Python مقدماتی",
      desc: "مدرس : استاد علیرضا اسلامی زاد",
      bgImage: bgMainPython,
      logo: python,
      btnColor: "4C8ABB",
    },
  ]
  return (
    <>
      <span className="mx-auto mb-5 mt-10 text-3xl font-bold text-black lg:mt-20 lg:text-4xl ">
        دوره ها
      </span>
      <div className="mb-10 flex flex-wrap justify-center gap-4 px-5">
        {courses.map((course) => (
          <Course key={course.id} {...course} />
        ))}
      </div>
    </>
  )
}

export default Courses
