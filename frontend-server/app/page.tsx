"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const txtRef: any = useRef(null);
  const [formData, setFormData] = useState({
    first: "",
    last: "",
    age: "",
    gender: "",
    status: "",
    details: "",
  });

  const handleChange = (e: any) => {
    setFormData((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (formData.gender === "" || formData.status === "") {
      console.log("Input field can't be empty");
    } else {
      const response = await fetch("http://localhost:4000/postData", {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        console.log("Failed to send data to backend API");
      }
    }
  };

  useEffect(() => {
    txtRef.current.focus();
  }, []);

  return (
    <div className="mt-4">
      {/* <h2 className="m-4">{JSON.stringify(formData)}</h2> */}
      <form
        className="text-lg text-center"
        onChange={handleChange}
        onSubmit={handleSubmit}
        method="POST"
        action="/postData"
      >
        <div className="mb-4">
          <label htmlFor="" className="font-bold mx-2">
            First Name:{" "}
          </label>
          <input
            type="text"
            required
            name="first"
            ref={txtRef}
            className="input input-info text-xl"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="" className="font-bold mx-2">
            Last Name:{" "}
          </label>
          <input type="text" name="last" className="input input-info text-xl" />
        </div>
        <div className="mb-4">
          <label htmlFor="" className="font-bold mx-2">
            Age:{" "}
          </label>
          <input
            type="number"
            required
            name="age"
            min={1}
            className="input input-info text-xl"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="" className="font-bold mx-2">
            Gender:{" "}
          </label>
          <input type="radio" name="gender" value="Male" className="mx-1" />{" "}
          Male
          <input
            type="radio"
            name="gender"
            value="Female"
            className="mx-1"
          />{" "}
          Female
        </div>
        <div className="mb-4">
          <label htmlFor="" className="font-bold mx-2">
            Status:{" "}
          </label>
          <input type="radio" name="status" value="Married" className="mx-1" />{" "}
          Married
          <input
            type="radio"
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
            id=""
            required
            rows={10}
            cols={30}
            className="textarea textarea-info text-lg"
          ></textarea>
        </div>
        <div>
          <button className="btn text-white btn-info btn-sm mx-4">
            Submit
          </button>
          <Link href={`/showData`}>
            <button className="btn text-white btn-info btn-sm">
              Show Data
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
}
