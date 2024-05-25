import { projects } from "@/config/projects";
import { useEffect } from "react";
import VenoBox from "venobox";

export default function AnimationProvider({ children }) {
  useEffect(() => {
    new VenoBox({
      selector: ".venobox",
    });

    new VenoBox({
      selector: ".js--contact-me",
      maxWidth: "700px",
    });

    projects.map(
      (project) =>
        new VenoBox({
          selector: `.js--modal-image-${project.name.toLowerCase()}`,
          maxWidth: "80%", // default: ''
          numeratio: true, // default: false
          infinigall: true, // default: false
        })
    );
  }, [])

  return children;
}
