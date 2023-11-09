import React, { useEffect } from "react";
import { getLogs } from "../action/actionLogs";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "./pure/Spinner";
import TableField from "./pure/TableField";

const selector = state => state.auditLog;

const AuditLog = () => {
    const state = useSelector(selector);
    const dispatch = useDispatch();

    useEffect(_=> {
      dispatch(getLogs());
    },[]) 

    console.log(state);
    function redenrizado(){
        if (state.loader) return <Spinner></Spinner>;
        if (state.error.exist) return (<div>Ha ocurrido un error: {state.error.message}</div>);

        return (
            <div className="container">
                <table className="table table-hover">
                    <thead>
                        <tr>
                            {Object.keys(state.logs[0]).map((item,index) => <th key={index} scope="col">{item}</th>) }
                        </tr>
                    </thead>
                    <tbody>

                        {state.logs.map((item,index)=> (
                            <TableField key={index} data={item} edited={false}></TableField>)
                            )}
                            
                    </tbody>
                </table>
                <span>{state.logs.length} resultados</span>
            </div>
        )
    }
    return (redenrizado());
}

export default AuditLog;