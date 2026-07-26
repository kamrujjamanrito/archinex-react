import Link from "next/link";
import { ServiceItem } from "@/public/data/service-data";

interface ServiceCardProps {
  item: ServiceItem;
  isActive?: boolean;
}

const ServiceCard = ({ item, isActive = false }: ServiceCardProps) => {
  const { title, description, href, tag, total, number } = item;

  return (
    <div
      className={`service__list-single scale-up${isActive ? " active" : ""}`}
    >
      <div className="service__list-single-left">
        <h3 className="title-lg-sm fw-5">
          <Link href={href}>{title}</Link>
        </h3>

        <div className="sup-cs">
          <Link href={href}>
            Details
            <i className="ph ph-arrow-up-right"></i>
          </Link>
        </div>
      </div>

      <div className="service__list-single-right">
        <div className="service__content">
          <p>{description}</p>
        </div>

        <div className="service__cta">
          <span className="tag text-sm">{tag}</span>

          <div className="breadcrumb-cs">
            <span>{String(total).padStart(2, "0")}</span>

            <span className="divider-cs">/</span>

            <span>{number}</span>
          </div>
        </div>
      </div>

      <div className="line"></div>
    </div>
  );
};

export default ServiceCard;
