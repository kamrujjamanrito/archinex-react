import Link from "next/link";
import { sidebarCategories } from "@/public/data/news-list-data";

const SidebarCategories = () => {
  return (
    <div className="sidebar__widget fade-up mt-40">
      <div className="sidebar__widget-header">
        <h4 className="fw-6 title-xxs title-animation neutral-top">
          Trending Categories
        </h4>
      </div>

      <div className="sidebar__categories">
        <ul>
          {sidebarCategories.map((category) => (
            <li key={category.id}>
              <Link href={category.href}>
                {category.title}
                <i className="ph ph-arrow-right"></i>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SidebarCategories;
