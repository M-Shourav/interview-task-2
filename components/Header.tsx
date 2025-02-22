"use client";
import Image from "next/image";
import Container from "./Container";
import { logo } from "@/public/images";
import Link from "next/link";
import { navLinks } from "@/constant";
import { usePathname } from "next/navigation";
import MobileNavigation from "./MobileNavigation";

const Header = () => {
  const pathName = usePathname();
  return (
    <div className="w-full h-20 bg-white shadow-md sticky top-0 left-0 z-10">
      <Container className="w-full h-full flex items-center justify-between md:justify-evenly">
        <Link href={"/"}>
          <Image
            src={logo}
            alt="logo"
            className="w-40 h-full"
            priority={true}
          />
        </Link>
        <div
          className="hidden md:inline-flex items-center gap-5 text-[15px]
        font-medium uppercase tracking-wide"
        >
          {navLinks?.map((item) => (
            <Link
              href={item?.link}
              key={item?.name}
              className={`hover:text-indigo-600 duration-300 ease-in-out group relative ${
                item?.link === pathName && "text-blue-600"
              }`}
            >
              {item?.name}
              <span
                className="w-0 group-hover:w-full h-[1px] bg-sky-600
                 inline-flex absolute bottom-0 left-0 duration-500"
              />
            </Link>
          ))}
        </div>
        {/* mobile version */}
        <div className="inline-flex md:hidden">
          <MobileNavigation />
        </div>
      </Container>
    </div>
  );
};

export default Header;
