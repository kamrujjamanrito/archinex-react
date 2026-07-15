"use client";
import { useState } from "react";
import Image from "next/image";
import YoutubeEmbed from "../widgets/YoutubeEmbed";
import VideoBg from "@/public/images/video-bg.webp";
import LogoBg from "@/public/images/logo-bg.webp";

const VideoSection = () => {
  const [videoActive, setVideoActive] = useState(false);
  return (
    <>
      <div className="video-container">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="video-container__inner">
                <Image
                  src={VideoBg}
                  alt="Image"
                  priority
                  className="parallax-image"
                />
                <div className="video-cta-wrapper">
                  <div className="discover">
                    <p>
                      Discover
                      <span></span>
                      Success Stories
                    </p>
                  </div>
                  <div className="video__button-wrapper">
                    <Image src={LogoBg} alt="Image" priority />
                    <div className="btn-wrapper">
                      <a
                        title="video Player"
                        className="open-video-popup"
                        onClick={() => setVideoActive(true)}
                      >
                        <span className="video-icon">
                          <i className="ph-fill ph-play"></i>
                        </span>
                        <span className="text-xl maison-neue fw-6">
                          Play Showreel
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={
          (videoActive ? " video-zoom-in-c" : " ") + " video-backdrop-c"
        }
        onClick={() => setVideoActive(false)}
      >
        <div className="video-inner-c">
          <div
            className="video-container-c"
            onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) =>
              e.stopPropagation()
            }
          >
            {videoActive && (
              <YoutubeEmbed
                embedId="bjxTIcuzB6k"
                params="?si=h65tIoHuSmyioAeQ"
              />
            )}
            <button
              aria-label="close video popup"
              className="close-video-popup-c"
              onClick={() => setVideoActive(false)}
            >
              <i className="fa-solid fa-xmark"></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoSection;
