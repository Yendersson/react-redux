import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, filterByOrder, filterUser, getUsers, postUser } from "../action/actionApi";
import TableField from "./pure/TableField";
import Spinner from "./pure/Spinner";
import TableAddClient from "./pure/TableAddClient";

const selector = state => state.api;

const TableContent = () => {
    const state = useSelector(selector);
    const dispatch = useDispatch();

    const [orderBy, setOrderBy] = useState(true);
    const [modal, setModal] = useState(false);
    
    useEffect(_=>{
        dispatch(getUsers());
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

    function orderById(key){
        dispatch(filterByOrder(key))
        setOrderBy(!orderBy);
    }

    function createOne(item) {
        dispatch(postUser(item));
        openModal();
    }

    function openModal() {
        setModal(!modal);
    }

    /*Component to render */
    function renderizado() {
        if (state.loader) return <Spinner></Spinner>;
        if (state.error.exist) return (<div>Ha ocurrido un error: {state.error.message}</div>);


        return (
            <div className="container">
                <TableAddClient display={modal} onSubmit={createOne} closeModal={openModal}>
                </TableAddClient>
                <div>
                    <input type="text" onChange={(e) => searching(e)} placeholder="Search" />
                    <button onClick={openModal}>+</button>
                </div>
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th onClick={() => orderById({key:"id",compare:orderBy})} scope="col">#</th>
                            <th onClick={() => orderById({key:"first_name",compare:orderBy})} scope="col">First</th>
                            <th onClick={() => orderById({key:"last_name",compare:orderBy})} scope="col">Last</th>
                            <th scope="col">Image</th>
                            <th onClick={() => orderById({key:"email",compare:orderBy})} scope="col">Email</th>
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