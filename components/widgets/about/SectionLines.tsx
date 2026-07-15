const SectionLines = () => {
  return (
    <div className="lines-cr">
      {Array.from({ length: 6 }).map((_, index) => (
        <div
          key={index}
          className="line-cr"
        />
      ))}
    </div>
  );
};

export default SectionLines;