"use client";

import Link from "next/link";
import "./_showComp.scss";
import DelComp from "../../components/delComp";
import { useEffect, useState } from "react";

function Home() {
  interface userObj {
    id: number;
    first_name: string;
    last_name: string;
    age: number;
    gender: string;
    status: string;
    details: string;
  }

  const [json, setJson] = useState([]);

  // const fetchApi = async (url: string) => {
  //   try {
  //     const data = await fetch(url);
  //     if (data.ok) {
  //       const apiData = await data.json();
  //       setJson(apiData);
  //     } else {
  //       throw new Error("500 Internal Server Error!!");
  //     }
  //   } catch (err: any) {
  //     console.log(err.message);
  //   }
  // };

  useEffect(() => {
    const fetchApi = async (url: string) => {
      try {
        const data = await fetch(url);
        if (data.ok) {
          const apiData = await data.json();
          setJson(apiData);
        } else {
          throw new Error("500 Internal Server Error!!");
        }
      } catch (err: any) {
        console.log(err.message);
      }
    };

    fetchApi("http://localhost:4000/getData");
    document.title = "Show Data";
  }, []);

  return (
    <div>
      <div className="flex justify-center">
        <div className="flex justify-start flex-wrap user-card">
          {json.map((user: userObj) => {
            return (
              <div key={user.id} className="m-7 user-data shadow-lg">
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
                        <button className="btn text-white btn-success btn-sm">
                          Details
                        </button>
                      </Link>
                    </div>
                    <div>
                      <Link href={`/editData/${user.id}`}>
                        <button className="btn btn-success text-white ml-2 btn-sm">
                          Update
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
        <button className="btn text-white btn-sm btn-info my-3">Home</button>
      </Link>
    </div>
  );
}

export default Home;
