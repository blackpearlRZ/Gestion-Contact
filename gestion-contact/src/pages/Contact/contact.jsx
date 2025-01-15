import './contact.css'
import { initialState } from '../redux/contacts'
import userPhoto from '../../assets/user.jpg'
import { useState } from 'react'
import { useNavigate} from 'react-router-dom'

export default function Contact (){
    const Navigate = useNavigate()
    const [clicked , setClicked] = useState('false')
    const [contact, setContact] = useState(null)
    function handleInfo(contact){
        setClicked('true')
        setContact(contact)
        console.log(contact)
    }
    function handleback(){
        setClicked('false')
        setContact(null)
    }
    function backForm(e){
        e.preventDefault()
        Navigate("/Formulaire")
    }
    
    return(
        <>
        <div className="contact">
            <div className="search">
            <input placeholder="Search" className="search__input"/>
            <button className="search__button">
                <svg
                viewBox="0 0 16 16"
                className="bi bi-search"
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
            {clicked == 'false' ? 
            <div className='list_contact'>
                {initialState.contacts.map((contact,index) =>(
                    <div className='list_contact_item' key={index}>
                    <img src={contact.photo =="" ? userPhoto : contact.photo} alt="photo_contact" className='user_photo' />
                    <h4>{contact.fname} {contact.lname}</h4>
                    <button onClick={() => handleInfo(contact)}>More Info</button>
                </div> 
                ))}
            </div>
            : <div className='contact_info'>
            <h1>More Info</h1>
            <div>
            {contact && (
                    <ul >
                        <li>First Name: {contact.fname}</li>
                        <li>Last Name: {contact.lname}</li>
                        <li>Phone: {contact.phone}</li>
                    </ul>
            )}
            <button onClick={backForm}>Modifier</button>
            <button>Supprimer</button>
            </div>
            <button className='back_btn' onClick={() => handleback()}>Back to Contact</button>
            </div> 
            }
        </div>
        </>
    )
}