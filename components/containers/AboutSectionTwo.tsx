"use client";
import AboutIntro from "@/components/widgets/about/AboutIntro";
import AboutLargeContent from "@/components/widgets/about/AboutLargeContent";
import AboutLargeImage from "@/components/widgets/about/AboutLargeImage";
import AboutSmallImages from "@/components/widgets/about/AboutSmallImages";
import SectionLines from "@/components/widgets/about/SectionLines";

const AboutSectionTwo = () => {
  return (
    <section className="about-two pt-140 pb-140 scale-wrapper">
      <div className="container">
        <div className="row gutter-24">
          <AboutIntro />
        </div>
      </div>

      <div className="container-lg">
        <div className="row align-items-end">
          <div className="col-12 col-lg-6">
            <AboutLargeImage />
            <AboutLargeContent />
          </div>

          <div className="col-12 col-lg-6">
            <AboutSmallImages />
          </div>
        </div>
      </div>

      <SectionLines />
    </section>
  );
};

export default AboutSectionTwo;
