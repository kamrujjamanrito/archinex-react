"use client";
import { useState } from "react";
import Image from "next/image";
import { overviewThreeTabs } from "@/public/data/overview-three-data";

const OverviewThree = () => {
  const [activeTab, setActiveTab] = useState(
    overviewThreeTabs[overviewThreeTabs.length - 1].id,
  );

  return (
    <section className="overview-three">
      <div className="overview-three__wrapper">
        <div className="overview-three__tab-btns">
          {overviewThreeTabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              className={`overview-three-tab-btn${
                activeTab === tab.id ? " active" : ""
              }`}
            >
              {tab.reverseLayout ? (
                <>
                  <span className="tab-ic">
                    <Image src={tab.icon} alt={tab.label} />
                    <i className="ph ph-caret-down" />
                  </span>

                  <span className="fraunces text-xxl italic d-none d-sm-block">
                    {tab.label}
                  </span>
                </>
              ) : (
                <>
                  <span className="fraunces text-xxl italic d-none d-sm-block">
                    {tab.label}
                  </span>

                  <span className="tab-ic">
                    <Image src={tab.icon} alt={tab.label} />
                    <i className="ph ph-caret-down" />
                  </span>
                </>
              )}
            </button>
          ))}
        </div>

        {overviewThreeTabs.map((tab) => (
          <div
            key={tab.id}
            id={tab.id}
            className={`overview-three__single-tab${
              activeTab === tab.id ? " is-active" : ""
            }`}
            style={{
              display: activeTab === tab.id ? "block" : "none",
            }}
          >
            <div className="overview-three__thumb">
              <Image
                src={tab.thumb}
                alt={tab.heading}
                priority={tab.id === activeTab}
                sizes="100vw"
              />
            </div>

            <div className="overview-three__thumb-header">
              <h2 className="fw-6 fraunces title-lg text-uppercase">
                {tab.heading}
              </h2>
            </div>

            <div className="overview-three__list">
              {tab.list.map((item) => (
                <div key={item.id} className="overview-three__list-single">
                  <div className="overview-three__list-single-number">
                    <span className="fw-5">{item.number}</span>
                  </div>

                  <div className="overview-three__list-single-content">
                    <p className="text-sm fw-5 text-uppercase">
                      {item.lineOne.map((line, index) => (
                        <span key={index}>
                          {line}
                          {index !== item.lineOne.length - 1 && <br />}
                        </span>
                      ))}
                    </p>

                    <p className="text-sm fw-5 text-uppercase">
                      {item.lineTwo.map((line, index) => (
                        <span key={index}>
                          {line}
                          {index !== item.lineTwo.length - 1 && <br />}
                        </span>
                      ))}
                    </p>

                    <Image src={item.icon} alt={item.number} className="sr" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OverviewThree;
