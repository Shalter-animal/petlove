import Link from "next/link";

export default function Home() {
  return (
    <main>
      <nav>
        <Link href="/" className="text-2xl bg-primary">
          Home
        </Link>
        <Link href="/catalog" className="text-2xl bg-secondary">
          Catalog
        </Link>
        <Link href="/friends" className="text-2xl">
          Friends
        </Link>
        <Link href="/news" className="text-2xl">
          News
        </Link>
      </nav>
      <h1>Hello</h1>
    </main>
  );
}
