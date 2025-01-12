import { Navigate, Route,Routes,BrowserRouter } from "react-router-dom";
import Formulaire from "../pages/Formulaire/formulaire";
import Contact from "../pages/Contact/contact";
import ContactList from "../pages/Contact/contactList";
import ConctactInfo from "../pages/Contact/conctactInfo";
export default function Routers(){
    return(
        <>
        <Routes>
            <Route path="/" element={<Navigate to='/Formulaire'/>}/>
            <Route path="/Formulaire" element={<Formulaire/>}/>
            <Route path="/Contact" element={<Contact/>}/>
        </Routes>
        </>
    )
}