import * as type from './actions'
import { initialState } from './contacts'


export const ContactReducer = (state = initialState , action) => {
    switch(action.type) {
        case type.ADD_CONTACT :
            const existedContact = state.contacts.find( contact => contact.phone === action.payload.phone)
            if(!existedContact){
                return{
                    ...state,
                    contacts : [...state.contacts, action.payload]
                }
            }
            else{
                alert("phone number already exist ")
                return state
            }
        case type.DELETE_CONTACT:
            return{
                ...state,
                contacts : state.contacts.filter(contact => contact.phone !== action.payload)
            }
        case type.UPDATE_CONTACT:
            const photo = action.payload.photo
            const fname = action.payload.fname
            const lname = action.payload.lname
            const phone = action.payload.phone
            const email = action.payload.email

            return 
                state.contacts.map((contact) => {
                    contact.phone !== action.payload.phone 
                    ?contact
                    : {photo : photo , fname : fname, lname:lname,  phone : phone , email : email}
                })
    }
}