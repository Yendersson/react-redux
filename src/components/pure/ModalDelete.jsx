import React from "react";

const ModalDelete = ({display, closeModal, id, deleteTrue}) => {

    function deleteItem(){
        deleteTrue(id)
    }

    function close(){
        closeModal();
    }

    return (
        <div className={display?"modal show-modal":"modal"}>
            <div style={{margin:"auto", position: "relative", background:"white", padding: "2em", borderRadius:"2em", zIndex:10}}>
                <h3>Are you sure delete this item? <br /> item id: {id}</h3>
                <div>
                    <button className="btn btn-danger" onClick={deleteItem}>Yes</button>
                    <button className="btn btn-warning" onClick={close}>Cancel</button>
                </div>
            </div>
        </div>

    )
}

export default ModalDelete;