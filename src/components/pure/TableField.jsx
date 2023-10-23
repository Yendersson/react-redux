import React from "react";
import { Link } from "react-router-dom";

const TableField = ({data, id, onDelete}) => {
    

    function deleteOne(index) {
        onDelete(index)
    }

    return (
            <tr>
                <th scope="row">{id}</th>
                <td>{data.name.first}</td>
                <td>{data.name.last}</td>
                <td>{data.email}</td>
                <td>
                    <Link to={"/update/"+id}>
                        <button className="btn btn-warning">Update</button>
                    </Link>
                </td>
                <td><button onClick={() => deleteOne(id)} className="btn btn-danger">Delete</button></td>
            </tr>
        ) 
}

export default TableField;