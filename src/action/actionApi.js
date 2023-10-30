import axios from "axios";
import ApiState from "../models/ApiState.class";


export const getUsers = () => {
    let objState = {data:[],
        error:{
            exist:false,
            message:null
        },
        loader:true};

    return async (dispatch) => {

        try {
            const response = await axios.get('https://reqres.in/api/users')
            objState.data = response.data.data;
            objState.loader = false; 
        } catch (error) {
            objState.error = {
                exist:true,
                message:error.message
            };
            objState.loader = false;
        }
        dispatch({
            type: "api/get",
            payload: objState
        });
    }
}

export const filterUser = (filter) => {
    let objState = {data:[], error:false, loader:true};

    return async (dispatch) => {
        const response = await axios.get('https://reqres.in/api/users')

        if (response.status === 200) {
            objState.data = response.data.data;
            objState.loader = false; 
        } else {
            objState.error = true;
        }

        dispatch({
            type: "api/filter",
            payload: {
                data:objState,
                filter: filter
             }
        });
    }
}

export const deleteUser = (index) => {
    return {
        type: "api/delete",
        payload: {id: index}
    };
} 

export const putUser = (index, state) => {
    return async (dispatch) => {
        const response = await axios.put('', state);

        if (response.status.ok) {
            dispatch({
                type: "api/put",
                payload: {id: index, state:state}
            });
        }    
    }
}