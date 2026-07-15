import NewsArticle from "../widgets/news/NewsArticle";
import NewsComments from "../widgets/news/NewsComments";
import LeaveCommentForm from "../widgets/news/LeaveCommentForm";
import NewsSidebar from "../widgets/news/NewsSidebar";

const NewsDetails = () => {
  return (
    <section className="news-details pt-140 pb-140 template-bg scale-wrapper">
      <div className="container">
        <div className="row gutter-40">
          <div className="col-12 col-xl-8">
            <NewsArticle />

            <NewsComments />

            <LeaveCommentForm />
          </div>

          <div className="col-12 col-xl-4">
            <NewsSidebar />
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsDetails;
