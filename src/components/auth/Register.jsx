import React from "react";

const Register = () => {
    return (
        <div>
            <form style={{margin:"auto", position: "relative", background:"white", padding: "2em", borderRadius:"2em", zIndex:10}} >
            <label htmlFor="Username"></label>
                <input type="text" name="username" placeholder="Username"/>
                <br />
                <label htmlFor="email">Email</label>
                <input type="text" name="email" placeholder="Email"/>
                <br />
                <label htmlFor="password">Password</label>
                <input type="text" name="password" placeholder="password" />
                <br />
                <button>Register</button>
            </form>
        </div>
    )
}

export default Register