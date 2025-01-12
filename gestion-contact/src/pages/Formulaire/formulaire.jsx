import "./formulaire.css";
import { FaPhoneAlt, FaUser } from 'react-icons/fa';
import { MdOutlineMail } from "react-icons/md";
import { IoMdPhotos } from "react-icons/io";
export default function Formulaire() {

  return (
    <>
      <div className="formulaire">
        <form>
          <h1>Fill Up This Form</h1>
          <div>
          <IoMdPhotos className="input-icon1" />
            <input type="file" accept="image/*" />

          </div>
          <FaUser className="input-icon" />
            <input type="text" placeholder="Prénom"  />
          <div>
          </div>
          <div>
          <FaUser className="input-icon2" />
            <input type="text" placeholder="Nom de famille"  />
          </div>
          <div>
          <FaPhoneAlt className="input-icon3" />
            <input type="text" placeholder="Téléphone"  />
          </div>
          <div>
          <MdOutlineMail className="input-icon4"/>
            <input type="email" placeholder="Email"  />
          </div>
          <button type="submit">Enregistrer</button>
        </form>
      </div>
    </>
  );
}
