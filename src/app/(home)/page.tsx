import Image from "next/image";
import HomeImg from "../../../public/home/home-img.png";
import HomeTabletImg from "../../../public/home/home-img-tablet.png";
import { HeaderSecondary } from "@/components/HeaderSecondary";

export default function Home() {
  return (
    <main className="h-[calc(100dvh-20px)] md:h-[calc(100dvh-35px)] flex flex-col  px-4 pt-2.5 md:px-8 md:pt-3.5">
      <div className="bg-primary flex-1 rounded-4xl md:rounded-[60px] flex flex-col items-center px-5 md:px-8 py-8">
        <div className="max-w-[1280px] flex flex-col items-center">
          <HeaderSecondary />
          <div className="flex flex-col md:items-start md:text-left md:flex-1 md:mt-10 xl:flex-row xl:items-center xl:justify-between">
            <h1 className="font-bold text-white text-5xl md:text-[80px] leading-12 md:leading-[77px] mt-16 md:mt-[90px] tracking-[-0.05em] xl:text-[90px]">
              Take good <span className="text-white/40">care</span> of your
              small pets
            </h1>
            <p className="text-white font-medium text-sm leading-[18px] tracking-[-0.02em] mt-6 md:mt-8 md:text-lg md:leading-[22px] md:w-[255px] md:self-end">
              Choosing a pet for your home is a choice that is meant to enrich
              your life with immeasurable joy and tenderness.
            </p>
          </div>
        </div>
      </div>

      <div className="flex-1">
        <Image
          src={HomeImg}
          alt="Home image"
          className="md:hidden w-full h-full object-cover rounded-[30px]"
        />
        <Image
          src={HomeTabletImg}
          alt="Home image"
          className="hidden md:block w-full h-full object-cover rounded-[60px]"
        />
      </div>
    </main>
  );
}
