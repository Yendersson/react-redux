import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ModalDelete from "./ModalDelete";

/*
    this component needs tree prop
    data: is where to pass te data from the http response
    edited: is a boolean where confirmed wheter render the buttons modified and edited.
    onDelete: usually must to use when edited is true.
*/

const TableField = ({data, onDelete, edited}) => {
    
    const history = useNavigate();
    const [modal, setModal] = useState(false);

    function deleteOne(index) {
        onDelete(index)
    }

    function changeModal(){
        setModal(!modal)
    }

    function nav(){
        history(`${window.location.pathname}update/${data.id}`);
    }

    return (
            <tr onDoubleClick={nav}>

                {Object.keys(data).map((item,index) => {
                    if (item === "avatar") return (<td key={index}><img src={data[item]} alt="" /></td>)
                    return (<td key={index}>{data[item]}</td>)
                })}

            {edited && (
                <>
                    <td>
                        <Link to={"/update/"+data.id}>
                            <button className="btn btn-warning">Update</button>
                        </Link>
                    </td>
                    <td>
                        {/*<button onClick={() => deleteOne(data.id)} className="btn btn-danger">Delete</button> */} 
                        <button onClick={changeModal} className="btn btn-danger">Delete</button>
                    </td>

                    <ModalDelete display={modal} closeModal={changeModal} id={data.id} deleteTrue={deleteOne}></ModalDelete>
                </>
            )}
            </tr>
        ) 
}

export default TableField;