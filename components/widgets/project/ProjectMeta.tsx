import dynamic from "next/dynamic";
import { ProjectCounterItem } from "@/types/project-details.types";

const Counter = dynamic(() => import("../Counter"));

interface Props {
  item: ProjectCounterItem;
}

const ProjectMeta = ({ item }: Props) => {
  return (
    <div className="project-details-meta__single fade-up">
      <p className="txt-light">{item.title}</p>

      <div className="counter-meta">
        <h2 className="title-md fw-6">
          <Counter value={item.value} />{" "}
          {item.suffix && <span className="prefix">{item.suffix}</span>}
        </h2>
      </div>
    </div>
  );
};

export default ProjectMeta;
