"use client";

import { useEffect, useRef } from "react";

export default function Home() {
  const txtRef: any = useRef(null);

  const handleSubmit = (e: any) => {
    e.preventDefault();
  };

  useEffect(() => {
    txtRef.current.focus();
  }, []);

  return (
    <div className="mt-4">
      <form className="text-lg text-center" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="" className="font-bold mx-2">
            First Name:{" "}
          </label>
          <input
            type="text"
            ref={txtRef}
            className="input input-info text-xl"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="" className="font-bold mx-2">
            Last Name:{" "}
          </label>
          <input type="text" className="input input-info" />
        </div>
        <div className="mb-4">
          <label htmlFor="" className="font-bold mx-2">
            Age:{" "}
          </label>
          <input type="number" min={1} className="input input-info" />
        </div>
        <div className="mb-4">
          <label htmlFor="" className="font-bold mx-2">
            Gender:{" "}
          </label>
          <input type="radio" name="gender" className="mx-1" /> Male
          <input type="radio" name="gender" className="mx-1" /> Female
        </div>
        <div className="mb-4">
          <label htmlFor="" className="font-bold mx-2">
            Status:{" "}
          </label>
          <input type="radio" name="status" className="mx-1" /> Married
          <input type="radio" name="status" className="mx-1" /> Single
        </div>
        <div className="mb-4">
          <label htmlFor="" className="font-bold mx-2">
            About:{" "}
          </label>
          <textarea
            name=""
            id=""
            rows={10}
            cols={30}
            className="textarea textarea-info"
          ></textarea>
        </div>
        <div>
          <button className="btn btn-info mx-4">Submit</button>
          <button className="btn btn-info">Show Data</button>
        </div>
      </form>
    </div>
  );
}
