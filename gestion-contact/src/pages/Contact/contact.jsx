import './contact.css'
import { initialState } from '../redux/contacts'
import userPhoto from '../../assets/user.jpg'
export default function Contact (){
    return(
        <>
        <div className="contact">
            <div class="search">
            <input placeholder="Search" class="search__input" type="text" />
            <button class="search__button">
                <svg
                viewBox="0 0 16 16"
                class="bi bi-search"
                fill="currentColor"
                height="16"
                width="16"
                xmlns="http://www.w3.org/2000/svg"
                >
                <path
                    d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"
                ></path>
                </svg>
            </button>
            </div>
            <div className='list_contact'>
                {initialState.contacts.map(contact =>(
                    <div className='list_contact_item'>
                    <img src={contact.photo =="" ? userPhoto : contact.photo} alt="photo_contact" className='user_photo' />
                    <h4>{contact.fname} {contact.lname}</h4>
                    <button>More Info</button>
                </div>
                ))}
            </div>
        </div>
        </>
    )
}