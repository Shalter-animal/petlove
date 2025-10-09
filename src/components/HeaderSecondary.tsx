import Link from "next/link";
import Image from "next/image";
import LogoSecondary from "../../public/logo/logo-secondary-mobile.svg";
import LogoSecondaryTablet from "../../public/logo/logo-secondary-tablet.svg";
import MenuIcon from "../../public/icons/menu-white-icon.svg";
import UserIcon from "../../public/icons/user-icon.svg";
import { Button } from "./Button";
import { NAV_LINKS } from "@/constans/navigation";

export function HeaderSecondary() {
  return (
    <header className="w-full bg-transparent flex items-center justify-between mt-5">
      <Link href="/" className="">
        <Image
          src={LogoSecondary}
          alt="Logo"
          className="h-[20px] w-[76px] md:hidden"
        />
        <Image
          src={LogoSecondaryTablet}
          alt="Logo"
          className="hidden md:block h-[28px] w-[105px]"
        />
      </Link>

      <nav className="hidden xl:flex gap-2.5 absolute left-1/2 -translate-x-1/2">
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.label}
            className="text-white font-medium leading-[20px] h-12 px-5 flex items-center border rounded-4xl border-white/40 transition duration-300 hover:border-white"
          >
            {link.label}
          </Link>
        ))}
      </nav>
      <div className="flex gap-3 items-center">
        <Button className="hidden md:flex h-[50px] w-[136] cursor-pointer">
          LOG OUT
        </Button>
        <Link href="#" className="flex items-center gap-3">
          <Image
            src={UserIcon}
            alt="User icon"
            className="h-8 w-8 md:h-12 md:w-12"
          />
          <p className="hidden md:flex h-fit font-bold text-[20px] text-white">
            Anna
          </p>
        </Link>
        <Image
          src={MenuIcon}
          alt="Menu icon"
          className="h-6 w-6 md:h-9 md:w-9 xl:hidden cursor-pointer"
        />
      </div>
    </header>
  );
}
