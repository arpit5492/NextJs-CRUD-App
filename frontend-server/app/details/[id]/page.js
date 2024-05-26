import Link from "next/link";

export default async function Home({ params }) {
  const data = await fetch(`http://localhost:4000/getDetails/${params.id}`);
  const json = await data.json();

  return (
    <div>
      <p className="text-lg font-bold">{json[0].details}</p>
      <Link href={`/showData`}>
        <button className="btn mt-4 btn-info btn-sm">Show Data</button>
      </Link>
    </div>
  );
}
