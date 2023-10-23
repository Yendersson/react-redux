const initialState = {data:[]};

function reducerApi(state = initialState, action) {

    
    switch (action.type) {
        case "api/get":
            return {
                ...state, data: action.payload
            };
            
        case "api/post":
            return {
                ...state, data: action.payload
            };
        case "api/delete":
            const newState = state.data.filter((item,index) => index != action.payload.id);
            return {
                ...state, data: newState
            };
                
                default:
                    return state;
                }
                
}

export default reducerApi;
