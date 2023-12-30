import { MdOutlineEdit } from "react-icons/md"
import { IoTime } from "react-icons/io5"
import { LiaChalkboardTeacherSolid } from "react-icons/lia"
import { FaDollarSign } from "react-icons/fa"
import { RiFunctionLine } from "react-icons/ri"
import { FaPlaceOfWorship } from "react-icons/fa"
import { BsCalendarDateFill } from "react-icons/bs"
import { PiStudentFill } from "react-icons/pi"

function CoursePageCom({
  image,
  title,
  desc,
  courseDetailsTitle,
  courseDetails,
  prerequisite,
  courseTime,
  teacher,
  online,
  place,
  date,
  link,
  price,
  enabled,
}) {
  return (
    <>
      <div className="flex flex-col items-center xl:mb-10">
        <img src={image} alt={title} className="xl:hidden" draggable="false" />
        <div className="gap-x-10 xl:flex">
          <div className="flex flex-col items-center">
            <div class="mx-auto mt-10 hidden w-fit select-none rounded-xl border-2 border-black px-4 py-4 text-xl xl:block">
              <h3 className="mb-4 text-center font-IRANKharazmi text-3xl font-black">
                جزئیات دوره
              </h3>
              <div className="flex flex-col gap-y-2">
                <span className="flex gap-x-2">
                  <b className="flex items-center gap-x-1">
                    <MdOutlineEdit />
                    پیش نیاز :
                  </b>
                  <span>{prerequisite}</span>
                </span>
                <span className="flex gap-x-2">
                  <b className="flex items-center gap-x-1">
                    <IoTime />
                    مدت زمان دوره :
                  </b>
                  <span>{courseTime} ساعت</span>
                </span>
                <span className="flex gap-x-2">
                  <b className="flex items-center gap-x-1">
                    <LiaChalkboardTeacherSolid />
                    مدرس دوره :
                  </b>
                  <span>{teacher}</span>
                </span>
                <span className="flex gap-x-2">
                  <b className="flex items-center gap-x-1">
                    <RiFunctionLine />
                    شیوه برگزاری دوره :
                  </b>
                  <span>{online}</span>
                </span>
                <span className="flex gap-x-2">
                  <b className="flex items-center gap-x-1">
                    <FaPlaceOfWorship />
                    محل برگزاری دوره :
                  </b>
                  <span>{place}</span>
                </span>
                <span className="flex gap-x-2">
                  <b className="flex items-center gap-x-1">
                    <BsCalendarDateFill />
                    تاریخ شروع دوره :
                  </b>
                  <span>{date}</span>
                </span>
                <span className="flex gap-x-2">
                  <b className="flex items-center gap-x-1">
                    <FaDollarSign />
                    هزینه دوره :
                  </b>
                  {price === 0 ? (
                    <span className="font-bold text-red-700">رایگان!</span>
                  ) : (
                    <span className="font-bold text-[#14749e]">
                      {price} تومان
                    </span>
                  )}
                </span>
              </div>
            </div>

            {enabled ? (
              <button
                className="my-10 hidden w-fit select-none items-center gap-x-1 rounded-lg bg-[#14749e] px-4 py-2 text-center text-xl text-white hover:bg-opacity-70 xl:flex"
                onClick={() => {
                  window.location.href = link
                }}
              >
                <PiStudentFill />
                ثبت نام در دوره
              </button>
            ) : (
              <button
                className="my-10 hidden w-fit select-none items-center gap-x-1 rounded-lg bg-slate-300 px-4 py-2 text-center text-xl text-gray-600 xl:flex"
                disabled="true"
              >
                <PiStudentFill />
                پایان ثبت نام
              </button>
            )}
          </div>
          <div className="mt-5 flex flex-col flex-wrap items-center gap-y-5 px-5">
            <img
              src={image}
              alt={title}
              className="hidden xl:block xl:max-h-[450px] xl:max-w-[800px] xl:rounded-xl"
              draggable="false"
            />
            <div className="max-w-[800px]">
              <h1 className="mb-3 font-IRANKharazmi text-2xl font-black">
                {title}
              </h1>
              <p
                className="text-justify"
                dir="rtl"
                style={{ whiteSpace: "pre-wrap" }}
              >
                {desc}
              </p>
            </div>
            <div class="mx-auto mt-10 w-fit select-none rounded-xl border-2 border-black px-4 py-4 xl:hidden">
              <h3 className="mb-4 text-center font-IRANKharazmi text-2xl font-black">
                جزئیات دوره
              </h3>
              <div className="flex flex-col gap-y-2">
                <span className="flex gap-x-2">
                  <b className="flex items-center gap-x-1">
                    <MdOutlineEdit />
                    پیش نیاز :
                  </b>
                  <span>{prerequisite}</span>
                </span>
                <span className="flex gap-x-2">
                  <b className="flex items-center gap-x-1">
                    <IoTime />
                    مدت زمان دوره :
                  </b>
                  <span>{courseTime} ساعت</span>
                </span>
                <span className="flex gap-x-2">
                  <b className="flex items-center gap-x-1">
                    <LiaChalkboardTeacherSolid />
                    مدرس دوره :
                  </b>
                  <span>{teacher}</span>
                </span>
                <span className="flex gap-x-2">
                  <b className="flex items-center gap-x-1">
                    <RiFunctionLine />
                    شیوه برگزاری دوره :
                  </b>
                  <span>{online}</span>
                </span>
                <span className="flex gap-x-2">
                  <b className="flex items-center gap-x-1">
                    <FaPlaceOfWorship />
                    محل برگزاری دوره :
                  </b>
                  <span>{place}</span>
                </span>
                <span className="flex gap-x-2">
                  <b className="flex items-center gap-x-1">
                    <BsCalendarDateFill />
                    تاریخ شروع دوره :
                  </b>
                  <span>{date}</span>
                </span>
                <span className="flex gap-x-2">
                  <b className="flex items-center gap-x-1">
                    <FaDollarSign />
                    هزینه دوره :
                  </b>
                  {price === 0 ? (
                    <span className="font-bold text-red-700">رایگان!</span>
                  ) : (
                    <span className="font-bold text-[#14749e]">
                      {price} تومان
                    </span>
                  )}
                </span>
              </div>
            </div>
            <div className="mt-10 flex w-full flex-col">
              <h2 class="mb-8 text-center font-IRANKharazmi text-3xl font-bold">
                {courseDetailsTitle}
              </h2>
              <div dangerouslySetInnerHTML={{ __html: courseDetails }}></div>
            </div>
          </div>
        </div>
        {enabled ? (
          <button
            className="my-10 flex w-fit select-none items-center gap-x-1 rounded-lg bg-[#14749e] px-4 py-2 text-center text-xl text-white hover:bg-opacity-70 xl:hidden"
            onClick={() => {
              window.location.href = link
            }}
          >
            <PiStudentFill />
            ثبت نام در دوره
          </button>
        ) : (
          <button
            className="my-10 flex w-fit select-none items-center gap-x-1 rounded-lg bg-slate-300 px-4 py-2 text-center text-xl text-gray-600 xl:hidden"
            disabled="true"
          >
            <PiStudentFill />
            پایان ثبت نام
          </button>
        )}
      </div>
    </>
  )
}

export default CoursePageCom
