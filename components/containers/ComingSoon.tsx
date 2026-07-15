import dynamic from "next/dynamic";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/public/images/logo-light.svg";
import NewsLetter from "../widgets/NewsLetter";

const CountDown = dynamic(() => import("@/components/widgets/CountDown"));

const ComingSoon = () => {
  return (
    <section className="soon">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="soon__inner">
              <div className="soon__logo">
                <Link href="/">
                  <Image src={Logo} alt="Image" priority />
                </Link>
              </div>
              <CountDown />
              <div className="content">
                <h4 className="title-animation text-center">
                  Something exciting is coming!
                </h4>
                <p>Exciting updates are on the way.</p>
                <p>Stay with us!</p>
                <NewsLetter />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComingSoon;
