import Image from "next/image";
import Link from "next/link";
import type { NewsListItem as NewsListItemType } from "@/public/data/news-list-data";
import Arrow from "@/public/images/news/arrow.webp";

interface NewsListItemProps {
  item: NewsListItemType;
  index: number;
  isLast?: boolean;
}

const NewsListItem = ({ item, index, isLast = false }: NewsListItemProps) => {
  return (
    <div
      className={`news-three__single ${
        index === 0 ? "" : isLast ? "mb-0 mt-60" : "mt-60"
      }`}
    >
      <div className="thumb-wrapper">
        <div className="thumb thumb-list">
          <Image
            src={item.image}
            alt={item.imageAlt}
            className="parallax-image"
            priority={item.id === 1}
          />
        </div>
        <Link href={item.href}>
          Know Details
          <span>
            <Image src={Arrow} alt="Arrow" priority={item.id === 1} />
          </span>
        </Link>
      </div>
      <div className="news-three__single-content">
        <div className="news-three__meta mb-20">
          <div className="author">
            <p className="text-sm">
              <i className="ph ph-calendar-dots"></i>
              {item.date}
            </p>

            <p className="text-sm">
              <i className="ph ph-user-circle-check"></i>
              {item.author}
            </p>
          </div>

          <div className="tags">
            {item.tags.map((tag) => (
              <Link key={tag.id} href={tag.href}>
                {tag.title}
              </Link>
            ))}
          </div>
        </div>
        <div className="news-three__content-group">
          <h2 className="title-lg-sm fw-5">
            <Link href={item.href}>{item.title}</Link>
          </h2>
          <p className="txt-light mt-12">{item.excerpt}</p>
        </div>
      </div>
    </div>
  );
};

export default NewsListItem;
