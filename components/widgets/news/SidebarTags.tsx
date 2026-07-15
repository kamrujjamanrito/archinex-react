import Link from "next/link";

import { popularTags } from "@/public/data/news-list-data";

const SidebarTags = () => {
  return (
    <div className="sidebar__widget fade-up mt-40">
      <div className="sidebar__widget-header">
        <h6 className="fw-6 title-animation neutral-top">Popular Tags</h6>
      </div>

      <div className="sidebar__tags">
        {popularTags.map((tag) => (
          <Link key={tag.id} href={tag.href}>
            {tag.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SidebarTags;
