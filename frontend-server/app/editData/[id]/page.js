"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home({ params }) {
  const [apiData, setData] = useState({
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
        const [json] = await data.json();
        setData(json);
      } else {
        throw new Error("500 Internal Server Error!!");
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  const handleChange = (e) => {
    setData((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:4000/editData", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(apiData),
    });

    if (!response.ok) {
      console.log("Failed to update data");
    }
  };

  useEffect(() => {
    document.title = "Update Data";
    fetchApi(`http://localhost:4000/getDetails/${params.id}`);
  }, [params.id]);

  // console.log(apiData);

  return (
    <div className="mt-4">
      {/* <h2 className="m-4">{JSON.stringify(formData)}</h2> */}
      <form
        className="text-lg text-center"
        onSubmit={handleSubmit}
        method="PATCH"
        action="/editData"
      >
        <div className="mb-4">
          <label htmlFor="" className="font-bold mx-2">
            First Name:{" "}
          </label>
          <input
            onChange={handleChange}
            type="text"
            value={apiData.first_name}
            name="first_name"
            className="input input-warning text-xl"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="" className="font-bold mx-2">
            Last Name:{" "}
          </label>
          <input
            onChange={handleChange}
            type="text"
            name="last_name"
            value={apiData.last_name}
            className="input input-warning text-xl"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="" className="font-bold mx-2">
            Age:{" "}
          </label>
          <input
            onChange={handleChange}
            type="number"
            value={apiData.age}
            required
            name="age"
            min={1}
            className="input input-warning text-xl"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="" className="font-bold mx-2">
            Gender:{" "}
          </label>
          <input
            checked={apiData.gender === "Male"}
            type="radio"
            name="gender"
            onChange={handleChange}
            value="Male"
            className="mx-1"
          />{" "}
          Male
          <input
            type="radio"
            checked={apiData.gender === "Female"}
            name="gender"
            onChange={handleChange}
            value="Female"
            className="mx-1"
          />{" "}
          Female
        </div>
        <div className="mb-4">
          <label htmlFor="" className="font-bold mx-2">
            Status:{" "}
          </label>
          <input
            checked={apiData.status === "Married"}
            onChange={handleChange}
            type="radio"
            name="status"
            value="Married"
            className="mx-1"
          />{" "}
          Married
          <input
            type="radio"
            onChange={handleChange}
            checked={apiData.status === "Unmarried"}
            name="status"
            value="Unmarried"
            className="mx-1"
          />{" "}
          Unmarried
        </div>
        <div className="mb-4">
          <label htmlFor="" className="font-bold mx-2">
            About:{" "}
          </label>
          <textarea
            name="details"
            onChange={handleChange}
            id=""
            value={apiData.details}
            required
            rows={10}
            cols={30}
            className="textarea textarea-warning text-lg"
          ></textarea>
        </div>
        <div>
          <button className="btn btn-warning btn-sm mx-4">Update</button>
          <Link href={`/showData`}>
            <button className="btn btn-warning btn-sm">Show Data</button>
          </Link>
        </div>
      </form>
    </div>
  );
}
