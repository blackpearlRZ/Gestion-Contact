import "./formulaire.css";
export default function Formulaire() {

  return (
    <>
      <div className="formulaire">
        <form>
          <h1>Fill Up This Form</h1>
          <div>
            <label>Photo:</label>
            <input type="file" accept="image/*" />
          </div>
            <label>Prénom:</label>
            <input type="text" placeholder="Prénom"  />
          <div>
          </div>
          <div>
            <label>Nom de famille:</label>
            <input type="text" placeholder="Nom de famille"  />
          </div>
          <div>
            <label>Téléphone:</label>
            <input type="text" placeholder="Téléphone"  />
          </div>
          <div>
            <label>Email:</label>
            <input type="email" placeholder="Email"  />
          </div>
          <button type="submit">Enregistrer</button>
        </form>
      </div>
    </>
  );
}
