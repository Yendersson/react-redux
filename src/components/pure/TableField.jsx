import React from "react";
import { Link } from "react-router-dom";

const TableField = ({data, onDelete}) => {
    

    function deleteOne(index) {
        onDelete(index)
    }

    return (
            <tr>
                <th scope="row">{data.id}</th>
                <td>{data.first_name}</td>
                <td>{data.last_name}</td>
                <td>{data.email}</td>
                <td>
                    <Link to={"/update/"+data.id}>
                        <button className="btn btn-warning">Update</button>
                    </Link>
                </td>
                <td><button onClick={() => deleteOne(data.id)} className="btn btn-danger">Delete</button></td>
            </tr>
        ) 
}

export default TableField;