import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getUsers, putUser } from "../action/actionApi";
import Spinner from "./pure/Spinner";

const selector = state => state.api;

const FormUpdate = () => {

    const state = useSelector(selector);
    const dispatch = useDispatch();

    useEffect(_=> {
        dispatch(getUsers());
    }, []);

    const {id} = useParams();
    const currentValue = state.data.filter((item) => item.id === parseInt(id));

    const [changeState, setChangeState] = useState(currentValue); 

    //DOM INPUTS
    const firstname = useRef();
    const lastname = useRef();
    const email = useRef();
    const avatar = useRef();

    function update(e){
        e.preventDefault();
        dispatch(putUser(id, changeState));

        if (state.error.exist) alert("Hubo un error");
        if (!state.error.exist) alert("Se ha actualizado con exito");
    }

    function updateData(){

        const updateState = {
            ...changeState[0],
            id:id,
            first_name:firstname.current.value,
            last_name: lastname.current.value,
            email:email.current.value,
            avatar:avatar.current.src
        }

        setChangeState(updateState);
    }

    //RENDER
    function renderizado() {
        if (state.loader) return <Spinner></Spinner>;
        if (state.error.exist) return (<div>Ha ocurrido un error: {state.error.message}</div>);

        return (
            <div>
            #{id}
            <div>
                <img ref={avatar} src={currentValue[0].avatar} alt="" />
            </div>
            <br />
            <form action="" onSubmit={(e)=> update(e)} onChange={updateData}>
                <label htmlFor="firstname">Primer Nombre</label>
                <input type="text" name="firstname" ref={firstname} defaultValue={currentValue[0].first_name}/>
                <br />
                <label htmlFor="lastname">Segundo Nombre</label>
                <input type="text" name="lastname" ref={lastname} defaultValue={currentValue[0].last_name}/>
                <br />
                <label htmlFor="email">Email</label>
                <input type="email" name="email" ref={email} defaultValue={currentValue[0].email} />

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
 