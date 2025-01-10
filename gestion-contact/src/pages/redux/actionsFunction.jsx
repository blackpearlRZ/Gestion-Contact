import * as type from './actions'

export const AddContact = (contact) => {
    return{
        type : type.ADD_CONTACT,
        payload : contact
    }
}
export const DeleteContact = (phone) => {
    return{
        type : type.ADD_CONTACT,
        payload : phone
    }
}
export const UpdateContact = (contact, fname,lname,phone,email,photo) => {
    return{
        type : type.ADD_CONTACT,
        payload : contact,fname,lname,phone,email,photo
    }
}