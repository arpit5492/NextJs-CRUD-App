"use client";

function DelComp({ userId }) {
  const handleClick = async (id) => {
    // console.log(id);

    const response = await fetch("http://localhost:4000/delData", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify({ id }),
    });

    if (!response.ok) {
      console.log("Failed to delete data");
    }
  };
  return (
    <>
      <button
        onClick={() => handleClick(userId)}
        className="btn text-white btn-success btn-sm mx-2"
      >
        Delete
      </button>
    </>
  );
}

export default DelComp;
