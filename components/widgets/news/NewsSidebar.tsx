import SidebarCategories from "./SidebarCategories";
import SidebarRecentPosts from "./SidebarRecentPosts";
import SidebarSearch from "./SidebarSearch";
import SidebarTags from "./SidebarTags";

const NewsSidebar = () => {
  return (
    <div className="news-details__sidebar">
      <SidebarSearch />
      <SidebarCategories />
      <SidebarRecentPosts />
      <SidebarTags />
    </div>
  );
};

export default NewsSidebar;
