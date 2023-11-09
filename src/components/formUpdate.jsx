import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getUsers, putUser } from "../action/actionApi";
import Spinner from "./pure/Spinner";

const selector = state => state.api;

const FormUpdate = () => {

    const {id} = useParams();
    const state = useSelector(selector);
    const dispatch = useDispatch();

    useEffect(_=> {
        dispatch(getUsers());
    }, []);

    const currentValue = state.data.filter((item) => item.id === parseInt(id));
    const [changeState, setChangeState] = useState([]); 

    function update(e){
        e.preventDefault();
        const sendData = {...currentValue[0], ...changeState}
        dispatch(putUser(id, sendData));

        if (state.error.exist) alert("Hubo un error");
        if (!state.error.exist) alert("Se ha actualizado con exito");
    }

    function updateData(e){
        e.preventDefault();
        
        const update = {...changeState};
        update[e.target.name] = e.target.value;
        setChangeState(update);
    }

    //RENDER
    function renderizado() {
        if (state.loader) return <Spinner></Spinner>;
        if (state.error.exist) return (<div>Ha ocurrido un error: {state.error.message}</div>);

        return (
            <div>
            #{id}
            <br />
            <form action="" onSubmit={(e)=> update(e)} onChange={(e) => updateData(e)}>

                {Object.keys(currentValue[0]).map((item, index) => {
                    if (item === "avatar") return (<div><img src={currentValue[0][item]} alt="" /></div>) 
                    
                    return (
                        <>
                            <label htmlFor={item}>{item === "id"? "": item.replace("_"," ")}</label>
                            <input type={item === "email"?
                                         item: item === "id"?
                                          "number":"text"} 
                            id={item} name={item} defaultValue={currentValue[0][item]} hidden={item === "id"? true:false}/>
                        </>
                    )

                })}

                <button>update</button>
            </form>
        </div>
        )
    }

    return (
        renderizado()
    )
}

export default FormUpdate;
 