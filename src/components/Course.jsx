import { FaLongArrowAltLeft } from "react-icons/fa"
import { FaCheckCircle } from "react-icons/fa"

function Course({
  id,
  title,
  level,
  cardDesc,
  bgImage,
  cardLogo,
  btnColor,
  price,
  status,
}) {
  // btn handler
  const submitBtnHandler = () => {
    window.location.href = `/course/${id}`
  }

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
        <img src={cardLogo} className="z-10" alt={`${cardLogo}`} />
        <div className="flex flex-col items-center gap-y-6">
          <span className="font-IRANKharazmi text-xl font-bold text-white">
            {title} {level}
          </span>
          <div className="flex flex-col items-start gap-y-2">
            <span className="text-sm  text-white">{cardDesc}</span>
            <span className="text-white">
              هزینه دوره :
              {price === 0 ? (
                <span className="mr-2 text-xl font-black text-red-700">
                  رایگان !
                </span>
              ) : (
                <span className="mr-2 font-bold">{price} تومان</span>
              )}
            </span>
            <span className="flex gap-x-2 text-white">
              <b className="flex items-center gap-x-2 ">وضعیت دوره :</b>
              <span className="">{status}</span>
            </span>
          </div>
        </div>
        <button
          style={{ backgroundColor: `#${btnColor}` }}
          className="courseBtn mx-auto flex  w-fit flex-row-reverse items-center gap-x-1 rounded-xl px-4 py-2 text-xl font-bold text-white"
          onClick={submitBtnHandler}
        >
          <FaLongArrowAltLeft /> جزئیات دوره
        </button>
      </div>
    </>
  )
}

export default Course
