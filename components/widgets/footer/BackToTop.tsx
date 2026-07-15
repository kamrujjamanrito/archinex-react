"use client";

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

const BackToTop = () => {
  return (
    <button
      className="back-to-top"
      aria-label="back to top"
      title="back to top"
      onClick={scrollToTop}
    >
      <i className="ph ph-caret-up"></i>
      Back to Top
    </button>
  );
};

export default BackToTop;
