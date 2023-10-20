
const initialState = {contador: 0};

 function contadorReducer(state = initialState, action) {

    switch (action.type) {
        case 'contador/increment':
            return {
                ...state, contador: state.contador + action.payload
            };

        case 'contador/decrement':
            return {
                ...state, contador: state.contador - action.payload
            };
    
        default:
            return state;
    }
}

export default contadorReducer;