export default function Home({ params }) {
  // console.log(params.id);
  return (
    <div>
      <p className="text-lg font-bold">Update data component {params.id}</p>
    </div>
  );
}
