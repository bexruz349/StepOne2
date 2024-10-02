import React, { useEffect, useState } from "react";
import { Header } from "../componets/Header";
import { AppLable } from "../componets/AppLable";
import { AppButton } from "../componets/AppButton";


const Welcome = () => {
  const phoneRegex =  /^\+?\d{1,4}?[\s-]?\(?\d{1,4}\)?[\s-]?\d{1,4}[\s-]?\d{1,4}[\s-]?\d{1,9}$/;
  const nameRegex = /^[a-zA-Zа-яА-ЯёЁ]{1,20}$/;
  const [nameValue, setNameValue]=useState("");
  const [phoneValue, setPhoneValue]=useState("");

  const [nameError, setNameError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);

  const handleClick = () => {
    if(! nameRegex.test(nameValue)) {
      setNameError(true);
    } else {
      setNameError(false);
    }
    if(!phoneRegex.test(phoneValue)) {
      setPhoneError(true);
    } else {
      setPhoneError(false);
    }
  };

  useEffect(()=>{
    console.log(nameValue);
    console.log(phoneValue);
  },[nameValue,phoneValue])

  return (
    <div className="container">
      <div className="wrapper">
        <div className="welcome">
          <Header headerType= "h1" HeaderText="Регистрация"/>
          <form className="welcome__form">
            <AppLable labelText="Ваше имя" 
            errorText="Введите имя в правельном формате" 
            id="username" 
            isRequired 
            inputPlaceholder="Имя" 
            inputTupe="text"
            labelChange={setNameValue}
            labelValue={nameValue}
            hasError={nameError}           
            />
            
            <AppLable 
            labelText="Ваш номер" 
            errorText="Введите имя в правельном формате" 
            id="phone"
            hasError={phoneError}

            isRequired={true} 
            labelChange={setPhoneValue}
            labelValue={phoneValue}
            inputPlaceholder="+998 9- --- -- --" 
            inputTupe="tel"

            />

            <AppButton 
            buttonText="Далее" 
            isDisabled={false}
            buttonClick={handleClick}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
