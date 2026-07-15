import Image from "next/image";
import Link from "next/link";
import { NewsItem } from "@/public/data/news-data";
import Arrow from "@/public/images/news/arrow.webp";

interface NewsCardProps {
  item: NewsItem;
}

const NewsCard = ({ item }: NewsCardProps) => {
  return (
    <div className={`col-12 col-md-6 col-lg-4 news-item ${item.category}`}>
      <div className="news-three__single">
        <div className="thumb-wrapper">
          <div className="thumb">
            <Image src={item.image} alt={item.imageAlt} className="flip-img" />
          </div>
          <Link href={item.href}>
            Know Details
            <span>
              <Image src={Arrow} alt="Arrow" priority />
            </span>
          </Link>
        </div>
        <div className="news-three__single-content">
          <div className="news-three__meta mb-20">
            <div className="tags">
              {item.tags.map((tag) => (
                <Link key={tag.id} href={tag.href}>
                  {tag.title}
                </Link>
              ))}
            </div>
            <div className="author">
              <p className="text-sm">
                <i className="ph ph-pen"></i>
                {item.author}
              </p>
            </div>
          </div>
          <h2 className="title-xxs fw-5">
            <Link href={item.href}>{item.title}</Link>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
