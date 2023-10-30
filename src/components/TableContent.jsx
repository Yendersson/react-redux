import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, filterUser, getUsers } from "../action/actionApi";
import TableField from "./pure/TableField";

const selector = state => state.api;

const TableContent = () => {
    const state = useSelector(selector);
    const dispatch = useDispatch();
    //const [loader, setLoader] = useState(true);
    
    
    useEffect(_=>{
        dispatch(getUsers());
      //  setLoader(!loader)
    },[])
    
    function deleteItem(index){
        dispatch(deleteUser(index))
    }
    
    function searching(e){
        
        if (e.target.value.length > 0){
            dispatch(filterUser(e.target.value));
        } else {
            dispatch(getUsers());
        }
    }


    /*Component to render */

    function renderizado() {
        if (state.loader) return (<p>Loading...</p>);
        if (state.error.exist) return (<div>Ha ocurrido un error: {state.error.message}</div>);

        return (
            <div className="container">
                <div>
                    <input type="text" onChange={(e) => searching(e)} placeholder="Search" />
                </div>
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
                            <TableField key={index} onDelete={deleteItem} data={item}></TableField>)
                            )}
                    
                    </tbody>
                </table>
                <span>{state.data.length} resultados</span>
            </div>
        )
    } 
    
    return (
       renderizado()
    )
}

export default TableContent;