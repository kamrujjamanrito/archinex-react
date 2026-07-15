import { newsListData } from "@/public/data/news-list-data";
import NewsListItem from "../widgets/news/NewsListItem";
import NewsSidebar from "../widgets/news/NewsSidebar";

const NewsList = () => {
  return (
    <section className="news-three pt-140 pb-140">
      <div className="container">
        <div className="row">
          <div className="col-12 col-xl-8">
            <div className="news-three__single-wrapper">
              {newsListData.map((item, index) => (
                <NewsListItem
                  key={item.id}
                  item={item}
                  index={index}
                  isLast={index === newsListData.length - 1}
                />
              ))}
            </div>
          </div>
          <div className="col-12 col-xl-4">
            <NewsSidebar />
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsList;
