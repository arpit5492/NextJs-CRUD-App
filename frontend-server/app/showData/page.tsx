import Link from "next/link";
import "./_showComp.scss";
import DelComp from "../../components/delComp";

export function generateMetadata() {
  return {
    title: "Show Data",
  };
}

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
              <div key={user.id} className="m-7 user-data">
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
                <div>
                  <div className="flex justify-center">
                    <div>
                      <Link href={`/details/${user.id}`}>
                        <button className="btn btn-success btn-sm">
                          Details
                        </button>
                      </Link>
                    </div>
                    <div>
                      <a href="/showData">
                        <DelComp userId={user.id} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Link href={`/`}>
        <button className="btn btn-sm btn-info my-5">Home</button>
      </Link>
    </div>
  );
}

export default Home;
