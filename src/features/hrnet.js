import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    value: '',
    counter: false
}

export const hrnetReducer = createSlice({
    name: 'toto',
    initialState,
    reducers: {
        initializeState: (state) => {
            const newState = localStorage.getItem('test')
            if(newState !== null){
                state.value = parseInt(newState)
            }
        },
        updateTotoValue: (state, action) => {
            const newValue = action.payload

            state.value = newValue
            localStorage.setItem('test', newValue)
        }
    }
})


export const {initializeState, updateTotoValue} = hrnetReducer.actions

export default hrnetReducer.reducer