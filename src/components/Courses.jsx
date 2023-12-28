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
      index: 1,
      title: "آموزش طراحی وبسایت مقدماتی",
      desc: "مدرس : استاد علیرضا اسلامی زاد",
      bgImage: bgMainWeb,
      logo: webLogos,
      btnColor: "404D85",
    },
    {
      index: 1,
      title: "آموزش #C مقدماتی",
      desc: " مدرس : استاد علیرضا اسلامی زاد",
      bgImage: bgMainCSharp,
      logo: cSharp,
      btnColor: "6558FF",
    },
    {
      index: 1,
      title: "آموزش Python مقدماتی",
      desc: "مدرس : استاد علیرضا اسلامی زاد",
      bgImage: bgMainPython,
      logo: python,
      btnColor: "4C8ABB",
    },
  ]
  return (
    <div className="my-10 flex flex-wrap justify-center gap-4 px-5">
      {courses.map((course) => (
        <Course key={course.index} {...course} />
      ))}
    </div>
  )
}

export default Courses
