import { NAV_LINKS } from "@/constans/navigation";
import { X } from "lucide-react";
import Link from "next/link";
import { Button } from "./Button";

interface SidevarProps {
  toggleMenu: () => void;
}

export function Sidebar(props: SidevarProps) {
  const { toggleMenu } = props;
  return (
    <div className="fixed top-0 right-0 z-10 h-full w-1/2 bg-white pt-8 px-8 flex flex-col justify-between">
      <button
        className="flex justify-end bg-transparent hover:bg-transparent border-0 cursor-pointer"
        onClick={toggleMenu}
      >
        <X color="black" size={32} />
      </button>
      <nav className="flex flex-col gap-6 px-5 justify-self-center items-center">
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.label}
            className="text-black font-medium leading-[18px] h-12 px-5 flex items-center border rounded-4xl border-[#26262626] transition duration-300 hover:border-primary"
          >
            {link.label}
          </Link>
        ))}
      </nav>
      <div className="flex flex-col items-center gap-2 mb-10 px-5">
        <Button variant="primary" className="flex  h-12 w-[178px]">
          LOG IN
        </Button>
        <Button variant="secondary" className="flex  h-12 w-[178px]">
          REGISTRATION
        </Button>
      </div>
    </div>
  );
}
