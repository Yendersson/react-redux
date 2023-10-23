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

        case "api/filter":
            let filters; 
            filters = state.data.filter(item => item.name.first.startsWith(action.payload));
            return { 
                ...state, data:filters
            }
                
        default:
            return state;
        }
                
}

export default reducerApi;
