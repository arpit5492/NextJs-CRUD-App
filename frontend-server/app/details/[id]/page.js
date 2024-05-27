"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home({ params }) {
  const [json, setJson] = useState({
    id: "",
    first_name: "",
    last_name: "",
    age: "",
    gender: "",
    status: "",
    details: "",
  });

  const fetchApi = async (url) => {
    try {
      const data = await fetch(url);
      if (data.ok) {
        const [apiData] = await data.json();
        setJson(apiData);
      } else {
        throw new Error("500 Internal Server Error!!");
      }
    } catch (err) {
      console.log(err.message);
    }
  };


  useEffect(() => {
    document.title = "Details";
    fetchApi(`http://localhost:4000/getDetails/${params.id}`);
  }, [params.id]);

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
