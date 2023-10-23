import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const selector = state => state.api;

const FormUpdate = () => {
    const {id} = useParams();
    const state = useSelector(selector);
    const currentValue = state.data.filter((item, index) => index === parseInt(id));

    const [changeState, setChangeState] = useState(currentValue); 


    const dispatch = useDispatch();

    function update(e){
        e.preventDefault();
        console.log(e.target.firstname.value);
        
    }

    function updateName(e){
        console.log(...changeState, {gender:"yenderson"})
    }

    return (
        <div>
            #{id}
            <br />
            <form action="" onSubmit={(e)=> update(e)} >
                <label htmlFor="firstname">Primer Nombre</label>
                <input type="text" name="firstname" onChange={(e)=> updateName(e)} value={currentValue[0].name.first}/>
                <br />
                <label htmlFor="lastname">Segundo Nombre</label>
                <input type="text" name="lastname" placeholder={currentValue[0].name.last}/>
                <br />
                <label htmlFor="email">Email</label>
                <input type="email" name="email" placeholder={currentValue[0].email} />

                <button>update</button>
            </form>
            
            {currentValue[0].email}


        </div>
    )
}

export default FormUpdate;
 