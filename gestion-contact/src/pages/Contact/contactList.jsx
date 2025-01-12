import React from 'react'
import userPhoto from '../../assets/user.jpg'
import { initialState } from '../redux/contacts'
import { Link } from 'react-router-dom'
export default function ContactList() {
  return (
    <div className='list_contact'>
                {initialState.contacts.map(contact =>(
                    <div className='list_contact_item'>
                    <img src={contact.photo =="" ? userPhoto : contact.photo} alt="photo_contact" className='user_photo' />
                    <h4>{contact.fname} {contact.lname}</h4>
                    <Link to='/Contact/${contact.phone}'><button onClick={() => handleInfo()}>More Info</button></Link>
                </div>
                ))}
    </div>
  )
}
