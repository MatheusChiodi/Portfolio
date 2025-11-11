import { useState, useEffect } from 'react';
import Loading from '../components/Loading';

function HomePage() {
  const [isLoading, setIsLoading] = useState(true);
  const redirectUrl = 'https://mchiodi.vercel.app/';

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
  } else {
    window.location.href = redirectUrl;
  }
}

export default HomePage;
