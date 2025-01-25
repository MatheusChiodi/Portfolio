import { useState, useEffect } from 'react';

import Loading from '../components/Loading';
import NavBar from '../components/NavBar';
import About from '../components/About';
import Projects from '../components/Projects';
import ScrollToTopButton from '../components/ScrollToTopButton';
import Footer from '../components/Footer';
import Certificates from '../components/Certificates';
import Experience from '../components/Experience';

function HomePage() {
  const [visibleLoading, setVisibleLoading] = useState(false);
  const [visibleContent, setVisibleContent] = useState(false);
  const [visibleAbout, setVisibleAbout] = useState(false);
  const [visibleProjects, setVisibleProjects] = useState(false);
  const [visibleCertificates, setVisibleCertificates] = useState(false);
  const [visibleExperience, setVisibleExperience] = useState(false);
  const [visibleFooter, setVisibleFooter] = useState(false);

  useEffect(() => {
    const lastVisit = localStorage.getItem('lastVisit');
    const now = Date.now();
    const oneHour = 60 * 60 * 1000;

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

    setTimeout(() => setVisibleAbout(true), 2200);
    setTimeout(() => setVisibleProjects(true), 3600);
    setTimeout(() => setVisibleCertificates(true), 4500);
    setTimeout(() => setVisibleExperience(true), 4800);
    setTimeout(() => setVisibleFooter(true), 5000);
  }, []);

  return (
    <>
      {visibleLoading && <Loading />}
      {visibleContent && (
        <>
          <NavBar />
          <div className="p-3 w-full">
            {visibleAbout && <About />}
            {visibleProjects && <Projects />}
            {visibleCertificates && <Certificates />}
            {visibleExperience && <Experience />}
            {visibleFooter && <Footer />}
          </div>
        </>
      )}

      <ScrollToTopButton />
    </>
  );
}

export default HomePage;
