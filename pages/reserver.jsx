
import React from "react";
export default function Reserver() {
  return (
    <div style={{ padding: 20 }}>
      <h1>Réserver une table</h1>
      <form>
        <input placeholder="Nom" /><br />
        <input placeholder="Email" type="email" /><br />
        <input type="date" /><br />
        <input type="time" /><br />
        <input type="number" placeholder="Personnes" /><br />
        <select><option>Salle</option><option>Terrasse</option></select><br />
        <button>Réserver</button>
      </form>
    </div>
  );
}
