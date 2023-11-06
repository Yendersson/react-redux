import React from "react";

const TableAddClient = ({onSubmit, display, closeModal}) => {

    function postSubmit(e){
        e.preventDefault();

        const data = {
            first_name: e.target.firstname.value,
            last_name: e.target.lastname.value,
            email: e.target.email.value,
            avatar: e.target.avatar.value,
        }

        onSubmit(data);
    }

    function close(){
        closeModal();
    }
    
    return (
        <div className={display?"modal show-modal":"modal"}>
            <form action=""  style={{margin:"auto", position: "relative", background:"white", padding: "2em", borderRadius:"2em", zIndex:10}} onSubmit={(e) => postSubmit(e)}>
            <label htmlFor="firstname">Primer Nombre</label>
                <input type="text" name="firstname"  placeholder="FirstName"/>
                <br />
                <label htmlFor="lastname">Segundo Nombre</label>
                <input type="text" name="lastname" placeholder="LastName"/>
                <br />
                <label htmlFor="email">Email</label>
                <input type="email" name="email" placeholder="Email" />
                <br />
                <label htmlFor="avatar">Image</label>
                <input type="text" name="avatar" placeholder="img" />
                <br />
                <button>Create</button>
                <span onClick={close} class="btn-close" aria-label="Close"></span>

            </form>
        </div>
    )
}

export default TableAddClient;