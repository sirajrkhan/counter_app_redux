import * as actionTypes from './actions/actionTypes'

const initialState = {
    counter: 0,
    result: []
}

const reducer = (state = initialState, action) => {
    switch (action.type){

        case actionTypes.INCREMENT:
            return {...state, counter: state.counter + 1 }
        case actionTypes.DECREMENT:
            return {...state, counter: state.counter - 1 }
        case actionTypes.ADD:
            return {...state, counter: state.counter + action.value }
        case actionTypes.SUBTRACT:
            return {...state, counter: state.counter - action.value }
        case actionTypes.BTN_ADD:
            return {...state, result: state.result.concat(state.counter) }
        case actionTypes.BTN_DEL:
            const newArr = []
            state.result.map(
                (value, index) => (action.DeleteID !== index) ? newArr.push(value) : null
            )
            return { ...state, result: newArr }
        default:
            return state;
    }
};

export default reducer;