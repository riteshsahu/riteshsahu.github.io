import { projects } from "@/config/projects";
import { classNames } from "@/utils/helpers";

export default function Projects() {
  return (
    <section className="card">
      <h2 className="heading-2">Projects</h2>

      <ul>
        {projects.map((project) => (
          <li key={project.name} className="mb-10">
            <div className="mb-2">
              <h3 className="heading-3">
                <a
                  rel="noreferrer"
                  href={project.link}
                  target="_blank"
                  className="link"
                >
                  {project.name}
                </a>
              </h3>

              <p className="pb-1">{project.desc}</p>
              <p>
                <span className="text-gray-800">Technology Stack - </span>
                {project.techStack}
              </p>
            </div>
            <div className="flex align-middle my-1 flex-wrap">
              {project.images.map((dt) => (
                <a
                  key={dt}
                  className={classNames(
                    "mr-2 border-2 border-gray-500 mb-2",
                    `js--modal-image-${project.name.toLowerCase()}`
                  )}
                  data-gall={`${project.name?.toLowerCase()}Gallary`}
                  href={dt}
                >
                  <img src={dt} alt="Project Screenshot" className="w-10 h-6" />
                </a>
              ))}
            </div>
            {project.fullTechStack && (
              <div className="mb-1">
                <a
                  className="link-simple flex items-center venobox"
                  data-vbtype="inline"
                  href={`#${project.name?.toLowerCase()}-stack`}
                >
                  <span className="icon icon-unlink pr-2"></span>
                  <span className="text-base hover:underline">
                    View Full Technology Stack
                  </span>
                </a>
                <div
                  className="hidden"
                  id={`${project.name?.toLowerCase()}-stack`}
                >
                  <div className="p-5">
                    <p>{project.fullTechStack}</p>
                  </div>
                </div>
              </div>
            )}
            <a
              rel="noreferrer"
              href={project.link}
              className="link-simple flex items-center"
              target="_blank"
            >
              <span className="icon icon-external-link-symbol pr-2"></span>
              <span className="text-base hover:underline align-baseline">
                Find Out More
              </span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
