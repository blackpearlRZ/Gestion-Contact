import "./formulaire.css";
export default function Formulaire() {
  return (
    <>
      <div className="formulaire">
        <form action="">
          <h1>Fill Up This Form</h1>
          <div>
            <label>Prénom:</label>
            <input type="text" placeholder="Prénom" value={firstName} />
          </div>
          <div>
            <label>Nom de famille:</label>
            <input type="text" placeholder="Nom de famille" value={lastName} />
          </div>
          <div>
            <label>Téléphone:</label>
            <input type="text" placeholder="Téléphone" value={phone} />
          </div>
          <div>
            <label>Email:</label>
            <input type="email" placeholder="Email" value={email} />
          </div>
          <div>
            <label>Photo:</label>
            <input type="file" accept="image/*" />
          </div>
          <button type="submit">Enregistrer</button>
        </form>
      </div>
    </>
  );
}
