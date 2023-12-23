import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Header from '../components/Header';

function Home() {
  return (
    <div className="flex flex-col justify-between h-screen">
      <Navbar />
      <Header />
      <Footer />
    </div>
  );
}

export default Home;
