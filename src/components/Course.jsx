function Course({ title, desc, bgImage, logo, btnColor }) {
  return (
    <>
      <div
        className="flex h-[327px] flex-col items-center justify-between gap-y-4 px-6 py-10 rounded-xl"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <img src={logo} className="z-50 w-[73px]" alt="cSharp" />
        <div className="flex flex-col items-center gap-y-3">
          <span>{title}</span>
          <span>{desc}</span>
        </div>
        <button
          className={`mx-auto w-fit rounded-xl bg-[#${btnColor}] px-4 py-2 font-bold text-white `}
        >
          ثبت نام
        </button>
      </div>
    </>
  )
}

export default Course
