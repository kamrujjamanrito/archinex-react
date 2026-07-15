"use client";

import Image from "next/image";
import Link from "next/link";

import { instagramData } from "@/public/data/instagram-data";

const InstagramFeed = () => {
  return (
    <section className="insta-feed pt-140 pb-140 bg-alt">
      <div className="container-lg">
        <div className="row align-items-center">
          <div className="col-12 col-sm-5">
            <div className="insta-feed__profile">
              <p className="text-xxl fw-5 maison-neue">
                {instagramData.username}
              </p>
            </div>
          </div>

          <div className="col-12 col-sm-7">
            <div className="insta-feed__title">
              <p className="txt-light-6">
                {instagramData.title}
              </p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <div className="insta-feed__inner mt-35">
              {[1, 2].map((slider) => (
                <div
                  key={slider}
                  className="insta-feed__slider"
                >
                  {instagramData.items.map((item) => (
                    <div
                      key={`${slider}-${item.id}`}
                      className="insta-feed__single"
                    >
                      <Image
                        src={item.image}
                        alt={item.alt}
                      />

                      <Link href={instagramData.href}>
                        <i className="ph ph-instagram-logo"></i>
                      </Link>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstagramFeed;