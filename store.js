import {createStore, applyMiddleware} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'

const exampleInitialState = {
    name: '',
    lastUpdate: 0,
    light: false,
    count: 0
}

export const actionTypes = {
    SET_NAME: 'SET_NANE',
    TICK: 'TICK',
    INCREMENT: 'INCREMENT',
    DECREMENT: 'DECREMENT',
    RESET: 'RESET'
}

// REDUCERS
export const reducer = (state = exampleInitialState, action) => {
    switch (action.type) {
        case actionTypes.TICK:
            return Object.assign({}, state, {
                lastUpdate: action.ts,
                light: !!action.light
            })
        case actionTypes.INCREMENT:
            return Object.assign({}, state, {
                count: state.count + 1
            })
        case actionTypes.DECREMENT:
            return Object.assign({}, state, {
                count: state.count - 1
            })
        case actionTypes.RESET:
            return Object.assign({}, state, {
                count: exampleInitialState.count
            })

        case actionTypes.SET_NAME:
            return {
                ...state,
                name: action.name
            };

        default:
            return state
    }
}

// ACTIONS
export const setName = (payload) => {
    return {type: actionTypes.SET_NAME, name: payload}
}
export const serverRenderClock = () => {
    return {type: actionTypes.TICK, light: false, ts: Date.now()}
}
export const startClock = () => {
    return {type: actionTypes.TICK, light: true, ts: Date.now()}
}

export const incrementCount = () => {
    return {type: actionTypes.INCREMENT}
}

export const decrementCount = () => {
    return {type: actionTypes.DECREMENT}
}

export const resetCount = () => {
    return {type: actionTypes.RESET}
}

export function initializeStore(initialState = exampleInitialState) {
    return createStore(
        reducer,
        initialState,
        composeWithDevTools(applyMiddleware())
    )
}