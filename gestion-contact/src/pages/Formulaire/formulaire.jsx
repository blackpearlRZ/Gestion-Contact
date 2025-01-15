import React, { useState } from "react";
import "./formulaire.css";

const formulaire = () => {
  const [profileImage, setProfileImage] = useState("./téléchargement (1).png");

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
  return (
    <>
      <form className="form">
        <p className="title">Nouveau contact </p>

        <div className="row">
          <div className="small-12 medium-2 large-2 columns">
            <div className="circle">
              <img className="profile-pic" src={profileImage} alt="Profile" />
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
            <input className="input" type="text" placeholder="" required="" />
            <span>Nom</span>
          </label>

          <label>
            <input className="input" type="text" placeholder="" required="" />
            <span>Prenom</span>
          </label>
        </div>

        <label>
          <input className="input" type="email" placeholder="" required="" />
          <span>ajouter une adresse e-mail</span>
        </label>

        <label>
          <input className="input" type="text" placeholder="" required="" />
          <span>ajouter un numero </span>
        </label>
        <label>
          <input className="input" type="text" placeholder="" required="" />
          <span>ajouter une adresse</span>
        </label>
        <button class="submit">Enregistrer</button>
      </form>
    </>
  );
};

export default formulaire;
