import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import CoursePage from "./pages/CoursePage"
import NotFound from "./pages/NotFound"
import CoursesPage from "./pages/CoursesPage"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<CoursesPage />} />
        <Route path="/course/:courseId" element={<CoursePage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
