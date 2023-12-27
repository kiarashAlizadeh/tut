import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Courses from '../components/Courses';

function Home() {
  return (
    <div className="flex flex-col justify-between h-screen">
      <Navbar />
      <Header />
      <Courses />
      <Footer />
    </div>
  );
}

export default Home;
