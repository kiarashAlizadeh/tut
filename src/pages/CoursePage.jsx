import { useParams } from "react-router-dom"

import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import CoursePageCom from "../components/CoursePageCom"

function CoursePage() {
  const courseId = useParams().courseId
  const courseData = [
    {
      id: 1,
      image:
        "https://blog.faradars.org/wp-content/uploads/2022/09/what-is-front-end-programming.jpg",
      title: "دوره طراحی وبسایت",
      desc: ` طراحی وبسایت و بخش فرانت‌اند به عنوان یکی از مهمترین جنبه‌های توسعه وب، به طراحی، ساخت و اجرای رابط کاربری یک وبسایت می‌پردازد. HTML، CSS و JavaScript به عنوان سه عنصر اصلی در این فرآیند مطرح هستند. 
 
HTML (HyperText Markup Language) به عنوان زبان برنامه‌نویسی اصلی برای ساختاردهی و محتوای یک صفحه وب استفاده می‌شود. این زبان با استفاده از تگ‌ها و عناصر مختلف، ساختار صفحات وب را تعریف می‌کند.
 
CSS (Cascading Style Sheets) وظیفه استایل‌دهی و زیباسازی صفحات HTML را بر عهده دارد. این زبان با استفاده از قوانین و خصوصیت‌های مختلف، اندازه، رنگ، فونت، فضا و سایر ویژگی‌های ظاهری صفحه وب را تعیین می‌کند.
 
JavaScript به عنوان یک زبان برنامه‌نویسی کلاینت ساید، وظیفه ایجاد تعامل و پویایی در صفحات وب را بر عهده دارد. این زبان می‌تواند وظایف مختلفی مانند اعتبارسنجی فرم‌ها، ایجاد انیمیشن‌ها، افزودن واسط کاربری تعاملی و بسیاری وظایف دیگر را بر عهده داشته باشد.

طراحی وبسایت با استفاده از این ابزارها و زبان‌های برنامه‌نویسی، به طور کلی به ایجاد یک تجربه کاربری مطلوب، زیبا و کارآمد می‌پردازد. با استفاده از HTML، صفحه وب ساخته می‌شود، CSS به آن ظاهری زیبا و مناسب می‌بخشد و JavaScript تعاملات و پویایی‌های لازم را فراهم می‌کند. این فرآیند نه تنها از جنبه فنی مهم است، بلکه نقش بسیار مهمی در تجربه کاربری و موفقیت یک وبسایت نیز دارد.`,
      courseDetailsTitle: "سرفصل‌های دوره مقدماتی طراحی وبسایت",
      courseDetails: `<ol class="list-inside list-decimal">
    <li class="mb-4">
      <span class="font-bold">مقدمه به HTML، CSS و JavaScript:</span>
      <ul class="ml-4 list-inside list-disc">
        <li>آشنایی با HTML و اجزای اصلی</li>
        <li>استفاده از CSS برای زیبایی‌بخشی به صفحات وب</li>
        <li>مفاهیم اولیه JavaScript و کاربردهای آن</li>
      </ul>
    </li>
    <li class="mb-4">
      <span class="font-bold">طراحی و استایل دهی با CSS:</span>
      <ul class="ml-4 list-inside list-disc">
        <li>انواع انتخابگرها و انتقال‌دهنده‌ها</li>
        <li>طراحی و ساختاردهی صفحات با Flexbox و Grid</li>
        <li>استفاده از CSS پیشرفته برای ایجاد انیمیشن‌ها و تغییرات پیچیده</li>
      </ul>
    </li>
    <li class="mb-4">
      <span class="font-bold">برنامه‌نویسی با JavaScript:</span>
      <ul class="ml-4 list-inside list-disc">
        <li>مبانی JavaScript: متغیرها، عملگرها، و شرط‌ها</li>
        <li>کنترل جریان برنامه و حلقه‌ها</li>
        <li>DOM Manipulation و رویدادها</li>
      </ul>
    </li>
    <li class="mb-4">
      <span class="font-bold">پروژه‌های عملی طراحی وب:</span>
      <ul class="ml-4 list-inside list-disc">
        <li>طراحی و ایجاد یک وبسایت استاتیک</li>
        <li>پیاده‌سازی وبسایت پویا با استفاده از JavaScript</li>
        <li>بهینه‌سازی و رفع اشکالات در وبسایت</li>
      </ul>
    </li>
    <li class="mb-4">
      <span class="font-bold">واکنشگرایی و ریسپانسیو بودن:</span>
      <ul class="ml-4 list-inside list-disc">
        <li>مفاهیم واکنشگرایی در طراحی وبسایت</li>
        <li>تکنیک‌ها و ابزارهایی برای ساخت سایت‌های ریسپانسیو</li>
      </ul>
    </li>
    <li class="mb-4">
      <span class="font-bold">بهینه‌سازی و بهبود عملکرد وبسایت:</span>
      <ul class="ml-4 list-inside list-disc">
        <li>استفاده از ابزارها و تکنیک‌های بهینه‌سازی وب</li>
        <li>مدیریت فایل‌ها و بهینه‌سازی تصاویر</li>
      </ul>
    </li>
    <li>
      <span class="font-bold">به اشتراک گذاری و انتشار وبسایت:</span>
      <ul class="ml-4 list-inside list-disc">
        <li>آماده‌سازی و انتشار وبسایت بر روی هاست</li>
        <li>افزایش دسترسی و شناخت وبسایت توسط موتورهای جستجو</li>
      </ul>
    </li>
  </ol>`,
      prerequisite: "بدون پیش نیاز",
      courseTime: 23,
      teacher: "دکتر علیرضا اسلامی زاد",
      link: "https://docs.google.com/forms",
      enabled: true,
    },
    {
      id: 2,
      image:
        "https://media.geeksforgeeks.org/wp-content/uploads/20200422171614/CSharp-Tutorial.png",
      title: "دوره C#",
      desc: `زبان برنامه‌نویسی C# یکی از زبان‌های برنامه‌نویسی شیء‌گرا و تحت مدیریت شرکت مایکروسافت است که برای توسعه نرم‌افزارهای متنوع از جمله برنامه‌های دسکتاپ، وب، و موبایل استفاده می‌شود. C# یک زبان بسیار قدرتمند، انعطاف‌پذیر و با عملکرد بالا است که قابلیت‌هایی چون ایمنی نوع‌ها، ارث‌بری، پلی‌مورفیسم و مدیریت حافظه را فراهم می‌کند. این زبان از زیرساخت‌های مدرنی برخوردار است که توسعه دهندگان را قادر می‌سازد به راحتی و با کارایی بالا برنامه‌های متنوع و پیچیده را طراحی، پیاده‌سازی و مدیریت کنند.`,
      courseDetailsTitle: "سرفصل‌های دوره مقدماتی C#",
      courseDetails: `<ol class="list-inside list-decimal">
                <li class="mb-4">
                  <span class="font-bold">مقدمه به C# :</span>
                  <ul class="ml-4 list-inside list-disc">
                    <li>تاریخچه و معرفی اولیه</li>
                    <li>محیط توسعه (IDE) و نصب C#</li>
                  </ul>
                </li>
                <li class="mb-4">
                  <span class="font-bold">اساسیات برنامه‌نویسی:</span>
                  <ul class="ml-4 list-inside list-disc">
                    <li>متغیرها و انواع داده‌ها</li>
                    <li>عملگرها و عبارات شرطی</li>
                  </ul>
                </li>
                <li class="mb-4">
                  <span class="font-bold">ساختار داده:</span>
                  <ul class="ml-4 list-inside list-disc">
                    <li>آرایه‌ها و رشته‌ها</li>
                    <li>لیست‌ها و دیکشنری‌ها</li>
                  </ul>
                </li>
                <li class="mb-4">
                  <span class="font-bold">توابع و متدها:</span>
                  <ul class="ml-4 list-inside list-disc">
                    <li>تعریف و استفاده از توابع</li>
                    <li>پارامترها و بازگشت مقادیر</li>
                  </ul>
                </li>
                <li class="mb-4">
                  <span class="font-bold">شیءگرایی و کلاس‌ها:</span>
                  <ul class="ml-4 list-inside list-disc">
                    <li>مبانی شیءگرایی</li>
                    <li>تعریف کلاس و اشیاء</li>
                  </ul>
                </li>
                <li class="mb-4">
                  <span class="font-bold">ورودی و خروجی:</span>
                  <ul class="ml-4 list-inside list-disc">
                    <li>ورودی از کاربر</li>
                    <li>نمایش خروجی</li>
                  </ul>
                </li>
                <li class="mb-4">
                  <span class="font-bold">استثناءها و اشکال زدایی:</span>
                  <ul class="ml-4 list-inside list-disc">
                    <li>مدیریت خطاها و استثناءها</li>
                    <li>رفع اشکال (Debugging) در برنامه</li>
                  </ul>
                </li>
                <li>
                  <span class="font-bold">فایل‌ها و ورود/خروج داده:</span>
                  <ul class="ml-4 list-inside list-disc">
                    <li>خواندن و نوشتن اطلاعات به فایل‌ها</li>
                  </ul>
                </li>
              </ol>`,
      prerequisite: "آشنایی به الگوریتم و فلوچارت",
      courseTime: 10,
      teacher: "دکتر علیرضا اسلامی زاد",
      link: `https://docs.google.com/forms`,
      enabled: true,
    },
    {
      id: 2,
      image: "https://spectrum.ieee.org/media-library/image.jpg?id=33364099",
      title: "دوره Python",
      desc: `زبان برنامه‌نویسی پایتون یک زبان بسیار پرکاربرد، قابل فهم و قدرتمند است که برای توسعه نرم‌افزارهای متنوع از جمله وب، علوم داده، هوش مصنوعی، اتوماسیون، و توسعه اپلیکیشن‌های موبایل استفاده می‌شود. یکی از مزایای بزرگ پایتون، خوانایی و سادگی بالای زبان است که باعث می‌شود حتی برای مبتدیان نیز آموزش و استفاده از آن راحت باشد. پایتون به عنوان یک زبان توسعه سریع (Rapid Development) شناخته می‌شود؛ به دلیل داشتن تعداد زیادی کتابخانه و ابزارهای آماده که امکانات بسیاری را برای توسعه‌دهندگان فراهم می‌کنند. علاوه بر این، پایتون به عنوان یک زبان کراس پلتفرم است که به راحتی روی سیستم‌های مختلف اجرا می‌شود و قابلیت اتصال و ادغام با سایر زبان‌ها و فناوری‌ها را دارد، که این ویژگی باعث محبوبیت بیشتر آن در صنعت برنامه‌نویسی شده است.`,
      courseDetailsTitle: "سرفصل‌های دوره مقدماتی Python",
      courseDetails: `<ol class="list-inside list-decimal">
    <li class="mb-4">
      <span class="font-bold">مقدمه به پایتون:</span>
      <ul class="ml-4 list-inside list-disc">
        <li>تاریخچه و معرفی اولیه</li>
        <li>محیط توسعه (IDE) و نصب پایتون</li>
      </ul>
    </li>
    <li class="mb-4">
      <span class="font-bold">اساسیات برنامه‌نویسی:</span>
      <ul class="ml-4 list-inside list-disc">
        <li>متغیرها و انواع داده‌ها</li>
        <li>عملگرها و عبارات شرطی</li>
      </ul>
    </li>
    <li class="mb-4">
      <span class="font-bold">ساختار داده:</span>
      <ul class="ml-4 list-inside list-disc">
        <li>لیست‌ها و تاپل‌ها</li>
        <li>دیکشنری‌ها و مجموعه‌ها</li>
      </ul>
    </li>
    <li class="mb-4">
      <span class="font-bold">توابع و متدها:</span>
      <ul class="ml-4 list-inside list-disc">
        <li>تعریف و استفاده از توابع</li>
        <li>پارامترها و بازگشت مقادیر</li>
      </ul>
    </li>
    <li class="mb-4">
      <span class="font-bold">شیءگرایی و کلاس‌ها:</span>
      <ul class="ml-4 list-inside list-disc">
        <li>مبانی شیءگرایی</li>
        <li>تعریف کلاس و اشیاء</li>
      </ul>
    </li>
    <li class="mb-4">
      <span class="font-bold">ورودی و خروجی:</span>
      <ul class="ml-4 list-inside list-disc">
        <li>ورودی از کاربر</li>
        <li>نمایش خروجی</li>
      </ul>
    </li>
    <li class="mb-4">
      <span class="font-bold">استثناءها و اشکال زدایی:</span>
      <ul class="ml-4 list-inside list-disc">
        <li>مدیریت خطاها و استثناءها</li>
        <li>رفع اشکال (Debugging) در برنامه</li>
      </ul>
    </li>
    <li>
      <span class="font-bold">فایل‌ها و ورود/خروج داده:</span>
      <ul class="ml-4 list-inside list-disc">
        <li>خواندن و نوشتن اطلاعات به فایل‌ها</li>
      </ul>
    </li>
  </ol>`,
      prerequisite: "آشنایی به مبانی برنامه نویسی",
      courseTime: 16,
      teacher: "دکتر علیرضا اسلامی زاد",
      link: "https://docs.google.com/forms",
      enabled: true,
    },
  ]
  return (
    <>
      <Navbar />
      <CoursePageCom {...courseData[courseId - 1]} />
      <Footer />
    </>
  )
}

export default CoursePage
