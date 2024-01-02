import { useState } from "react"
import { NavLink } from "react-router-dom"

import { FcAbout } from "react-icons/fc"
import { FaShoppingCart } from "react-icons/fa"

import {
  person,
  personBlack,
  hamburgerMenu,
  close,
  home,
  contactUs,
  Logo,
} from "../assets"

function Navbar() {
  const [resNavbar, setResNavbar] = useState(false)

  const isLogin = false

  // btn handler
  const BtnHandler = () => {
    setResNavbar((prev) => !prev)
  }

  return (
    <>
      <nav className="sticky top-0 z-50 h-[69px] select-none bg-white/95 font-IRANKharazmi lg:h-auto">
        <div className=" hidden items-center justify-between px-10 pb-4 pt-4 text-[#606060] lg:flex xl:px-[155px]">
          <img
            src={Logo}
            draggable="false"
            alt="TUT"
            className="w-32 cursor-pointer"
          />
          <ul className="mx-4 flex justify-around  gap-x-4 text-base xl:gap-x-8">
            <li>
              <NavLink to="/"> صفحه اصلی </NavLink>
            </li>
            <li>
              <NavLink to="/courses">دوره‌ها</NavLink>
            </li>
            <li>
              <NavLink to="/b">تماس با ما</NavLink>
            </li>
            <li>
              <NavLink to="/c">درباره ما</NavLink>
            </li>
          </ul>

          <button className="flex w-fit items-center gap-x-2 rounded-lg bg-[#095373] px-4 py-2 text-white hover:bg-opacity-75">
            <img draggable="false" src={person} alt="person" />
            ورود/ ثبت نام
          </button>
        </div>
        {/* responsive for mobile */}
        <div className=" flex items-center justify-between px-5 py-4 lg:hidden">
          <img src={hamburgerMenu} alt="hamburgerMenu" onClick={BtnHandler} />
          <img src={Logo} draggable="false" alt="bilito" className="w-28" />
          <button className="rounded-full bg-[#095373] p-2">
            <img src={person} alt="person" />
          </button>
          {/* main responsive menu */}
          <div class={` ${resNavbar ? "flex" : "hidden"}  relative z-50`}>
            <div
              class=" fixed inset-0 bg-gray-800 opacity-40"
              onClick={BtnHandler}
            ></div>
            <nav className="navbar-menu fixed bottom-0 right-0 top-0 flex w-full max-w-sm flex-col overflow-y-auto border-r bg-white px-6 py-6">
              <div className="mb-14 flex justify-between">
                <img src={close} alt="close" onClick={BtnHandler} />
                <img src={Logo} alt="bimito" className="mx-auto w-32" />
              </div>
              <ul className="mb-12 flex flex-col gap-y-8 text-sm text-[#404040]">
                <li>
                  <NavLink to="/" className="flex items-center gap-x-2">
                    <img draggable="false" src={home} alt="arrow" />
                    صفحه اصلی
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/courses" className="flex items-center gap-x-2">
                    <FaShoppingCart />
                    دوره‌ها
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/c" className="flex items-center gap-x-2">
                    <img draggable="false" src={contactUs} alt="arrow" />
                    تماس با ما
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/d" className="flex items-center gap-x-2">
                    <FcAbout />
                    درباره ما
                  </NavLink>
                </li>
                {isLogin && (
                  <li>
                    <NavLink to="/e" className="flex items-center gap-x-2">
                      <img draggable="false" src={personBlack} alt="person" />
                      کاربر توت
                    </NavLink>
                  </li>
                )}
              </ul>
              {!isLogin && (
                <button className="flex w-full items-center justify-center gap-x-2 rounded-lg bg-[#095373] px-4 py-3 text-white hover:bg-cyan-200">
                  <img draggable="false" src={person} alt="person" />
                  ورود/ ثبت نام
                </button>
              )}
            </nav>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
