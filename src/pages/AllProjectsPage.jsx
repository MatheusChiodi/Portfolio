import AllProjects from '../components/AllProjects';
import NavBar from '../components/NavBar';
import ScrollToTopButton from '../components/ScrollToTopButton';
import Footer from '../components/Footer';

export default function AllProjectsPage() {
  return (
    <div className='max-w-[1920px] mx-auto'>
      <NavBar />
      <div className="p-3 w-full">
        <AllProjects />
        <Footer />
      </div>
      <ScrollToTopButton />
    </div>
  );
}
