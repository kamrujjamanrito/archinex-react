import Link from "next/link";

import HoverImage from "./HoverImage";
import { WorkItem } from "@/public/data/work-data";

interface WorkCardProps {
  item: WorkItem;
  priority?: boolean;
}

const WorkCard = ({ item, priority = false }: WorkCardProps) => {
  const {
    title,
    href,
    number,
    image,
    imageAlt,
    imageFirst,
    cardClass,
    arrowAlt,
  } = item;

  const content = (
    <div className={imageFirst ? "content mt-30" : "content"}>
      <span className="fraunces italic text-lg fw-5">{number}</span>

      <Link href={href} aria-label={title}>
        <span className="text-xxl fw-5 maison-neue text-uppercase">
          {title}
        </span>
      </Link>
    </div>
  );

  const thumb = (
    <HoverImage
      image={image}
      imageAlt={imageAlt}
      href={href}
      arrowAlt={arrowAlt}
      priority
    />
  );

  return (
    <article
      className={`work__single hover-item scale-up ${cardClass ?? ""}`.trim()}
    >
      {imageFirst ? (
        <>
          {thumb}
          {content}
        </>
      ) : (
        <>
          {content}
          {thumb}
        </>
      )}
    </article>
  );
};

export default WorkCard;
