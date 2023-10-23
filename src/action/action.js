export const incrementAction = () => {
    return {
        type: 'contador/increment',
        payload: 1
    }
}

export const decrementAction = () => {
    return {
        type: 'contador/decrement',
        payload: 1
    }
}