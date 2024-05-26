import Link from "next/link";

export function generateMetadata() {
  return {
    title: "Update data",
  };
}

export default function Home({ params }) {
  // console.log(params.id);
  return (
    <div className="mt-4">
      {/* <h2 className="m-4">{JSON.stringify(formData)}</h2> */}
      <form
        className="text-lg text-center"
        // onChange={handleChange}
        // onSubmit={handleSubmit}
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
            // ref={txtRef}
            className="input input-warning text-xl"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="" className="font-bold mx-2">
            Last Name:{" "}
          </label>
          <input
            required
            type="text"
            name="last"
            className="input input-warning text-xl"
          />
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
            className="input input-warning text-xl"
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
            value="Single"
            className="mx-1"
          />{" "}
          Single
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
