import { useState, useEffect } from "react";

const EditDuty = ({ edit, editApi }) => {
  const { id, title: newTitle, description } = edit;

  const [title, setTitle] = useState(newTitle);
  const [desc, setDesc] = useState(description);

  useEffect(() => {
    setTitle(newTitle);
    setDesc(description);
  }, [newTitle, description]);

  const handleSave = (e) => {
    e.preventDefault();
    editApi(id, title, desc);
    setTitle("");
    setDesc("");
  };

  return (
    <div className="modal" tabIndex="-1" id="edit-modal">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Modal title</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
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
                value={title || ""}
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
                value={desc || ""}
                onChange={(e) => setDesc(e.target.value)}
              />
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleSave}
              data-bs-dismiss="modal"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditDuty;
