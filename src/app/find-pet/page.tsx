import { Header } from "@/components/Header";
import Link from "next/link";

export default function Catalog() {
  return (
    <div>
      <Header />
      <button>
        <Link href="/">Back</Link>
      </button>
      <div>Catalog Page</div>
    </div>
  );
}
