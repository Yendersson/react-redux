import React, { useState } from "react";
import Login from "./Login";
import Register from "./Register";
import axios from "axios";

const Auth = () => {
    const [register, setRegister] = useState(false);

    async function authentication(info) {
        try {
            const response = await axios
                                     .post("http://localhost:18080/api/auth",
                                         JSON.stringify(info),
                                         {headers:{
                                             'Content-Type': 'application/json'
                                             }
                                     })
            localStorage.setItem("user",JSON.stringify(response.data));
            //window.location = "/";
            
        } catch (error) {
            alert(error.response.data.error)
        }
    }
 

    function renderizado() {

        if (register) return (<Register></Register>);

        return (<Login submit={authentication}></Login>)
    }


    return (
        <div>
            <h1>Authentication</h1>
            {renderizado()}

            <button onClick={() => setRegister(!register)}>{register? "Log in": "Sign in"}</button>
        </div>
    )
}

export default Auth;