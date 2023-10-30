import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getUsers, putUser } from "../action/actionApi";

const selector = state => state.api;

const FormUpdate = () => {

    const state = useSelector(selector);
    const dispatch = useDispatch();

    useEffect(_=> {
        dispatch(getUsers());
    }, []);

    const {id} = useParams();
    const currentValue = state.data.filter((item, index) => index === parseInt(id));

    const [changeState, setChangeState] = useState(currentValue); 

    //DOM INPUTS
    const firstname = useRef();
    const lastname = useRef();
    const email = useRef();
    

    function update(e){
        e.preventDefault();
        dispatch(putUser(id, changeState));
    }

    function updateData(){

        const updateState = {
            ...changeState[0],
            first_name:firstname.current.value,
            last_name: lastname.current.value,
            email:email
        }

        setChangeState(updateState);
        console.log(changeState);
        
    }

    return (
        <div>
            {state.loader? 
            (
                <p>Loader...</p>
            )
            :
            <>
                #{id}
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
            </>

        }


        </div>
    )
}

export default FormUpdate;
 