import { Link } from "react-router-dom"
import { fullLogo } from "../assets"
function Footer() {
  return (
    <>
      <footer className="mx-auto flex w-full max-w-[1350px] flex-row flex-wrap items-start justify-center gap-8 px-5 py-10 text-white sm:justify-between md:px-28 md:pb-16">
        <div className="max-w-[400px]">
          <img src={fullLogo} alt="TuT" className="mb-3 w-full" />
          <div className="text-justify">
            سایت توت به عنوان یک پلتفرم آموزشی، برنامه‌های آموزشی معتبر و متنوع
            در زمینه‌های کامپیوتری ارائه می‌دهد تا افراد به دوره‌های مفید و
            پرکاربرد در این حوزه دسترسی داشته باشند.
          </div>
        </div>
        <ul className="flex flex-col items-center gap-y-1 ">
          <li className="mb-2 border-b-2 border-white px-1 text-xl font-bold ">
            صفحات
          </li>
          <li>
            <Link to="/">صفحه اصلی</Link>
          </li>
          <li>
            <Link to="/">دوره ها</Link>
          </li>
          <li>
            <Link to="/">تماس با ما</Link>
          </li>
          <li>
            <Link to="/">درباره ما</Link>
          </li>
        </ul>
        <ul className="flex flex-col items-center gap-y-1 ">
          <li className="mb-2 border-b-2 border-white px-1 text-xl font-bold">
            دوره ها
          </li>
          <li>
            <Link to="/">دوره طراحی وب</Link>
          </li>
          <li>
            <Link to="/">دوره Python</Link>
          </li>
          <li>
            <Link to="/">دوره C#</Link>
          </li>
        </ul>
        <ul className="flex flex-col items-center gap-y-1 ">
          <li className="mb-2 border-b-2 border-white px-1 text-xl font-bold">
            راه های ارتباطی
          </li>
          <li>
            <Link to="mailto:TUT.Learning.77@gmail.com">Email</Link>
          </li>
          <li>
            <Link to="https://www.instagram.com/TUT_Learning/">Instagram</Link>
          </li>
          <li>
            <Link to="https://t.me/TUT_Learning">Telegram</Link>
          </li>
        </ul>
        <div className="w-full border-t-2 border-white pt-3 text-center">
          <span>&copy; ۱۴۰۲ - کلیه حقوق محفوظ</span>
        </div>
      </footer>
    </>
  )
}

export default Footer
