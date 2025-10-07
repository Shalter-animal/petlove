import Image from "next/image";
import NotFoundImage from "../../public/404/404-mobile.png";
import NotFoundImageTablet from "../../public/404/404-tablet.png";
import { Button } from "@/components/Button";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[calc(100dvh-104px)] mt-5 mx-4 flex flex-col items-center justify-center bg-primary rounded-[30px]">
      <Image
        src={NotFoundImage}
        alt="Not found image"
        className="h-[120px] w-[270px] mb-5 md:hidden"
      />
      <Image
        src={NotFoundImageTablet}
        alt="Not found image"
        className="hidden md:block mb-5 md:h-[300px] md:w-[640px]"
      />
      <p className="text-white font-bold leading-5 mb-5 md:text-2xl">
        Ooops! This page not found :(
      </p>
      <Link href="/">
        <Button
          variant="secondary"
          className="h-[42px] w-[150px] md:h-[48px] md:w-[162px]"
        >
          To home page
        </Button>
      </Link>
    </div>
  );
}
