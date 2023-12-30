import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import CourseDetailPage from "./pages/CourseDetailPage"
import NotFound from "./pages/NotFound"
import CoursesPage from "./pages/CoursesPage"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<CoursesPage />} />
        <Route path="/course/:courseId" element={<CourseDetailPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
