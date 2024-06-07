import Dropdown from "./Dropdown";
import React, { useState, useEffect } from "react";
import axios from "axios";

let Email = React.forwardRef((props, ref) => {
  Email.displayName = "Email"; // Add display name

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    mobile: "",
    option: "",
    additional: "",
  });

  const dropOption = (optionUser) => {
    setFormData({ ...formData, option: optionUser });
  };

  const dropAdditional = (inputUser) => {
    setFormData({ ...formData, additional: inputUser });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const sendDataToBackend = async (data) => {
    try {
      const response = await axios.post("denis-api-swytdrymzs-projects.vercel.app/email", data);
      console.log("Data successfully sent:", response.data);
      // Zde můžete provést další akce na základě odpovědi od serveru
    } catch (error) {
      console.error("Error sending data:", error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendDataToBackend(formData);
  };

  // useEffect(() => {
  //   console.log(formData) // Tady je aktualizovaná hodnota
  // }, [formData])

  return (
    <div ref={ref}>
      <h2>Chcete si domluvit schůzku? Kontaktujte mě zde.</h2>
      <form onSubmit={handleSubmit}>
        <label>Jméno a příjmení</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        ></input>
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        ></input>
        <label>Telefon</label>

        <input
          type="tel"
          name="mobile"
          value={formData.mobile}
          onChange={handleChange}
          required
        ></input>
        <Dropdown
          optionToParent={dropOption}
          additionalToParent={dropAdditional}
        ></Dropdown>
        {/* možná oddělat */}
        <label>Chcete mi poslat i zprávu? *nepovinné</label>
        <input
          type="text"
          name="message"
          value={formData.message}
          onChange={handleChange}
        ></input>

        <button type="submit">Odeslat</button>
      </form>
      <p>Odesláním souhlasíte se zpracováním osobních údajů</p>
      <p>example@exapmle.com</p>
      <p>564 454 546</p>
    </div>
  );
});

export default Email;
