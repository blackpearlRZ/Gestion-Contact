import { Navigate, Route,Routes,BrowserRouter } from "react-router-dom";
import Formulaire from "../pages/Formulaire/formulaire";
import Contact from "../pages/Contact/contact";
export default function Routers(){
    return(
        <>
        <Routes>
            <Route path="/" element={<Formulaire/>}/>
            <Route path="/Formulaire" element={<Formulaire/>}/>
            <Route path="/Contact" element={<Contact/>}/>
        </Routes>
        </>
    )
}