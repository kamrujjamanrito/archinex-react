"use client";
import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import ErrorImage from "@/public/images/error.webp";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Caught an error:", error);
  }, [error]);

  return (
    <section className="error">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-xl-7">
            <div className="error__content text-center">
              <div className="thumb">
                <Image src={ErrorImage} alt="Image" priority />
              </div>
              <h3 className="title-animation">Something went wrong</h3>
              <p className="title-animation">
                Sorry, an unexpected error occurred. Please try again later.
              </p>
              <p className="text-danger mt-3 title-animation">
                {error.message}
              </p>
              <div className="cta d-flex justify-content-center gap-3 mt-60">
                <button
                  onClick={() => reset()}
                  className="btn-primary"
                  aria-label="try again"
                  title="Try Again"
                >
                  <span className="btn-animated-text" data-text="Try Again">
                    Try Again
                  </span>
                </button>
                <Link
                  href="contact-us"
                  aria-label="contact us"
                  title="contact us"
                  className="btn-primary"
                >
                  <span className="btn-animated-text" data-text="Contact Us">
                    Contact Us
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
