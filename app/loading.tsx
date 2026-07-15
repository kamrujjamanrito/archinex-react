const Loading = () => {
  return (
    <div className="preloader">
      <div className="preloader-inner">
        <div className="preloader-logo">
          <span>LOADING</span>
        </div>
        <div className="preloader-bar">
          <div className="preloader-progress"></div>
        </div>
        <div className="preloader-count">0%</div>
      </div>
    </div>
  );
};

export default Loading;
