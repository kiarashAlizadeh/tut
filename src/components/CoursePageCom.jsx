function CoursePageCom({
  image,
  title,
  desc,
  courseDetailsTitle,
  courseDetails,
  prerequisite,
  courseTime,
  teacher,
  link,
  enabled,
}) {
  return (
    <>
      <div className="flex flex-col items-center xl:mb-10">
        <img src={image} alt={title} className="xl:hidden" draggable="false" />
        <div className="gap-x-10 xl:flex">
          <div className="flex flex-col items-center">
            <div class="mx-auto mt-10 hidden w-fit select-none rounded-xl border-2 border-black px-4 py-4 xl:block">
              <h3 className="mb-4 text-center text-2xl font-black">
                جزئیات دوره
              </h3>
              <div className="flex flex-col gap-y-2">
                <span className="flex gap-x-2">
                  <b>پیش نیاز :</b>
                  <span>{prerequisite}</span>
                </span>
                <span className="flex gap-x-2">
                  <b>مدت زمان :</b>
                  <span>{courseTime} ساعت</span>
                </span>
                <span className="flex gap-x-2">
                  <b>مدرس دوره :</b>
                  <span>{teacher}</span>
                </span>
              </div>
            </div>

            <button
              className="my-10 hidden w-fit select-none rounded-lg bg-teal-500 px-4 py-2 text-center text-xl text-white xl:inline"
              onClick={() => {
                window.location.href = link
              }}
            >
              ثبت نام در دوره
            </button>
          </div>
          <div className="mt-5 flex flex-col flex-wrap items-center gap-y-5 px-5">
            <img
              src={image}
              alt={title}
              className="hidden xl:block xl:max-h-[450px] xl:max-w-[800px] xl:rounded-xl"
              draggable="false"
            />
            <div className="max-w-[800px]">
              <h1 className="mb-3 text-2xl font-black">{title}</h1>
              <p
                className="text-justify"
                dir="rtl"
                style={{ whiteSpace: "pre-wrap" }}
              >
                {desc}
              </p>
            </div>
            <div class="mx-auto mt-10 w-fit select-none rounded-xl border-2 border-black px-4 py-4 xl:hidden">
              <h3 className="mb-4 text-center text-2xl font-black">
                جزئیات دوره
              </h3>
              <div className="flex flex-col gap-y-2">
                <span className="flex gap-x-2">
                  <b>پیش نیاز :</b>
                  <span>{prerequisite}</span>
                </span>
                <span className="flex gap-x-2">
                  <b>مدت زمان :</b>
                  <span>{courseTime} ساعت</span>
                </span>
                <span className="flex gap-x-2">
                  <b>مدرس دوره :</b>
                  <span>{teacher}</span>
                </span>
              </div>
            </div>
            <div className="mt-10 flex w-full flex-col">
              <h2 class="mb-8 text-center text-3xl font-bold">
                {courseDetailsTitle}
              </h2>
              <div dangerouslySetInnerHTML={{ __html: courseDetails }}></div>
            </div>
          </div>
        </div>

        <button
          className="my-10 w-fit select-none rounded-lg bg-teal-500 px-4 py-2 text-center text-xl text-white xl:hidden"
          onClick={() => {
            window.location.href = link
          }}
        >
          ثبت نام در دوره
        </button>
      </div>
    </>
  )
}

export default CoursePageCom
