import dynamic from "next/dynamic";
import Link from "next/link";
import Image from "next/image";
import NavbarData from "@/public/data/navbar-data";

const HeaderClient = dynamic(() => import("./HeaderClient"));
const LogoSm = dynamic(() => import("./LogoSm"));
const OffcanvasTrigger = dynamic(() => import("./OffCanvasTrigger"));

const HeaderFour = () => {
  return (
    <HeaderClient>
      <header className="header header-four">
        <div className="container-lg">
          <div className="row">
            <div className="col-12">
              <div className="main-header__menu-box">
                <nav className="navbar p-0">
                  <div className="navbar-logo">
                    <Link href="/">
                      <LogoSm />
                    </Link>
                    <div className="">
                      <p className="fw-3 txt-light">Designing</p>
                      <p className="mt-8">
                        <span className="txt-light">Crafting</span>
                        <span className="dot"></span>
                        <span className="template-color fw-5">
                          Visualization
                        </span>
                      </p>
                    </div>
                  </div>
                  <div className="navbar__menu-wrapper">
                    <div className="navbar__menu d-none d-xl-block">
                      <ul className="navbar__list">
                        {NavbarData.map((item, index) => {
                          if (item.megabar) {
                            return (
                              <li
                                className="navbar__item navbar__item--has-children d-none d-xl-block"
                                key={index}
                              >
                                <a className="navbar__dropdown-label dropdown-label-alter">
                                  {item.title}
                                </a>

                                <ul className="navbar__sub-menu mega-menu">
                                  {item.megabar.map((mega, i) => (
                                    <li key={i}>
                                      <div className="mega-content-wrapper">
                                        <Image
                                          src={mega.image}
                                          alt={mega.title}
                                          loading="eager"
                                        />
                                        <div className="mega-content">
                                          <Link href={mega.path}>
                                            View Demo
                                          </Link>
                                        </div>
                                      </div>

                                      <Link href={mega.path}>{mega.title}</Link>
                                    </li>
                                  ))}
                                </ul>
                              </li>
                            );
                          }

                          if (item.submenu) {
                            return (
                              <li
                                className={`navbar__item navbar__item--has-children ${
                                  item.title === "Home"
                                    ? "d-block d-xl-none nav-fade"
                                    : "nav-fade"
                                }`}
                                key={index}
                              >
                                <a className="navbar__dropdown-label dropdown-label-alter">
                                  {item.title}
                                </a>

                                <ul className="navbar__sub-menu">
                                  {item.submenu.map((sub, i) => (
                                    <li key={i}>
                                      <Link href={sub.path}>{sub.title}</Link>
                                    </li>
                                  ))}
                                </ul>
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
                    <div className="navbar__options">
                      <div className="navbar__mobile-options d-none d-sm-block">
                        <Link href="contact-us" className="btn-primary">
                          <span
                            className="btn-animated-text"
                            data-text="Get In Touch"
                          >
                            Get In Touch
                          </span>
                        </Link>
                      </div>
                      <OffcanvasTrigger />
                    </div>
                  </div>
                </nav>
                <div className="header-line d-flex d-md-none">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </HeaderClient>
  );
};

export default HeaderFour;
