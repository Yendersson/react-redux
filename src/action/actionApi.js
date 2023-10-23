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

export const deleteUser = (index) => {
    return {
        type: "api/delete",
        payload: {id: index}
    };
} 