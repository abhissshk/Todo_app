import React, { useEffect, useState } from "react";

function Form({ todos, settodos, id, setid }) {
  const [title, settitle] = useState("");
  const [description, setdescription] = useState("");

  const handlesubmit = (event) => {
    event.preventDefault();

   

    if (id) {
      updatebyid(id);
      setid("");

    } else {
      const obj = {
        id: Math.random(),
        title,
        description,
      };

      settodos([...todos, obj]);
    }
    setid("");
    settitle("");
    setdescription("");
  };

  useEffect(() => {
    if (id) {
      const updatedata = todos.filter((d) => d.id === id);

      settitle(updatedata[0].title);
      setdescription(updatedata[0].description);
    }
  }, [id]);

  const updatebyid = (id) => {
    const obj = {
      title,
      description,
    };
    settodos((prevData) =>
      prevData.map((todo) => (todo.id === id ? { ...todo, ...obj } : todo))
    );
  };

  return (
    <>
      <form onSubmit={handlesubmit}>
        <div className="container my-5  text-center form ">
          <input
            value={title}
            className="mx-2"
            type="text"
            placeholder="Title"
            onChange={(event) => settitle(event.target.value)}
          />
          <input
            value={description}
            className="mx-2"
            type="text"
            placeholder="Description"
            onChange={(event) => setdescription(event.target.value)}
          />

          {id && <button className="btn btn-warning">Edit</button>}
          {!id && <button className="btn btn-warning">Add</button>}
        </div>
      </form>
      
    </>
  );
}

export default Form;
