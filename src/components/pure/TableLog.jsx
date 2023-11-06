import React from "react";

const TableLog = ({data}) => {
    return (
        <tr>
            {Object.keys(data).map((item,index) => <td>{data[item]}</td>)}
        </tr>
    )
}

export default TableLog;