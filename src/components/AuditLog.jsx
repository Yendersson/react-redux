import React, { useEffect } from "react";
import { getLogs } from "../action/actionLogs";
import TableLog from "./pure/TableLog";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "./pure/Spinner";

const selector = state => state.auditLog;

const AuditLog = () => {
    const state = useSelector(selector);
    const dispatch = useDispatch();

    useEffect(_=> {
      dispatch(getLogs());
    },[]) 

    console.log(state);
    function redenrizar(){
        if (state.loader) return <Spinner></Spinner>;
        if (state.error.exist) return (<div>Ha ocurrido un error: {state.error.message}</div>);


        return (
            <div className="container">
                <table className="table table-hover">
                    <thead>
                        <tr>
                        <th /*onClick={() => orderById({key:"date",compare:orderBy})}*/ scope="col">Id</th>
                            <th /*onClick={() => orderById({key:"date",compare:orderBy})}*/ scope="col">Date</th>
                            <th /*onClick={() => orderById({key:"action",compare:orderBy})}*/ scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {state.logs.map((item,index)=> (
                            <TableLog key={index} data={item}></TableLog>)
                            )}
                    
                    </tbody>
                </table>
                <span>{state.logs.length} resultados</span>
            </div>
        )
    }
    return (redenrizar());
}

export default AuditLog;