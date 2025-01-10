import './contact.css'
import { initialState } from '../redux/contacts'
import userPhoto from '../../assets/user.jpg'
export default function Contact (){
    return(
        <>
        <div className="contact">
            <h1>Contact Page </h1>
            <input type=" text "  placeholder='Search for your contact'/>
            <div className='list_contact'>
                {initialState.contacts.map(contact =>(
                    <div className='list_contact_item'>
                    <img src={userPhoto} alt="photo_contact" className='user_photo' />
                    <h4>{contact.fname} {contact.lname}</h4>
                </div>
                ))}
            </div>
        </div>
        </>
    )
}