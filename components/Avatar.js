import Image from "next/image";

const Avatar = ({src}) => {
  return (
    <div className="hidden xl:flex xl:max-w-none">
      <Image
        src={src}
        width={737}
        height={678}
        alt=""
        className="translate-z-0 "
        priority
      />
    </div>
  );
};

export default Avatar;
