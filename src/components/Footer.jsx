import { fullLogo } from "../assets"
function Footer() {
  return (
    <>
      <footer className="mx-auto flex w-full max-w-[1350px] flex-row flex-wrap items-start justify-center gap-8 px-5 py-10 text-white sm:justify-between md:px-28 md:pb-16">
        <img src={fullLogo} alt="TuT" className="w-40 " />
        <ul className="flex flex-col items-center gap-y-1 ">
          <li className="mb-2 border-b-2 border-white px-1 text-lg font-bold ">
            صفحات
          </li>
          <li>صفحه اصلی</li>
          <li>دوره ها</li>
          <li>تماس با ما</li>
          <li>درباره ما</li>
        </ul>
        <ul className="flex flex-col items-center gap-y-1 ">
          <li className="mb-2 border-b-2 border-white px-1 text-lg font-bold">
            دوره ها
          </li>
          <li>دوره طراحی وب</li>
          <li>دوره Python</li>
          <li>دوره C#</li>
        </ul>
        <ul className="flex flex-col items-center gap-y-1 ">
          <li className="mb-2 border-b-2 border-white px-1 text-lg font-bold">
            راه های ارتباطی
          </li>
          <li>Email</li>
          <li>Instagram</li>
          <li>Telegram</li>
        </ul>
      </footer>
    </>
  )
}

export default Footer
