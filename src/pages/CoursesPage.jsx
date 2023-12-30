import Courses from "../components/Courses";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function CoursesPage() {
    return (
      <>
        <Navbar />
        <Courses courseTitle={'دوره های آموزشی'} btnText={'بیشتر'} btnLink={'#'} />
        <Footer />
      </>
    )
}

export default CoursesPage;