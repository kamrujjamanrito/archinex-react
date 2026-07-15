"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

import { workTwoData } from "@/public/data/work-two-data";
import { initWorkTwo } from "@/animations/workTwo";

const WorkTwo = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const cleanup = initWorkTwo(setActiveIndex);
    return cleanup;
  }, []);

  return (
    <section className="work-two pt-140 pb-140 template-bg">
      <div className="container-lg">
        <div className="row gutter-16">
          <div className="col-12 col-sm-6">
            <div className="work-two__intro">
              <h2 className="title-animation elicyon title-lg-sm">
                <span className="text-uppercase">
                  {workTwoData.heading.first}
                </span>{" "}
                {workTwoData.heading.second}
              </h2>
            </div>
          </div>

          <div className="col-12 col-sm-6">
            <div className="work-two__cta">
              <Link href={workTwoData.cta.href}>
                <span>{workTwoData.cta.text}</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="work-two__inner mt-80">
        <div className="container-lg">
          <div className="row gutter-40">
            {/* Left Side */}
            <div className="col-12 col-xl-4">
              <div className="work-two__lists">
                <ul>
                  {workTwoData.items.map((item, index) => (
                    <li
                      key={item.id}
                      className={activeIndex === index ? "active" : ""}
                    >
                      <span className="serial">{item.serial}</span>

                      <span className="content title-lg-sm elicyon">
                        {item.title}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Side */}
            <div className="col-12 col-xl-8">
              <div className="work-two__content">
                {/* Images */}
                <div className="work-two__thumbs">
                  {workTwoData.items.map((item, index) => (
                    <div
                      key={item.id}
                      className={`work-two__thumb-single hover-image ${
                        activeIndex === index ? "active" : ""
                      }`}
                      data-displacement="/images/fluid.webp"
                      data-intensity="0.2"
                      data-speedin="1"
                      data-speedout="1"
                    >
                      <Image
                        src={item.image.src}
                        alt={item.image.alt}
                        priority={index === 0}
                      />
                    </div>
                  ))}
                </div>

                {/* Text */}
                <div className="work-two__text">
                  {workTwoData.items.map((item, index) => (
                    <div
                      key={item.id}
                      className={`work-two__text-single ${
                        activeIndex === index ? "active" : ""
                      }`}
                    >
                      <p className="txt-light">
                        {item.description.first}
                      </p>

                      <p className="txt-light mt-40">
                        {item.description.second}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/* End Right */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkTwo;