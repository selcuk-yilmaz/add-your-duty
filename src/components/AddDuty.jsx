import { useState } from "react";

const AddDuty = ({ postApi }) => {
  const [title, setTitle] = useState();
  const [desc, setDesc] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    postApi({ title: title, description: desc });
    setTitle("");
    setDesc("");

  };

  return (
    <div className="container justifyContent-center  text-center mt-4">
      <h1 className="display-6 m-5">Add Your Tutorial</h1>
      <div className="container row g-3 align-items-center input-group  mb-3">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Title
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Add your duty title..."
              required
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Description
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Add your duty description..."
              required
              id="desc"
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
            />
          </div>

          <button type="submit" className="btn btn-primary m-4">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddDuty;
