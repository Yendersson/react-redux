import { compare } from "../utils/utils";

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
            const postState = state.data.push(action.payload.data);
            return {
                ...state, postState
            };
            
        case "api/delete":
            const newState = state.data.filter((item) => item.id !== action.payload.id);
            return {
                ...state, 
                data: newState,
                loader:action.payload.data.loader,
                error: action.payload.data.error
            };
            
        case "api/order":
            let filtersByKey;
            filtersByKey = state.data.sort((a,b) =>  action.payload.compare? compare(a,b,action.payload.key)*(-1): compare(a,b,action.payload.key));
            return {
                ...state,
                filtersByKey
            };

        case "api/filter":
            let filters; 
            filters = action.payload.data.data.filter(item => item.first_name.toLowerCase().startsWith(action.payload.filter.toLowerCase()));
            return { 
                ...state, 
                data:filters,
                loader: action.payload.data.loader,
                error: action.payload.data.error
            }

        case "api/put":
            let mapeo; 
            mapeo = action.payload.data.data.map(item => {
                if (item.id === action.payload.id) {
                    item = action.payload.data;
                }
                return item;
            });
            return { 
                ...state, 
                data:mapeo,
                loader: action.payload.data.loader,
                error: action.payload.data.error
            }

        default:
            return state;
        }
                
}

export default reducerApi;
