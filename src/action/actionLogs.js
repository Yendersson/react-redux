import axios from "axios";

export const getLogs = () => {
    let objState = {logs:[],
        error:{
            exist:false,
            message:null
        },
        loader:true};
    return async (dispatch) => {
        try {
            const response = await axios.get('http://localhost:18080/api/logs')
            objState.logs = response.data.data;
            objState.loader = false; 
        } catch (error) {
            objState.error = {
                exist:true,
                message:error.message
            };
            objState.loader = false;
        }
        dispatch({
            type: "logs/get",
            payload: objState
        });
    }
}