import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    value: [
        // {firstName : "John", lastName : "Doe"},
        // {firstName: "Bob", lastName : "Dupont"}
    ]
}

export const createEmployee = createSlice({
    name: 'createEmployee',
    initialState,
    reducers: {
        addNewUser: (state, action) => {
            state.value.push(action.payload)
            console.log(action.payload)
            console.log("coucou");
            // const newState = localStorage.getItem('test')
            // if(newState !== null){
            //     state.value = parseInt(newState)
            // }
        }
    }
})


export const {addNewUser} = createEmployee.actions

export default createEmployee.reducer