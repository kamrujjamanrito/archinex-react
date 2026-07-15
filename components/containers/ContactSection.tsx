import Link from "next/link";
import Image from "next/image";
import PartnerSlider from "../widgets/PartnerSlider";
import ContactForm from "../widgets/ContactForm";
import one from "@/public/images/contact/map.webp";
import two from "@/public/images/contact/contact-bg.webp";

const ContactSection = () => {
  return (
    <section className="contact-form" id="customerSupport">
      <div className="contact-form__inner pt-140 pb-140">
        <div className="container">
          <div className="row gutter-40 align-items-end">
            <div className="col-12 col-lg-6 col-xxl-5">
              <div className="contact-form__content">
                <div className="contact-form__content-intro fade-up">
                  <h2 className="title-animation fw-5 title-md txt-light-fix">
                    Let&apos;s Get Start With Us.
                  </h2>
                  <p className="text-lg txt-light-fix title-animation">
                    Whether you have questions, want to schedule a tour, or need
                    assistance with a listing, our team is ready to assist
                  </p>
                </div>
                <div className="office-location fade-up" data-delay="100">
                  <div className="location-map">
                    <Image src={one} alt="Image" priority />
                  </div>
                  <div className="location-content">
                    <p className="text-xxl fw-5 template-color">
                      Our Head Office:
                    </p>
                    <p className="mt-16">
                      <Link
                        href="https://share.google/VXsdMDrd6Z5UvhC7E"
                        target="_blank"
                      >
                        123 Main Street, Suite 456, Anytown, USA
                      </Link>
                    </p>
                    <div className="cta mt-16">
                      <Link
                        href="https://share.google/VXsdMDrd6Z5UvhC7E"
                        target="_blank"
                      >
                        <span>View In Map</span>
                        <i className="ph ph-arrow-up-right"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-6 col-xxl-6 offset-xxl-1">
              <div className="contact-form__main fade-up" data-delay="200">
                <p className="text-xxl fw-5 text-white neutral-top">
                  Got a Project in Mind?
                </p>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
        <div className="contact-form-bg">
          <Image src={two} alt="Image" priority />
        </div>
        <hr className="divider" />
        <div className="partner">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <div className="partner__inner">
                  {Array.from({ length: 3 }).map((_, index) => (
                    <PartnerSlider key={index} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
