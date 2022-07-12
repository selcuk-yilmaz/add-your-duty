import { useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import EditDuty from "./EditDuty";

const ShowDuties = ({ fill, delApi,editApi }) => {
  const [edit, setEdit] = useState("");

  return (
    <div className="container table">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#id</th>
            <th scope="col">Title</th>
            <th scope="col">Description</th>
            <th className="text-center" scope="col">
              Edit
            </th>
          </tr>
        </thead>
        <tbody>
          {fill?.map((item) => {
            const { id, title, description } = item;
            return (
              <tr key={id}>
                <td>{id} </td>
                <td>{title} </td>
                <td>{description} </td>
                <td className="text-center text-nowrap">
                  <FaEdit
                    size={22}
                    role="button"
                    className="me-2 text-info "
                    data-bs-toggle="modal"
                    data-bs-target="#edit-modal"
                    onClick={() => setEdit(item)}
                  />
                  <FaTrash
                    size={20}
                    role="button"
                    className="text-danger "
                    onClick={() => delApi(id)}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <EditDuty edit={edit} editApi={editApi} />
    </div>
  );
};

export default ShowDuties;
