import Link from "next/link";

export default function IndexPage() {
  return (
    <div>
      Hello World.{" "}
      <Link href="/about">
        <a>About</a>
      </Link>
      <button type="button" className="btn btn-primary btn-lg btn-block">
        Block level button
      </button>
    </div>
  );
}
