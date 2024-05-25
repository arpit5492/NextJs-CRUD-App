import Link from "next/link";
import "./_showComp.scss";

async function Home() {
  interface userObj {
    id: number;
    first_name: string;
    last_name: string;
    age: number;
    gender: string;
    status: string;
    details: string;
  }

  const data = await fetch("http://localhost:4000/getData", {
    cache: "no-store",
  });
  const json: [] = await data.json();
  return (
    <div>
      <div className="flex justify-center">
        <div className="flex justify-start flex-wrap user-card">
          {json.map((user: userObj) => {
            return (
              <div key={user.id} className="m-10 user-data">
                <p className="text-lg mb-2">
                  <span className="font-bold">Name: </span>
                  {user.first_name} {user.last_name}
                </p>
                <p className="text-lg mb-2">
                  <span className="font-bold">Age: </span>
                  {user.age}
                </p>
                <p className="text-lg mb-2">
                  <span className="font-bold">Gender: </span>
                  {user.gender}
                </p>
                <p className="text-lg mb-2">
                  <span className="font-bold">Status: </span>
                  {user.status}
                </p>
              </div>
            );
          })}
        </div>
      </div>
      <Link href={`/`}>
        <button className="btn btn-info">Home</button>
      </Link>
    </div>
  );
}

export default Home;
