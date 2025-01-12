import { initialState } from "./contacts";

export function contactReducers(state = initialState, action){
    switch(action.type){
        case 'ADD_CONTACT':
            return {
                ...state,
                contacts : [...state.contacts,action.payload]
            }
        case 'DELETE_CONTACT':
            return {
                ...state,
                contacts : state.contacts.filter(contact => contact.phone !== action.payload.phone)
            }
        case 'UPDATE_CONTACT':
            return{
                ...state,
                contacts : state.contacts.map(contact => {
                    if(contact.phone == action.payload.phone){
                        return{
                            ...contact,
                            fname : action.payload.fname,
                            lname : action.payload.lname,
                            phone : action.payload.phone,
                            email : action.payload.email,
                            photo : action.payload.photo
                        }
                    }
                    else {
                        return contact
                    }
                })
            }
        default :
            return state
    }
}