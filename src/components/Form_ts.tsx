
import React, { useState } from 'react'
import '../App'

const First_ts: React.FC = () => {
    const handelsub = (e: any) => {
    setEmail("");
    setPassowrd("");
  };

  const handleChangeEmail = (e: any) => {
    setEmail(e.target.value)
  };
  const handleChangePassowrd = (e: any) => {
    setPassowrd(e.target.value)
  };

  const [Email, setEmail] = useState("");
  const [Password, setPassowrd] = useState("");

  const [messageEmail, setMessageEmail] = useState("");
  const [passwordMessage, setPasswordMessage] = useState("");

  const CheckValidtion = () => {
    //check if the feld is empty
    if (Email === "" || Password === "")
      alert("somting is emptyt please check ");
    //check email valdtion
    const EmailValidtion = () => {
      const regEx = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
      if (!regEx.test(Email)) {
        setMessageEmail("invalid Email");
        return false;
      } else {
        setMessageEmail(" Valid Email");
        return true;
      }
    }
    //check password valdtion
    const PasswordValidtion = () => {
      const regEx2 =
        /^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/;
      if (!regEx2.test(Password)) {
        setPasswordMessage("invalid password");
        return false;
      }
      else{
        setPasswordMessage("Valid Password");
        return true;
      }
    };

    if (EmailValidtion() || PasswordValidtion()) {
      return true;
    }
  } 

return (

  <div>
  <form onSubmit={handelsub}>
    <h1>Email Validation</h1>
          <label>Email:</label>
          <input type="email" placeholder="Email"value={Email} onChange={handleChangeEmail}/>
        <p className="label1"> {messageEmail}</p>
          <label>Password:</label>
          <input type="password" placeholder="Password" value={Password} onChange={handleChangePassowrd}/>
        <label className="label1"> {passwordMessage}</label>
    <button onClick={CheckValidtion}>Check</button>
  </form>
</div>

); 
}

export default First_ts

