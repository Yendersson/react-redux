import React from "react";
import { Link, useNavigate } from "react-router-dom";

const TableField = ({data, onDelete}) => {
    
    const history = useNavigate();

    function deleteOne(index) {
        onDelete(index)
    }

    function nav(){
        history("/update/"+data.id);
    }

    return (
            <tr onDoubleClick={nav}>
                <th scope="row">{data.id}</th>
                <td>{data.first_name}</td>
                <td>{data.last_name}</td>
                <td><img src={data.avatar} alt="" /></td>
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