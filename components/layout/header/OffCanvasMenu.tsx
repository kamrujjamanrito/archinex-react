"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import AnimateHeight from "react-animate-height";
import NavbarData from "@/public/data/navbar-data";
import Logo from "./Logo";

interface OffCanvasMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const OffCanvasMenu = ({ isOpen, onClose }: OffCanvasMenuProps) => {
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);

  const handleDropdownToggle = (index: number) => {
    setOpenDropdown((prev) => (prev === index ? null : index));
  };

  const menuWrapperRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (isOpen && menuWrapperRef.current) {
      const fadeEls =
        menuWrapperRef.current.querySelectorAll<HTMLElement>(".nav-fade");

      fadeEls.forEach((el, i) => {
        const baseDelay = 1.75;
        const step = 0.25;
        const delay = baseDelay + i * step;
        el.style.animationDelay = `${delay}s`;
      });
    }
  }, [isOpen]);
  return (
    <>
      <div
        className={`mobile-menu d-block d-xxl-none ${
          isOpen ? " show-menu" : " "
        }`}
        data-lenis-prevent
      >
        <nav className="mobile-menu__wrapper" ref={menuWrapperRef}>
          <div className="mobile-menu__header nav-fade">
            <div className="logo">
              <Link href="/" aria-label="home page" title="logo">
                <Logo />
              </Link>
            </div>
            <button
              aria-label="close mobile menu"
              className="close-mobile-menu"
              onClick={onClose}
            >
              <i className="ti ti-x"></i>
            </button>
          </div>
          <div className="mobile-menu__list">
            <ul className="navbar__list">
              {NavbarData.map((item, index) => {
                const menuItems = item.submenu || item.megabar;

                if (menuItems) {
                  return (
                    <li
                      className="navbar__item navbar__item--has-children nav-fade"
                      key={index}
                    >
                      <a
                        aria-label="dropdown menu"
                        className={`navbar__dropdown-label dropdown-label-alter ${
                          openDropdown === index ? "navbar__item-active" : ""
                        }`}
                        onClick={() => handleDropdownToggle(index)}
                      >
                        {item.title}
                      </a>

                      <AnimateHeight
                        duration={400}
                        height={openDropdown === index ? "auto" : 0}
                      >
                        <ul className="navbar__sub-menu">
                          {menuItems.map((sub, i) => (
                            <li key={i}>
                              <Link href={sub.path}>{sub.title}</Link>
                            </li>
                          ))}
                        </ul>
                      </AnimateHeight>
                    </li>
                  );
                }

                return (
                  <li className="navbar__item nav-fade" key={index}>
                    <Link href={item.path}>{item.title}</Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="mobile-menu__cta d-block d-md-none nav-fade">
            <Link href="contact-us" className="btn-primary">
              <span className="btn-animated-text" data-text="Get In Touch">
                Get In Touch
              </span>
            </Link>
          </div>
          <div className="mobile-menu__social social nav-fade">
            <ul className="social">
              <li>
                <Link
                  href="https://www.linkedin.com/"
                  target="_blank"
                  aria-label="share us on linkedin"
                  title="linkedin"
                  className="hover-line-bottom-gray"
                >
                  Linkedin
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.facebook.com/"
                  target="_blank"
                  aria-label="share us on facebook"
                  title="facebook"
                  className="hover-line-bottom-gray"
                >
                  Facebook
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.instagram.com/"
                  target="_blank"
                  aria-label="share us on instagram"
                  title="instagram"
                  className="hover-line-bottom-gray"
                >
                  Instagram
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <div
        className={`mobile-menu__backdrop ${
          isOpen ? " mobile-menu__backdrop-active" : " "
        }`}
        onClick={onClose}
      ></div>
    </>
  );
};

export default OffCanvasMenu;
