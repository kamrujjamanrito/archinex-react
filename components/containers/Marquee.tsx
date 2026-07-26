import Image from "next/image";
import Link from "next/link";
import { marqueeItems } from "@/public/data/marquee-data";

const Marquee = () => {
  return (
    <section className="service marquee pt-140 scale-wrapper template-bg">
      <div className="container-lg">
        <div className="row">
          <div className="col-12">
            <hr className="divider mb-80" />
          </div>
        </div>
      </div>

      <div className="service-marquee">
        <div className="service__marquee-inner">
          {Array.from({ length: 3 }).map((_, sliderIndex) => (
            <div className="service__slider view-cursor" key={sliderIndex}>
              {marqueeItems.map((item) => (
                <div
                  className="service__single"
                  key={`${sliderIndex}-${item.id}`}
                >
                  <h2 className="title-xl fraunces fw-4 italic">
                    <Link href={item.href}>{item.title}</Link>
                  </h2>

                  <Image
                    src={item.image}
                    alt={item.title}
                    priority={sliderIndex === 0}
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="container-lg">
        <div className="row">
          <div className="col-12">
            <hr className="divider mt-80" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Marquee;
