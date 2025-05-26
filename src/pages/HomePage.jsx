import { useState, useEffect } from 'react';

import Loading from '../components/Loading';
import NavBar from '../components/NavBar';
import About from '../components/About';
import Projects from '../components/Projects';
import ScrollToTopButton from '../components/ScrollToTopButton';
import Footer from '../components/Footer';
import Certificates from '../components/Certificates';
import Experience from '../components/Experience';
import YoutubeSection from '../components/YoutubeSection';

function HomePage() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const lastVisit = localStorage.getItem('lastVisit');
    const now = Date.now();
    const oneHour = 60 * 60 * 1000;

    if (!lastVisit || now - parseInt(lastVisit, 10) > oneHour) {
      localStorage.setItem('lastVisit', now.toString());

      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 1300);

      return () => clearTimeout(timer);
    } else {
      setIsLoading(false);
    }
  }, []);

  if (isLoading) {
    return (
      <div className="max-w-[1920px] mx-auto">
        <Loading />
      </div>
    );
  }

  return (
    <div className="max-w-[1920px] mx-auto">
      <NavBar />
      <div className="p-3 w-full">
        <About />
        <Projects />
        <Certificates />
        <Experience />
        <YoutubeSection />
      </div>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}

export default HomePage;
