import Link from "next/link";
import Image from "next/image";
import type { TeamMember } from "@/public/data/team-data";
import one from "@/public/images/arrow-lg.webp";

interface TeamCardProps {
  member: TeamMember;
}

const TeamCard = ({ member }: TeamCardProps) => {
  return (
    <div
      className="team-three__single fade-up"
      data-delay={member.animationDelay}
    >
      <div className="thumb-wrapper">
        <div className="thumb">
          <Image
            src={member.image}
            alt={member.imageAlt}
            className="parallax-image"
            priority
          />
        </div>
        <div className="thumb-content">
          <div className="thumb-content-top">
            <p>
              <Link href={`mailto:${member.email}`}>{member.email}</Link>
            </p>
            <p className="mt-12">
              <Link href={`tel:${member.phone.replace(/\s+/g, "")}`}>
                {member.phone}
              </Link>
            </p>
          </div>
          <div className="thumb-content-bottom">
            <Link href={member.profileLink}>
              <Image src={one} alt="Arrow" priority />
              <span className="text-uppercase">Get in Touch</span>
            </Link>
          </div>
        </div>
      </div>
      <div className="team-three__content mt-20">
        <h3 className="title-xxs">
          <Link href={member.profileLink}>{member.name}</Link>
        </h3>
        <p className="txt-light">{member.designation}</p>
      </div>
    </div>
  );
};

export default TeamCard;
