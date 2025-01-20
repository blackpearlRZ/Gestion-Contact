import React, { useState } from "react";
import "./formulaire.css";
import userPhoto from '../../assets/User.png'
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

const formulaire = () => {
  const [profileImage, setProfileImage] = useState(userPhoto);
  const stateId = useSelector(state => state.id)
  const stateInfo = useSelector(state => state.contacts).find(contact => contact.id == stateId)
  const [fname, setFname] = useState(stateId ? stateInfo.fname : "")
  const [lname, setLname] = useState(stateId ? stateInfo.lname : "")
  const [email, setEmail] = useState(stateId ? stateInfo.email : "")
  const [phone, setPhone] = useState(stateId ? stateInfo.phone : "")
  const dispatch = useDispatch()
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setProfileImage(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const triggerFileUpload = () => {
    document.getElementById("file-upload").click();
  };

  function handleSubmit(e){
    e.preventDefault()
    if(stateId){
      dispatch({
        type : 'UPDATE_CONTACT',
        payload : {
          id : stateId,
          fname ,
          lname,
          phone ,
          email,
          photo : 'User.png'
        }
      })
    }else {
      dispatch({
        type : 'ADD_CONTACT',
        payload : {
          id : Date.now(),
          fname ,
          lname,
          phone ,
          email,
         photo : 'User.png',
        }
      })
    }
  }
  return (
    <>
      <form className="form">
        <p className="title">{!stateId ? 'Nouveau Contact' : 'Modifier Contact'}</p>

        <div className="row">
          <div className="small-12 medium-2 large-2 columns">
            <div className="circle">
              <img className="profile-pic" src={userPhoto} alt="Profile" />
            </div>
            <div className="p-image">
              <i
                className="fa fa-camera upload-button"
                onClick={triggerFileUpload}
              ></i>
              <input
                id="file-upload"
                className="file-upload"
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                style={{ display: "none" }}
              />
            </div>
          </div>
        </div>
        <div className="flex">
          <label>
            <input className="input" type="text" placeholder="" required="" value={fname} onChange={(e) => setFname(e.target.value)}/>
            <span>Nom</span>
          </label>

          <label>
            <input className="input" type="text" placeholder="" required="" value={lname} onChange={(e) => setLname(e.target.value)}/>
            <span>Prenom</span>
          </label>
        </div>

        <label>
          <input className="input" type="email" placeholder="" required="" value={email} onChange={(e) => setEmail(e.target.value)}/>
          <span>ajouter une adresse e-mail</span>
        </label>

        <label>
          <input className="input" type="text" placeholder="" required="" value={phone} onChange={(e) => setPhone(e.target.value)}/>
          <span>ajouter un numero </span>
        </label>
        <label>
          <input className="input" type="text" placeholder="" required="" />
          <span>ajouter une adresse</span>
        </label>
        <button class="submit" onClick={(e) =>handleSubmit(e)}>{!stateId ? 'Ajouter' : 'Modifier'}</button>
      </form>
    </>
  );
};

export default formulaire;
