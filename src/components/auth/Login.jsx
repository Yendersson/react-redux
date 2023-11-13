import React from "react";

const Login = ({submit}) => {

    function send(e) {
        e.preventDefault();
        console.log(e.target.username.value)
        const info = {username: e.target.username.value, password: e.target.password.value};
        submit(info);

    }

    return (
        <div style={{width:"600px", margin: '0 auto'}} onSubmit={(e) => send(e)}>
            <form className="row g-3">
            <div >
                <label htmlFor="username">Username</label>
                <input type="text" className="form-control" id="username" name="username" placeholder="Username"/>
            </div>
            <div >
                <label htmlFor="password">Password</label>
                <input type="password" className="form-control" id="password" name="password" placeholder="Password"/>
            </div>
            <div >
                <button type="submit" className="btn btn-primary mb-3">Confirm identity</button>
            </div>
            </form>
        </div>
    )
}

export default Login;