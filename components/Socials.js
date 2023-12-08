// links
import Link from "next/link";

// icons
import { RiWhatsappLine } from "react-icons/ri";
import { FaGithub } from "react-icons/fa6";
import { LuTwitter } from "react-icons/lu";
import { FaFacebook, FaLinkedin } from "react-icons/fa";

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-2xl">
      <Link
        href={"https://github.com/SamehHammad"}
        className="hover:text-accent transition-all duration-300"
      >
        <FaGithub />
      </Link>
      <Link
        href={"https://www.linkedin.com/in/sameh-hammad-b20019246/"}
        className="hover:text-accent transition-all duration-300"
      >
        <FaLinkedin />
      </Link>
      <Link
        href={"https://wa.me/01112967597"}
        className="hover:text-accent transition-all duration-300"
      >
        <RiWhatsappLine />
      </Link>
      <Link
        href={"https://twitter.com/SamehHammad17"}
        className="hover:text-accent transition-all duration-300"
      >
        <LuTwitter />
      </Link>
      <Link
        href={"https://www.facebook.com/same7.hammad/"}
        className="hover:text-accent transition-all duration-300"
      >
        <FaFacebook />
      </Link>
    </div>
  );
};

export default Socials;
