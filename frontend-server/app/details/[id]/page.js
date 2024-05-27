import Link from "next/link";

export function generateMetadata() {
  return {
    title: "Details",
  };
}

export default async function Home({ params }) {
  const data = await fetch(`http://localhost:4000/getDetails/${params.id}`, {
    cache: "no-cache",
  });
  const [json] = await data.json();

  return (
    <div>
      <p className="text-lg font-bold">{json.details}</p>
      <Link href={`/showData`}>
        <button className="btn text-white mt-4 btn-success btn-sm">
          Show Data
        </button>
      </Link>
    </div>
  );
}
