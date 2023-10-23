import axios from "axios";

export const getUsers = () => {
    return async (dispatch) => {
        const response = await axios.get('https://randomuser.me/api/?results=50')
        dispatch({
            type: "api/get",
            payload: response.data.results
        });
    }
}

export const filterUser = (filter) => {
    return {
        type: "api/filter",
        payload: filter
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