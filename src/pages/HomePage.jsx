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
  const [visibleLoading, setVisibleLoading] = useState(false);
  const [visibleContent, setVisibleContent] = useState(false);

  useEffect(() => {
    const lastVisit = localStorage.getItem('lastVisit');
    const now = Date.now();
    const oneHour = 60 * 60 * 3000;

    if (!lastVisit || now - parseInt(lastVisit, 10) > oneHour) {
      setVisibleLoading(true);
      localStorage.setItem('lastVisit', now);

      setTimeout(() => {
        setVisibleLoading(false);
        setVisibleContent(true);
      }, 1300);
    } else {
      setVisibleContent(true);
    }
  }, []);

  return (
    <div className="max-w-[1920px] mx-auto">
      {visibleLoading && <Loading />}
      {visibleContent && (
        <>
          <NavBar />
          <div className="p-3 w-full">
            <About />
            <Projects />
            <Certificates />
            <Experience />
            <YoutubeSection />
          </div>
          <Footer />
        </>
      )}

      <ScrollToTopButton />
    </div>
  );
}

export default HomePage;
