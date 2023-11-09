import axios from "axios";

export const getUsers = () => {
    let objState = {data:[],
        error:{
            exist:false,
            message:null
        },
        loader:true};

    return async (dispatch) => {
        try {
            const response = await axios.get('http://localhost:18080/api/persons')
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
    let objState = {data:[],
        error:{
            exist:false,
            message:null
        },
        loader:true};

    return async (dispatch) => {
        try {
            const response = await axios.get('http://localhost:18080/api/persons')
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
            type: "api/filter",
            payload: {
                data:objState,
                filter: filter
             }
        });
    }
}

export const filterByOrder = (key) =>{
    return {
        type: "api/order",
        payload: key
    }
}

export const postUser = (info) => {
    let objState = {data:[],
        error:{
            exist:false,
            message:null
        },
        loader:true};

    return async (dispatch) => {
        try {
            const response = await axios.post(
                'http://localhost:18080/api/persons',
                JSON.stringify(info),
                {headers:{
                    'Content-Type': 'application/json'
                    }
                })

            objState.data = response.data;
            objState.loader = false; 
        } catch (error) {
            objState.error = {
                exist:true,
                message:error.message
            };
            objState.loader = false;
        }

        dispatch({
            type: "api/post",
            payload: {
                data:objState.data,
             }
        });
    }
}

export const deleteUser = (index) => {
    let objState = {data:[],
        error:{
            exist:false,
            message:null
        },
        loader:true};

    return async (dispatch)=>{
        try {
            const response = await axios.delete(`http://localhost:18080/api/persons/${index}`);
            console.log(response.data)
            objState.loader=false;
        } catch (error) {
            objState.error = {
                exist:true,
                message:error.message
            };
            objState.loader = false;
        }
        
        dispatch({
            type: "api/delete",
            payload: {
                id: index,
                data: objState
            }
        })
    }
} 

export const putUser = (index, state) => {
    return async (dispatch) => {
        const response = await axios.put(
            'http://localhost:18080/api/persons',
             JSON.stringify(state),
              {
                headers: {'Content-Type': 'application/json'}
        });

        if (response.status.ok) {
            dispatch({
                type: "api/put",
                payload: {id: index, data:response.data}
            });
        }    
    }
}