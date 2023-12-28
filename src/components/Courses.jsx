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
    <p className="mx-auto mt-4 text-black font-bold text-3xl lg:text-4xl ">دوره ها</p>
    <div className="my-10 flex flex-wrap justify-center gap-4 px-5">
      {courses.map((course) => (
        <Course key={course.id} {...course} />
      ))}
    </div>
    </>
  )
}

export default Courses
