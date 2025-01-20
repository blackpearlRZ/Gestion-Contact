import { initialState } from "./contacts";

export function ContactReducers(state = initialState, action){
    switch(action.type){
        case 'ADD_CONTACT':
            return {
                ...state,
                contacts : [...state.contacts,action.payload]
            }
        case 'DELETE_CONTACT':
            return {
                ...state,
                contacts : state.contacts.filter(contact => contact.id !== action.payload.id)
            }
        case 'UPDATE_CONTACT':
            return{
                ...state,
                contacts : state.contacts.map(contact => {
                    if(contact.id == action.payload.id){
                        return{
                            ...contact,
                            fname : action.payload.fname,
                            lname : action.payload.lname,
                            email : action.payload.email,
                            phone : action.payload.phone,
                            photo : action.payload.photo
                        }
                    }
                    else {
                        return contact
                    }
                })
            }
        case 'SET_ID':
            return {
                ...state,
                id : action.payload
            }
        default :
            return state
    }
}