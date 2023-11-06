
const initialState = {logs:[], 
    error:{
        exist:false, 
        message:null
    }, 
    loader:true};

export default function reducerLogs(state = initialState, action) {

    switch(action.type){
        case "logs/get":
            console.log(action.payload)
            return {
                ...state, 
                logs:action.payload.logs,
                error: action.payload.error,
                loader:action.payload.loader,
            };

        default:
            return state;
    }

}