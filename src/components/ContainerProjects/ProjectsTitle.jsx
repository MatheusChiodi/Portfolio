import { ChevronDown } from 'lucide-react';

const ProjectsTitle = ({ title }) => (
  <div className="lg:flex hidden">
    <div
      className="border-[5px] w-[300px] border-dashed border-[#44475A] rounded-[20px]"
      style={{
        boxShadow:
          '0px 4px 6px -1px rgba(0, 0, 0, 0.2), 0px 2px 4px -1px rgba(0, 0, 0, 0.06)',
      }}
    >
      <h1 className="lg:text-[50px] text-[30px] font-semibold w-full text-center">
        {title}
      </h1>
    </div>
    <div className="lineMyProjects">
      <ChevronDown sizex={40} className="iconArrow2" />
    </div>
  </div>
);

export default ProjectsTitle;
