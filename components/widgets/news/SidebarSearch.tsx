import { searchPosts } from "@/actions/search-post";

const SidebarSearch = () => {
  return (
    <div className="sidebar__widget fade-up">
      <div className="sidebar__widget-header">
        <h3 className="fw-6 title-xxs title-animation neutral-top">
          Enter Keyword
        </h3>
      </div>

      <div className="sidebar__widget-search">
        <form action={searchPosts} autoComplete="off">
          <div className="search-wrap">
            <input
              type="search"
              name="search-field-post"
              id="searchFieldPost"
              placeholder="Enter Keyword"
              required
            />

            <button
              type="submit"
              aria-label="Search posts"
              title="Search posts"
            >
              <i className="ph ph-magnifying-glass"></i>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SidebarSearch;
