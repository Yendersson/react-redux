import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { putUser } from "../action/actionApi";

const selector = state => state.api;

const FormUpdate = () => {
    const {id} = useParams();
    const state = useSelector(selector);
    const currentValue = state.data.filter((item, index) => index === parseInt(id));

    const [changeState, setChangeState] = useState(currentValue); 

    //DOM INPUTS
    const firstname = useRef();
    const lastname = useRef();
    const email = useRef();
    
    const dispatch = useDispatch();

    function update(e){
        e.preventDefault();
        dispatch(putUser(id, changeState));
    }

    function updateData(){

        const updateState = {
            ...changeState[0],
             name:{
                first:firstname.current.value,
                last: lastname.current.value
             },
             email:email
        }

        setChangeState(updateState);
        console.log(changeState);
        
    }

    return (
        <div>
            #{id}
            <br />
            <form action="" onSubmit={(e)=> update(e)} onChange={updateData}>
                <label htmlFor="firstname">Primer Nombre</label>
                <input type="text" name="firstname" ref={firstname} defaultValue={currentValue[0].name.first}/>
                <br />
                <label htmlFor="lastname">Segundo Nombre</label>
                <input type="text" name="lastname" ref={lastname} defaultValue={currentValue[0].name.last}/>
                <br />
                <label htmlFor="email">Email</label>
                <input type="email" name="email" ref={email} defaultValue={currentValue[0].email} />

                <button>update</button>
            </form>
            
            {currentValue[0].email}


        </div>
    )
}

export default FormUpdate;
 