const initialState = {data:[], 
        error:{
            exist:false, 
            message:null
        }, 
        loader:true};

function reducerApi(state = initialState, action) {
    
    switch (action.type) {
        case "api/get":
            return {
                ...state, 
                data: action.payload.data,
                loader: action.payload.loader,
                error: action.payload.error
            };
            
        case "api/post":
            return {
                ...state, data: action.payload
            };
        case "api/delete":
            const newState = state.data.filter((item) => item.id !== action.payload.id);
            return {
                ...state, 
                data: newState
            };

        case "api/filter":
            let filters; 
            filters = action.payload.data.data.filter(item => item.first_name.startsWith(action.payload.filter));
            return { 
                ...state, 
                data:filters,
                loader: action.payload.loader,
                error: action.payload.error
            }
                
        default:
            return state;
        }
                
}

export default reducerApi;
