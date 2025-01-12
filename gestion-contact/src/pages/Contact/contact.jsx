import './contact.css';
import { initialState } from '../redux/contacts';
import userPhoto from '../../assets/user.jpg';
import { useState } from 'react';
import ConctactInfo from './conctactInfo';
import SearchBar from './SearchBar';

export default function Contact() {
  const [clicked, setClicked] = useState(false)
  const [contact, setContact] = useState(null)
  const [search, setSearch] = useState('')

  
  const filteredContacts = initialState.contacts.filter(
    (contact) =>
      contact.fname.toLowerCase().includes(search.toLowerCase()) ||
      contact.lname.toLowerCase().includes(search.toLowerCase())
  )
  function handleInfo(contact) {
    setClicked(true)
    setContact(contact)
    console.log(contact)
  }

  function handleback() {
    setClicked(false)
    setContact(null)
  }

  return (
    <div className="contact">
      <SearchBar setSearch={setSearch} />
      {clicked === false ? (
        <div className="list_contact">
          {filteredContacts.map((contact, index) => (
            <div className="list_contact_item" key={index}>
              <img
                src={contact.photo === '' ? userPhoto : contact.photo}
                alt="photo_contact"
                className="user_photo"
              />
              <h4>
                {contact.fname} {contact.lname}
              </h4>
              <button onClick={() => handleInfo(contact)}>More Info</button>
            </div>
          ))}
        </div>
      ) : (
        <div className="contact_info">
          <h1>More Info</h1>
          <div>
            {contact && (
              <ul>
                <li>First Name: {contact.fname}</li>
                <li>Last Name: {contact.lname}</li>
                <li>Phone: {contact.phone}</li>
              </ul>
            )}
            <button>Modifier</button>
            <button>Supprimer</button>
          </div>
          <button className="back_btn" onClick={handleback}>
            Back to Contact
          </button>
        </div>
      )}
    </div>
  )
}
