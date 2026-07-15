import dynamic from "next/dynamic";
import Link from "next/link";
import Image from "next/image";
import NavbarTwoData from "@/public/data/navbar-two-data";

const HeaderClient = dynamic(() => import("./HeaderClient"));
const Logo = dynamic(() => import("./Logo"));
const OffcanvasTrigger = dynamic(() => import("./OffCanvasTrigger"));

const HeaderTwo = () => {
  return (
    <HeaderClient>
      <header className="header header-two">
        <div className="container-lg">
          <div className="row">
            <div className="col-12">
              <div className="main-header__menu-box">
                <nav className="navbar p-0">
                  <div className="navbar-logo">
                    <Link href="/">
                      <Logo />
                    </Link>
                  </div>
                  <div className="navbar__menu-wrapper">
                    <div className="brand-date d-none d-sm-block">
                      <span>- Since 1994 -</span>
                    </div>
                    <div className="navbar__menu d-none d-xl-block">
                      <ul className="navbar__list">
                        {NavbarTwoData.map((item, index) => {
                          if (item.megabar) {
                            return (
                              <li
                                key={index}
                                className="navbar__item navbar__item--has-children d-none d-xl-block"
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
                                key={index}
                                className={`navbar__item navbar__item--has-children ${
                                  item.title === "Home"
                                    ? "d-block d-xl-none nav-fade"
                                    : "nav-fade"
                                }`}
                              >
                                <a className="navbar__dropdown-label dropdown-label-alter">
                                  {item.title}
                                </a>

                                <ul className="navbar__sub-menu">
                                  {item.submenu.map((sub, i) => (
                                    <li
                                      key={i}
                                      className={
                                        sub.submenu
                                          ? "navbar__item navbar__item--has-children"
                                          : ""
                                      }
                                    >
                                      {sub.submenu ? (
                                        <>
                                          <a className="navbar__dropdown-label navbar__dropdown-label-sub">
                                            {sub.title}
                                          </a>

                                          <ul className="navbar__sub-menu navbar__sub-menu__nested">
                                            {sub.submenu.map((child, j) => (
                                              <li key={j}>
                                                <Link href={child.path}>
                                                  {child.title}
                                                </Link>
                                              </li>
                                            ))}
                                          </ul>
                                        </>
                                      ) : (
                                        <Link href={sub.path}>{sub.title}</Link>
                                      )}
                                    </li>
                                  ))}
                                </ul>
                              </li>
                            );
                          }
                          return (
                            <li key={index} className="navbar__item nav-fade">
                              <Link href={item.path}>{item.title}</Link>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                    <div className="navbar__options">
                      <div className="navbar__mobile-options d-none d-sm-block">
                        <Link href="contact-us"> Contact Us </Link>
                      </div>
                      <OffcanvasTrigger />
                    </div>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>
    </HeaderClient>
  );
};

export default HeaderTwo;
