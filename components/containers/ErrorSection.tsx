import Link from "next/link";
import Image from "next/image";
import ErrorImage from "@/public/images/error.webp";

const ErrorSection = () => {
  return (
    <section className="error">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-xl-7">
            <div className="error__content text-center">
              <div className="thumb">
                <Image src={ErrorImage} alt="Image" priority />
              </div>
              <h3 className="title-animation">Page Not Found</h3>
              <p className="title-animation">
                It could have been removed, renamed, or temporarily unavailable.
                Try searching for what you&apos;re looking for.
              </p>
              <div className="cta mt-60">
                <Link
                  href="/"
                  aria-label="back to home"
                  title="back to home"
                  className="btn-primary"
                >
                  <span className="btn-animated-text" data-text="Back To Home">
                    Back To Home
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ErrorSection;
