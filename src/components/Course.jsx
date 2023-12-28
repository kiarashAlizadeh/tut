function Course({ title, desc, bgImage, logo, btnColor }) {
  return (
    <>
      <div
        className="flex h-[420px] w-full max-w-[350px] flex-col items-center justify-between gap-y-4 rounded-xl px-6 py-10"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "top center",
          backgroundSize: "cover",
        }}
      >
        <img src={logo} className="z-10" alt={`${logo}`} />
        <div className="flex flex-col items-center gap-y-3">
          <span className="text-xl font-bold">{title}</span>
          <span className="text-sm">{desc}</span>
        </div>
        <button
          className="mx-auto w-fit rounded-xl  px-4 py-2 text-xl font-bold text-white"
          style={{ backgroundColor: `#${btnColor}` }}
        >
          ثبت نام
        </button>
      </div>
    </>
  )
}

export default Course
