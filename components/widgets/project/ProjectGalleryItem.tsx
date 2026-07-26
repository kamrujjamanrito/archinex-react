import HoverImage from "../HoverImage";
import { ProjectGalleryItem as GalleryItem } from "@/types/project-details.types";

interface Props {
  item: GalleryItem;
}

const ProjectGalleryItem = ({ item }: Props) => {
  return (
    <div className="project-details__single">
      <HoverImage
        image={item.image}
        imageAlt={item.title ?? "Project Image"}
        href="#"
        arrowAlt="View Project"
        className="thumb hover-image scale-up"
      />

      {(item.title || item.description) && (
        <div className="content mt-40">
          {item.title && (
            <p className="text-xxl fw-5 maison-neue">{item.title}</p>
          )}

          {item.description?.map((text, index) => (
            <p key={index} className={index > 0 ? "mt-20" : ""}>
              {text}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProjectGalleryItem;
