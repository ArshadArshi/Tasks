export const incAction = (value) => async (dispatch) => {
    dispatch({
        type:'increment',
        payload:value
    })
}

export const decAction = (value) => async (dispatch) => {
    dispatch({
        type:'decrement',
        payload:value
    })
}