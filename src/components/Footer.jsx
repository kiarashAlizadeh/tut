import { Link } from "react-router-dom"
import { fullLogo } from "../assets"
function Footer() {
  return (
    <>
      <footer className="mx-auto mt-20 flex w-full max-w-[1350px] select-none flex-col flex-wrap items-center justify-around gap-8 px-5 pb-8 md:px-28 lg:flex-row">
        <div className="max-w-[400px]">
          <img
            src={fullLogo}
            alt="TuT"
            className="mb-3 w-full"
            draggable="false"
          />
          <p className="text-justify text-black">
            سایت توت به عنوان یک پلتفرم آموزشی، برنامه‌های آموزشی معتبر و متنوع
            در زمینه‌های کامپیوتری ارائه می‌دهد تا افراد به دوره‌های مفید و
            پرکاربرد در این حوزه دسترسی داشته باشند.
          </p>
        </div>
        <div className="flex w-full flex-row flex-wrap items-start justify-center gap-8 sm:justify-between lg:w-auto">
          <ul className="flex flex-col items-center gap-y-1 text-black ">
            <li className="mb-1 border-b-2 border-black/80 px-1 pb-1 font-IRANKharazmi text-xl font-bold">
              صفحات
            </li>
            <li className=" hover:text-[#62b1d8] ">
              <Link to="/">صفحه اصلی</Link>
            </li>
            <li className=" hover:text-[#62b1d8] ">
              <Link to="/courses">دوره ها</Link>
            </li>
            <li className=" hover:text-[#62b1d8] ">
              <Link to="/b">تماس با ما</Link>
            </li>
            <li className=" hover:text-[#62b1d8] ">
              <Link to="/c">درباره ما</Link>
            </li>
          </ul>
          <ul className="flex flex-col items-center gap-y-1  text-black ">
            <li className="mb-1 border-b-2 border-black/80 px-1 pb-1 font-IRANKharazmi text-xl font-bold">
              جدید ترین دوره ها
            </li>
            <li className=" hover:text-[#62b1d8] ">
              <Link to="/course/1">دوره طراحی وب</Link>
            </li>
            <li className=" hover:text-[#62b1d8] ">
              <Link to="/course/2">دوره سی شارپ</Link>
            </li>
            <li className=" hover:text-[#62b1d8] ">
              <Link to="/course/3">دوره Python</Link>
            </li>
          </ul>
          <ul className="flex flex-col items-center gap-y-1  text-black">
            <li className="mb-1 border-b-2 border-black/80 px-1 pb-1 font-IRANKharazmi text-xl font-bold">
              راه های ارتباطی
            </li>
            <li className=" hover:text-[#62b1d8] ">
              <Link to="mailto:TUT.Learning.77@gmail.com">Email</Link>
            </li>
            <li className=" hover:text-[#62b1d8] ">
              <Link to="https://www.instagram.com/TUT_Learning/">
                Instagram
              </Link>
            </li>
            <li className=" hover:text-[#62b1d8] ">
              <Link to="https://t.me/TUT_Learning">Telegram</Link>
            </li>
          </ul>
        </div>
        <div className="w-full border-t-2 border-black/70 pt-3 text-center  text-black">
          <span> کلیه حقوق محفوظ - &copy; ۱۴۰۲ </span>
        </div>
      </footer>
    </>
  )
}

export default Footer
