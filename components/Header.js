// next image
import Image from "next/image";

// next link
import Link from "next/link";

// components
import Socials from "../components/Socials";

const Header = () => {
  return (
    <header className="absolute z-30 w-full flex items-center  px-0 h-[90px]  my-4">
      <div className="container mx-auto ">
        <div className="flex relative lg:flex-row justify-between items-center xl:gap-y-6 ">
          {/* logo */}
          <Link href={"/"}>
            <Image
              src={"/logo.svg"}
              width={220}
              height={25}
              alt="StartSite logo"
              priority={true}
              className="absolute bottom-[2%] w-full h-full max-w-[180px] max-h-[258px] "
            />
            <Image
              src={"/logo2.svg"}
              width={220}
              height={25}
              alt="StartSite logo"
              priority={true}
              className="-bottom-[150px] animate-spin-slow-nolinear w-full h-full max-w-[190px] max-h-[258px] lg:mt-4"
            />
          </Link>
          {/* socials */}
          <Socials />
        </div>
      </div>
    </header>
  );
};

export default Header;
