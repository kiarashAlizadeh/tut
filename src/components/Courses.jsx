import Course from "./Course"
import { cSharp, bgMainCSharp, python, bgMainPython } from "../assets"

function Courses() {
  const courses = [
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
      btnColor: "6558FF",
    },
    {
      index: 1,
      title: "آموزش طراحی وبسایت مقدماتی",
      desc: "مدرس : استاد علیرضا اسلامی زاد",
      bgImage: bgMainCSharp,
      logo: cSharp,
      btnColor: "6558FF",
    },
  ]
  return (
    <div className="my-10 flex flex-wrap gap-4 px-5 justify-center">
      {courses.map((course) => (
        <Course key={course.index} {...course} />
      ))}
    </div>
  )
}

export default Courses
