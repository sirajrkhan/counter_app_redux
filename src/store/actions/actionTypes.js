export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'
export const ADD = 'ADD'
export const SUBTRACT = 'SUBTRACT'
export const BTN_ADD = 'BTN_ADD'
export const BTN_DEL = 'BTN_DEL'

//all the functions with params as necessary
export const increment = () => ({type: INCREMENT})
export const decrement = () => ({type: DECREMENT})

export const add = (val) => ({type: ADD, value: val})
export const subtract = (val) => ({type: SUBTRACT, value: val})

export const saveAddedResult = () => ({type: BTN_ADD})
export const deleteResult = (id) => ({type: BTN_DEL, DeleteID: id})


export const addResult = () => {
    return dispatch => {
        setTimeout(
            () => {
                dispatch (saveAddedResult())
            }, 3000
        )
    }
}