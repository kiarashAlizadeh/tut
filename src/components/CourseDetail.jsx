// material ui
import Accordion from "@mui/material/Accordion"
import AccordionSummary from "@mui/material/AccordionSummary"
import AccordionDetails from "@mui/material/AccordionDetails"
import Typography from "@mui/material/Typography"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"

// react icons
import { MdOutlineNavigateBefore } from "react-icons/md"
import { FaHome } from "react-icons/fa"
import { MdOutlineEdit } from "react-icons/md"
import { IoTime } from "react-icons/io5"
import { LiaChalkboardTeacherSolid } from "react-icons/lia"
import { FaDollarSign } from "react-icons/fa"
import { IoLocationSharp } from "react-icons/io5"
import { BsCalendarDateFill } from "react-icons/bs"
import { PiStudentFill } from "react-icons/pi"
import { MdLibraryBooks } from "react-icons/md"
import { FaCheckCircle } from "react-icons/fa"
import { Link } from "react-router-dom"

function CourseDetail({
  image,
  title,
  desc,
  courseDetailsTitle,
  courseDetails,
  prerequisite,
  level,
  status,
  courseTime,
  teacher,
  place,
  date,
  link,
  price,
  enabled,
  youtube,
}) {
  return (
    <>
      <div className="mx-auto flex w-fit flex-col items-center justify-between xl:mb-10">
        <div className="my-2 flex w-[95%] items-center gap-x-2 rounded-lg border-[1px] border-gray-300 px-3  py-2 text-lg font-bold text-gray-500 xl:w-full">
          <Link
            to="/"
            className="flex items-center gap-x-2 hover:text-[#62b1d8]"
          >
            <FaHome />
            صفحه اصلی
          </Link>
          <MdOutlineNavigateBefore />
          <Link to="/courses" className="hover:text-[#62b1d8]">
            دوره ها
          </Link>
          <MdOutlineNavigateBefore />
          <Link to="#" className="hover:text-[#62b1d8]">
            {title}
          </Link>
        </div>
        <img src={image} alt={title} className="xl:hidden" draggable="false" />
        <div className="gap-x-20 xl:flex">
          <div className="flex flex-col items-center">
            <div class="mx-auto mt-10 hidden w-fit select-none rounded-xl border-2 border-black px-4 py-4 text-xl xl:block">
              <h3 className="mb-4 text-center font-IRANKharazmi text-3xl font-black">
                جزئیات دوره
              </h3>
              <div className="flex flex-col gap-y-4">
                <span className="flex gap-x-2">
                  <b className="flex items-center gap-x-2 text-gray-500">
                    <span className="text-blue-600">
                      <MdLibraryBooks />
                    </span>
                    سطح دوره :
                  </b>
                  <span className="text-[#2f6177]">{level}</span>
                </span>
                <span className="flex gap-x-2">
                  <b className="flex items-center gap-x-2 text-gray-500">
                    <span className="text-blue-600">
                      <MdOutlineEdit />
                    </span>
                    پیش نیاز :
                  </b>
                  <span className="text-[#2f6177]">{prerequisite}</span>
                </span>
                <span className="flex gap-x-2">
                  <b className="flex items-center gap-x-2 text-gray-500">
                    <span className="text-blue-600">
                      <IoTime />
                    </span>
                    مدت دوره :
                  </b>
                  <span className="text-[#2f6177]">{courseTime} ساعت</span>
                </span>
                <span className="flex gap-x-2">
                  <b className="flex items-center gap-x-2 text-gray-500">
                    <span className="text-blue-600">
                      <LiaChalkboardTeacherSolid />
                    </span>
                    مدرس دوره :
                  </b>
                  <span className="text-[#2f6177]">{teacher}</span>
                </span>
                <span className="flex gap-x-2">
                  <b className="flex items-center gap-x-2 text-gray-500">
                    <span className="text-blue-600">
                      <IoLocationSharp />
                    </span>
                    نوع دوره :
                  </b>
                  <span className="text-[#2f6177]">{place}</span>
                </span>
                <span className="flex gap-x-2">
                  <b className="flex items-center gap-x-2 text-gray-500">
                    <span className="text-blue-600">
                      <FaCheckCircle />
                    </span>
                    وضعیت دوره :
                  </b>
                  <span className="text-[#2f6177]">{status}</span>
                </span>
                <span className="flex gap-x-2">
                  <b className="flex items-center gap-x-2 text-gray-500">
                    <span className="text-blue-600">
                      <BsCalendarDateFill />
                    </span>
                    تاریخ شروع دوره :
                  </b>
                  <span className="text-[#2f6177]">{date}</span>
                </span>
                <span className="flex gap-x-2">
                  <b className="flex items-center gap-x-2 text-gray-500">
                    <span className="text-blue-600">
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

            {enabled ? (
              <button
                className="my-10 hidden w-fit select-none items-center gap-x-2 rounded-lg bg-[#14749e] px-4 py-2 text-center text-xl text-white hover:bg-opacity-70 xl:flex"
                onClick={() => {
                  window.location.href = link
                }}
              >
                <PiStudentFill />
                ثبت نام در دوره
              </button>
            ) : (
              <button
                className="my-10 hidden w-fit select-none items-center gap-x-2 rounded-lg bg-slate-300 px-4 py-2 text-center text-xl text-gray-600 xl:flex"
                disabled="true"
              >
                <PiStudentFill />
                پایان ثبت نام
              </button>
            )}
          </div>
          <div className="mt-5 flex flex-col flex-wrap items-center gap-y-5 px-5 xl:px-0">
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

            <div className="mt-10 flex w-full flex-col">
              <h2 class="mb-8 text-center font-IRANKharazmi text-3xl font-bold">
                {courseDetailsTitle}
              </h2>
              {courseDetails.map((course) => {
                return (
                  <Accordion>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <div className="font-black lg:text-2xl">
                        {course.title}
                      </div>
                    </AccordionSummary>
                    <AccordionDetails>
                      <ul class="ml-4 list-inside list-disc">
                        {course.details.map((detail) => (
                          <li>{detail}</li>
                        ))}
                      </ul>
                    </AccordionDetails>
                  </Accordion>
                )
              })}
            </div>
          </div>
        </div>
        <div class="mx-auto mt-10 w-fit select-none rounded-xl border-2 border-black px-4 py-4 xl:hidden">
          <h3 className="mb-4 text-center font-IRANKharazmi text-2xl font-black">
            جزئیات دوره
          </h3>
          <div className="flex flex-col gap-y-4">
            <span className="flex gap-x-2">
              <b className="flex items-center gap-x-2 text-gray-500">
                <span className="text-blue-600">
                  <MdLibraryBooks />
                </span>
                سطح دوره :
              </b>
              <span className="text-[#2f6177]">{level}</span>
            </span>
            <span className="flex gap-x-2">
              <b className="flex items-center gap-x-2 text-gray-500">
                <span className="text-blue-600">
                  <MdOutlineEdit />
                </span>
                پیش نیاز :
              </b>
              <span className="text-[#2f6177]">{prerequisite}</span>
            </span>
            <span className="flex gap-x-2">
              <b className="flex items-center gap-x-2 text-gray-500">
                <span className="text-blue-600">
                  <IoTime />
                </span>
                مدت دوره :
              </b>
              <span className="text-[#2f6177]">{courseTime} ساعت</span>
            </span>
            <span className="flex gap-x-2">
              <b className="flex items-center gap-x-2 text-gray-500">
                <span className="text-blue-600">
                  <LiaChalkboardTeacherSolid />
                </span>
                مدرس دوره :
              </b>
              <span className="text-[#2f6177]">{teacher}</span>
            </span>
            <span className="flex gap-x-2">
              <b className="flex items-center gap-x-2 text-gray-500">
                <span className="text-blue-600">
                  <IoLocationSharp />
                </span>
                نوع دوره :
              </b>
              <span className="text-[#2f6177]">{place}</span>
            </span>
            <span className="flex gap-x-2">
              <b className="flex items-center gap-x-2 text-gray-500">
                <span className="text-blue-600">
                  <FaCheckCircle />
                </span>
                وضعیت دوره :
              </b>
              <span className="text-[#2f6177]">{status}</span>
            </span>
            <span className="flex gap-x-2">
              <b className="flex items-center gap-x-2 text-gray-500">
                <span className="text-blue-600">
                  <BsCalendarDateFill />
                </span>
                تاریخ شروع دوره :
              </b>
              <span className="text-[#2f6177]">{date}</span>
            </span>
            <span className="flex gap-x-2">
              <b className="flex items-center gap-x-2 text-gray-500">
                <span className="text-blue-600">
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
        {enabled ? (
          <button
            className="my-10 flex w-fit select-none items-center gap-x-2 rounded-lg bg-[#14749e] px-4 py-2 text-center text-xl text-white hover:bg-opacity-70 xl:hidden"
            onClick={() => {
              window.location.href = link
            }}
          >
            <PiStudentFill />
            ثبت نام در دوره
          </button>
        ) : (
          <button
            className="my-10 flex w-fit select-none items-center gap-x-2 rounded-lg bg-slate-300 px-4 py-2 text-center text-xl text-gray-600 xl:hidden"
            disabled="true"
          >
            <PiStudentFill />
            پایان ثبت نام
          </button>
        )}
      </div>
      {youtube ? (
        <div className="mt-16 flex w-full flex-col items-center">
          <h2 className="mb-5 text-center font-IRANKharazmi text-2xl font-black">
            فیلم های ضبط شده {title} {level}
          </h2>

          {youtube.map((video, index) => (
            <div className="mb-10">
              <div className="mb-2 text-xl font-bold">
                {title} {level} - قسمت {index + 1}:
              </div>
              <iframe
                className="rounded-xl sm:h-[315px] sm:w-[560px] lg:h-[415px] lg:w-[760px]"
                src={video}
                title="YouTube video player"
                frameborder="0"
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
