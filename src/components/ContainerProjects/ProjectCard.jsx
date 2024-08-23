const ProjectCard = ({ project }) => {
  if (!project) {
    return null;
  }
  return (
    <div
      key={project.id}
      className="w-[250px] h-[250px] mb-[20px] lg:mb-[10px] bg-[#44475A] rounded-t-[20px] rounded-b-[20px] card mx-auto"
      style={{
        boxShadow:
          '2px 5px 6px -1px rgba(0, 0, 0, 0.2), 0px 2px 4px -1px rgba(0, 0, 0, 0.06)',
      }}
    >
      <div className="rounded-br-[40px] h-[140px] rounded-t-[20px] imgCard">
        <img
          src={`${import.meta.env.BASE_URL}/${project.image}`}
          alt={`${project.title} image`}
          className="w-full rounded-br-[40px] h-[140px] text-[#F8F8F2] rounded-t-[20px]"
        />
      </div>
      <div className="rounded-br-[40px] h-[140px] lg:text-[#44475A] text-[#F8F8F2] rounded-b-[20px] textCard">
        <p className="w-full text-center font-medium text-[20px] text-[#FF5555] mt-2">
          {project.title}
        </p>
        <div className="m-0 p-0 text-[16px]">
          <p className="w-full text-center text-[#F8F8F2]">
            {project.description}
          </p>
          {project.subdescription && (
            <p className="restTextCard w-full text-center mt-4 text-[#F8F8F2]">
              {project.subdescription}
            </p>
          )}
          <p className="restTextCard w-full text-center mt-2">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#F8F8F2] hover:text-[#FF5555]"
            >
              <i className="fas fa-eye"></i>
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
