import { Link } from "react-router-dom"
import { fullLogo } from "../assets"
function Footer() {
  return (
    <>
      <footer className="mx-auto mt-20 flex w-full max-w-[1350px] select-none flex-col flex-wrap items-center justify-around gap-8 px-5 pb-5 md:px-28 md:pb-16 lg:flex-row">
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
            <li className="mb-1 border-b-2 border-black/80 px-1 pb-1 text-xl font-bold">
              صفحات
            </li>
            <li className=" hover:font-bold hover:text-blue-800">
              <Link to="/">صفحه اصلی</Link>
            </li>
            <li className=" hover:font-bold hover:text-blue-800">
              <Link to="/">دوره ها</Link>
            </li>
            <li className=" hover:font-bold hover:text-blue-800">
              <Link to="/">تماس با ما</Link>
            </li>
            <li className=" hover:font-bold hover:text-blue-800">
              <Link to="/">درباره ما</Link>
            </li>
          </ul>
          <ul className="flex flex-col items-center gap-y-1  text-black ">
            <li className="mb-1 border-b-2 border-black/80 px-1 pb-1 text-xl font-bold">
              دوره ها
            </li>
            <li className=" hover:font-bold hover:text-blue-800">
              <Link to="/">دوره طراحی وب</Link>
            </li>
            <li className=" hover:font-bold hover:text-blue-800">
              <Link to="/">دوره Python</Link>
            </li>
            <li className=" hover:font-bold hover:text-blue-800 ">
              <Link to="/">دوره سی شارپ</Link>
            </li>
          </ul>
          <ul className="flex flex-col items-center gap-y-1  text-black">
            <li className="mb-1 border-b-2 border-black/80 px-1 pb-1 text-xl font-bold">
              راه های ارتباطی
            </li>
            <li className=" hover:font-bold hover:text-blue-800">
              <Link to="mailto:TUT.Learning.77@gmail.com">Email</Link>
            </li>
            <li className=" hover:font-bold hover:text-blue-800">
              <Link to="https://www.instagram.com/TUT_Learning/">
                Instagram
              </Link>
            </li>
            <li className=" hover:font-bold hover:text-blue-800">
              <Link to="https://t.me/TUT_Learning">Telegram</Link>
            </li>
          </ul>
        </div>
        <div className="w-full border-t-2 border-black/70 pt-3 text-center  text-black">
          <span>&copy; ۱۴۰۲ - کلیه حقوق محفوظ</span>
          <hr className="mt-2" />
        </div>
      </footer>
    </>
  )
}

export default Footer
