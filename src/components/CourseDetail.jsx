import courses from "../db"
import { useState } from "react"
import { Link } from "react-router-dom"

// material ui
import Accordion from "@mui/material/Accordion"
import AccordionSummary from "@mui/material/AccordionSummary"
import AccordionDetails from "@mui/material/AccordionDetails"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"

// react icons
import { FaHome, FaDollarSign, FaCheckCircle } from "react-icons/fa"
import {
  MdOutlineNavigateBefore,
  MdOutlineEdit,
  MdLibraryBooks,
} from "react-icons/md"
import { IoTime, IoLocationSharp } from "react-icons/io5"
import { LiaChalkboardTeacherSolid } from "react-icons/lia"
import { BsCalendarDateFill } from "react-icons/bs"
import { PiStudentFill } from "react-icons/pi"
import { RiFileList3Line } from "react-icons/ri"
import { IoMdInformationCircle } from "react-icons/io"

function CourseDetail({ id }) {
  const {
    title,
    level,
    courseImage,
    prerequisite,
    courseTime,
    teacher,
    place,
    date,
    price,
    status,
    formLink,
    courseBtnEnabled,
    youtubeLinks,
    courseDesc,
    courseDetails,
  } = courses.find((course) => course.id === id)

  // accordion style changer
  const [expanded, setExpanded] = useState(
    Array(courseDetails.length).fill(false)
  )
  const handleChange = (panel) => (event, isExpanded) => {
    const newExpanded = [...expanded]
    newExpanded[panel] = isExpanded
    setExpanded(newExpanded)
  }

  // onclick handler
  const submitBtnHandler = () => {
    window.location.href = formLink
  }

  return (
    <>
      <div className="mx-auto flex w-fit flex-col items-center justify-between pt-5 xl:mb-10">
        <div className="mb-5 flex w-[95%] items-center gap-x-2 rounded-lg bg-white px-3  py-2 text-sm font-bold text-gray-500 shadow-md sm:text-lg xl:mt-0 xl:w-full">
          <Link
            to="/"
            className="group flex items-center gap-x-2 hover:text-[#14749d]"
          >
            <FaHome />
            <span className="border-b-2 border-transparent group-hover:border-[#14749d]">
              صفحه اصلی
            </span>
          </Link>
          <MdOutlineNavigateBefore />
          <Link
            to="/courses"
            className="border-b-2 border-transparent hover:border-[#14749d] hover:text-[#14749d]"
          >
            دوره‌ها
          </Link>
          <MdOutlineNavigateBefore />
          <span>
            {title} {level}
          </span>
        </div>
        <img
          src={courseImage}
          alt={title}
          className="xl:hidden"
          draggable="false"
        />
        <div className="  gap-x-20 xl:flex">
          <div className="flex flex-col items-center">
            <div class="mx-auto hidden w-fit select-none rounded-xl px-4 py-4 text-xl xl:block">
              <h3 className="mb-4 text-center font-IRANKharazmi text-3xl font-black">
                جزئیات دوره
              </h3>
              <div className="flex flex-col gap-y-4">
                <span className="flex  w-full gap-x-2 rounded-lg bg-[#fff] px-2 py-2 shadow-md">
                  <b className="flex items-center gap-x-2 text-gray-500">
                    <span className="text-[#14749e]">
                      <MdLibraryBooks />
                    </span>
                    سطح دوره :
                  </b>
                  <span className="text-[#2f6177]">{level}</span>
                </span>
                <span className="flex w-full gap-x-2 rounded-lg bg-[#fff] px-2 py-2 shadow-md">
                  <b className="flex items-center gap-x-2 text-gray-500">
                    <span className="text-[#14749e]">
                      <MdOutlineEdit />
                    </span>
                    پیش نیاز :
                  </b>
                  <span className="text-[#2f6177]">{prerequisite}</span>
                </span>
                <span className="flex w-full gap-x-2 rounded-lg bg-[#fff] px-2 py-2 shadow-md">
                  <b className="flex items-center gap-x-2 text-gray-500">
                    <span className="text-[#14749e]">
                      <IoTime />
                    </span>
                    مدت دوره :
                  </b>
                  <span className="text-[#2f6177]">{courseTime} ساعت</span>
                </span>
                <span className="flex w-full gap-x-2 rounded-lg bg-[#fff] px-2 py-2 shadow-md">
                  <b className="flex items-center gap-x-2 text-gray-500">
                    <span className="text-[#14749e]">
                      <LiaChalkboardTeacherSolid />
                    </span>
                    مدرس دوره :
                  </b>
                  <span className="text-[#2f6177]">{teacher}</span>
                </span>
                <span className="flex w-full gap-x-2 rounded-lg bg-[#fff] px-2 py-2 shadow-md">
                  <b className="flex items-center gap-x-2 text-gray-500">
                    <span className="text-[#14749e]">
                      <IoLocationSharp />
                    </span>
                    نحوه برگزاری :
                  </b>
                  <span className="text-[#2f6177]">{place}</span>
                </span>
                <span className="flex w-full gap-x-2 rounded-lg bg-[#fff] px-2 py-2 shadow-md">
                  <b className="flex items-center gap-x-2 text-gray-500">
                    <span className="text-[#14749e]">
                      <FaCheckCircle />
                    </span>
                    وضعیت دوره :
                  </b>
                  <span className="text-[#2f6177]">{status}</span>
                </span>
                <span className="flex w-full gap-x-2 rounded-lg bg-[#fff] px-2 py-2 shadow-md">
                  <b className="flex items-center gap-x-2 text-gray-500">
                    <span className="text-[#14749e]">
                      <BsCalendarDateFill />
                    </span>
                    تاریخ شروع دوره :
                  </b>
                  <span className="text-[#2f6177]">{date}</span>
                </span>
                <span className="flex w-full gap-x-2 rounded-lg bg-[#fff] px-2 py-2 shadow-md">
                  <b className="flex items-center gap-x-2 text-gray-500">
                    <span className="text-[#14749e]">
                      <FaDollarSign />
                    </span>
                    هزینه دوره :
                  </b>
                  {price === 0 ? (
                    <span className="text-xl font-black text-red-700">
                      رایگان!
                    </span>
                  ) : (
                    <span className="font-bold text-[#2f6177]">
                      {price} تومان
                    </span>
                  )}
                </span>
              </div>
            </div>

            {courseBtnEnabled ? (
              <button
                className="mt-3 hidden w-fit select-none items-center gap-x-2 rounded-lg bg-[#14749e] px-4 py-2 text-center text-xl text-white hover:bg-opacity-70 xl:flex"
                onClick={submitBtnHandler}
              >
                <PiStudentFill />
                ثبت نام در دوره
              </button>
            ) : (
              <div className="hidden flex-col items-center gap-y-5 px-5 xl:flex">
                <button
                  className="mt-3 flex w-fit select-none items-center gap-x-2 rounded-lg bg-slate-300 px-4 py-2 text-center text-xl text-gray-600"
                  disabled="true"
                >
                  <PiStudentFill />
                  پایان ثبت نام
                </button>
                <div class="flex w-full items-center gap-x-2 rounded-lg bg-[#fff] px-2 py-2 text-[#2f6177] shadow-lg ">
                  <span className="text-[#14749e]">
                    <IoMdInformationCircle />
                  </span>
                  دوره رایگان بعدی در صفحه اینستاگرام اطلاع رسانی خواهد شد.
                </div>
              </div>
            )}
          </div>
          <div className="flex flex-col flex-wrap items-center px-5 xl:px-0">
            <img
              src={courseImage}
              alt={title}
              className="hidden xl:block xl:max-h-[450px] xl:max-w-[800px] xl:rounded-xl"
              draggable="false"
            />

            <div className="mt-5 max-w-[800px] rounded-lg bg-white px-5 py-5 shadow-lg">
              <h1 className="mb-3 font-IRANKharazmi text-2xl font-black">
                {title} {level}
              </h1>
              <p
                className="text-justify"
                dir="rtl"
                style={{ whiteSpace: "pre-wrap" }}
              >
                {courseDesc}
              </p>
            </div>

            <div className="mt-10 flex w-full flex-col">
              <h2 class="mb-8 text-center font-IRANKharazmi text-3xl font-bold">
                سرفصل های دوره
              </h2>
              {courseDetails.map((course, index) => (
                <Accordion
                  key={index}
                  expanded={expanded[index]}
                  onChange={handleChange(index)}
                  className={`${
                    expanded[index] ? "border-2 border-[#15759eb8]" : ""
                  }`}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls={`panel${index}a-content`}
                    id={`panel${index}a-header`}
                  >
                    <div className="flex items-center gap-x-2 font-black lg:text-2xl">
                      <RiFileList3Line /> {course.title}
                    </div>
                  </AccordionSummary>
                  <AccordionDetails className="border-t-2 border-dashed border-gray-400">
                    <ul className="ml-4 list-inside list-disc">
                      {course.details.map((detail, detailIndex) => (
                        <li key={detailIndex}>{detail}</li>
                      ))}
                    </ul>
                  </AccordionDetails>
                </Accordion>
              ))}
            </div>
          </div>
        </div>
        <div class="mx-auto mt-10 w-fit select-none rounded-xl px-4 py-4 xl:hidden">
          <h3 className="mb-4 text-center font-IRANKharazmi text-2xl font-black">
            جزئیات دوره
          </h3>
          <div className="flex flex-col gap-y-4">
            <span className="flex w-full gap-x-2 rounded-lg bg-[#fff] px-2 py-2 shadow-lg">
              <b className="flex items-center gap-x-2 text-gray-500">
                <span className="text-[#14749e]">
                  <MdLibraryBooks />
                </span>
                سطح دوره :
              </b>
              <span className="text-[#2f6177]">{level}</span>
            </span>
            <span className="flex w-full gap-x-2 rounded-lg bg-[#fff] px-2 py-2 shadow-lg">
              <b className="flex items-center gap-x-2 text-gray-500">
                <span className="text-[#14749e]">
                  <MdOutlineEdit />
                </span>
                پیش نیاز :
              </b>
              <span className="text-[#2f6177]">{prerequisite}</span>
            </span>
            <span className="flex w-full gap-x-2 rounded-lg bg-[#fff] px-2 py-2 shadow-lg">
              <b className="flex items-center gap-x-2 text-gray-500">
                <span className="text-[#14749e]">
                  <IoTime />
                </span>
                مدت دوره :
              </b>
              <span className="text-[#2f6177]">{courseTime} ساعت</span>
            </span>
            <span className="flex w-full gap-x-2 rounded-lg bg-[#fff] px-2 py-2 shadow-lg">
              <b className="flex items-center gap-x-2 text-gray-500">
                <span className="text-[#14749e]">
                  <LiaChalkboardTeacherSolid />
                </span>
                مدرس دوره :
              </b>
              <span className="text-[#2f6177]">{teacher}</span>
            </span>
            <span className="flex w-full gap-x-2 rounded-lg bg-[#fff] px-2 py-2 shadow-lg">
              <b className="flex items-center gap-x-2 text-gray-500">
                <span className="text-[#14749e]">
                  <IoLocationSharp />
                </span>
                نحوه برگزاری :
              </b>
              <span className="text-[#2f6177]">{place}</span>
            </span>
            <span className="flex w-full gap-x-2 rounded-lg bg-[#fff] px-2 py-2 shadow-lg">
              <b className="flex items-center gap-x-2 text-gray-500">
                <span className="text-[#14749e]">
                  <FaCheckCircle />
                </span>
                وضعیت دوره :
              </b>
              <span className="text-[#2f6177]">{status}</span>
            </span>
            <span className="flex w-full gap-x-2 rounded-lg bg-[#fff] px-2 py-2 shadow-lg">
              <b className="flex items-center gap-x-2 text-gray-500">
                <span className="text-[#14749e]">
                  <BsCalendarDateFill />
                </span>
                تاریخ شروع دوره :
              </b>
              <span className="text-[#2f6177]">{date}</span>
            </span>
            <span className="flex w-full gap-x-2 rounded-lg bg-[#fff] px-2 py-2 shadow-lg">
              <b className="flex items-center gap-x-2 text-gray-500">
                <span className="text-[#14749e]">
                  <FaDollarSign />
                </span>
                هزینه دوره :
              </b>
              {price === 0 ? (
                <span className="text-xl font-black text-red-700">رایگان!</span>
              ) : (
                <span className="font-bold text-[#2f6177]">{price} تومان</span>
              )}
            </span>
          </div>
        </div>
        {courseBtnEnabled ? (
          <button
            className=" mt-3 flex w-fit select-none items-center gap-x-2 rounded-lg bg-[#14749e] px-4 py-2 text-center text-xl text-white hover:bg-opacity-70 xl:hidden"
            onClick={submitBtnHandler}
          >
            <PiStudentFill />
            ثبت نام در دوره
          </button>
        ) : (
          <div className="flex flex-col items-center gap-y-5 px-5 xl:hidden">
            <button
              className="mt-3 flex w-fit select-none items-center gap-x-2 rounded-lg bg-slate-300 px-4 py-2 text-center text-xl text-gray-600"
              disabled="true"
            >
              <PiStudentFill />
              پایان ثبت نام
            </button>
            <div class="flex w-full items-center gap-x-2 rounded-lg bg-[#fff] px-2 py-2 text-[#2f6177] shadow-lg ">
              <span className="text-[#14749e]">
                <IoMdInformationCircle />
              </span>
              دوره رایگان بعدی در صفحه اینستاگرام اطلاع رسانی خواهد شد.
            </div>
          </div>
        )}
      </div>
      {youtubeLinks ? (
        <div className="mt-16 flex w-full flex-col items-center px-2">
          <h2 className="mb-5 text-center font-IRANKharazmi text-2xl font-black">
            فیلم های ضبط شده {title} {level}
          </h2>

          {youtubeLinks.map((video, index) => (
            <div
              key={index}
              className="mb-10 h-full min-h-[275px] w-full max-w-[560px]  rounded-lg bg-white p-5 px-5 shadow-lg lg:w-[760px] lg:shadow-md"
            >
              <div className="mb-2 text-xl font-bold">
                {title} {level} - قسمت {index + 1}:
              </div>
              <iframe
                className="min-h-[275px] w-full rounded-xl"
                src={video}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          ))}
        </div>
      ) : (
        <> </>
      )}
    </>
  )
}

export default CourseDetail
