import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, getUsers } from "../action/actionApi";
import TableField from "./pure/TableField";

const selector = state => state.api;

const TableContent = () => {
    const state = useSelector(selector);
    const dispatch = useDispatch();
    const [loader, setLoader] = useState(true);

    useEffect(_=>{
        dispatch(getUsers());
        setLoader(!loader)
    },[])

    function deleteItem(index){
        dispatch(deleteUser(index))
    }
    
    return (
        <div className="container">
            {loader? 
            (<p>Loading...</p>)    
            :
            (
            <>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">First</th>
                        <th scope="col">Last</th>
                        <th scope="col">Handle</th>
                    </tr>
                </thead>
                <tbody>

                    {state.data.map((item,index)=> (
                        <TableField key={index} onDelete={deleteItem} id={index} data={item}></TableField>)
                        )}
                   
                </tbody>
            </table>
            <span>{state.data.length} resultados</span>
            </>
        )
    }
        </div>
    )
}

export default TableContent;