import Image from "next/image";
import Link from "next/link";

import { recentPosts } from "@/public/data/news-list-data";

const SidebarRecentPosts = () => {
  return (
    <div className="sidebar__widget fade-up mt-40">
      <div className="sidebar__widget-header">
        <h5 className="fw-6 title-xxs title-animation neutral-top">
          Recent Blogs
        </h5>
      </div>

      <div className="recent-item-wrapper">
        {recentPosts.map((post) => (
          <div key={post.id} className="recent-item-single">
            <div className="recent-thumb">
              <Link href={post.href}>
                <Image
                  src={post.image}
                  alt={post.imageAlt}
                  priority={post.id === 1}
                />
              </Link>
            </div>

            <div className="recent-content">
              <p className="txt-light text-sm">{post.date}</p>

              <h6 className="fw-6">
                <Link href={post.href}>{post.title}</Link>
              </h6>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SidebarRecentPosts;
