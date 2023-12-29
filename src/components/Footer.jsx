import { Link } from "react-router-dom"
import { fullLogo } from "../assets"
function Footer() {
  return (
    <>
      <footer className="mx-auto mt-40 flex w-full max-w-[1350px] flex-row flex-wrap items-start justify-center gap-8 px-5 py-10 text-white sm:justify-between md:px-28 md:pb-16">
        <div className="max-w-[400px]">
          <img src={fullLogo} alt="TuT" className="mb-3 w-full" />
          <div className="text-justify">
            سایت توت به عنوان یک پلتفرم آموزشی، برنامه‌های آموزشی معتبر و متنوع
            در زمینه‌های کامپیوتری ارائه می‌دهد تا افراد به دوره‌های مفید و
            پرکاربرد در این حوزه دسترسی داشته باشند.
          </div>
        </div>
        <ul className="flex flex-col items-center gap-y-1 text-black ">
          <li className="mb-2 border-b-2 border-white px-1 text-xl font-bold ">
            صفحات
          </li>
          <li className=" hover:text-blue-800 hover:font-bold">
            <Link to="/">صفحه اصلی</Link>
          </li>
          <li className=" hover:text-blue-800 hover:font-bold">
            <Link to="/">دوره ها</Link>
          </li>
          <li className=" hover:text-blue-800 hover:font-bold">
            <Link to="/">تماس با ما</Link>
          </li>
          <li className=" hover:text-blue-800 hover:font-bold">
            <Link to="/">درباره ما</Link>
          </li>
        </ul>
        <ul className="flex flex-col items-center gap-y-1  text-black ">
          <li className="mb-2 border-b-2 border-white px-1 text-xl font-bold">
            دوره ها
          </li>
          <li className=" hover:text-blue-800 hover:font-bold">
            <Link to="/">دوره طراحی وب</Link>
          </li>
          <li className=" hover:text-blue-800 hover:font-bold">
            <Link to="/">دوره Python</Link>
          </li>
          <li className=" hover:text-blue-800 hover:font-bold ">
            <Link to="/">دوره سی شارپ</Link>
          </li>
        </ul>
        <ul className="flex flex-col items-center gap-y-1  text-black">
          <li className="mb-2 border-b-2 border-white px-1 text-xl font-bold">
            راه های ارتباطی
          </li>
          <li className=" hover:text-blue-800 hover:font-bold">
            <Link to="mailto:TUT.Learning.77@gmail.com">Email</Link>
          </li>
          <li className=" hover:text-blue-800 hover:font-bold">
            <Link to="https://www.instagram.com/TUT_Learning/">Instagram</Link>
          </li>
          <li className=" hover:text-blue-800 hover:font-bold">
            <Link to="https://t.me/TUT_Learning">Telegram</Link>
          </li>
        </ul >
        <div className="w-full border-t-2 border-white pt-3 text-center  text-black">
          <span>&copy; ۱۴۰۲ - کلیه حقوق محفوظ</span>
          <hr className="mt-2" />

        </div>
      </footer>
    </>
  )
}

export default Footer
