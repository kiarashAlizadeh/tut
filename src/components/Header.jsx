import { Header1 } from "../assets"
function Header() {
  return (
    <>
      <header className="w-full mb-10">
        <img
          src={Header1}
          alt="tut header"
          draggable="false"
          className="max-h-[600px] w-full select-none"
        />
      </header>
    </>
  )
}

export default Header
