import React, { useState, useEffect } from "react";
import { Header } from "../componets/Header";
import { AppLable } from "../componets/AppLable";
import { AppButton } from "../componets/AppButton";

const StepOne = () => {
  const phoneRegex = /^\+?\d{1,4}?[\s-]?\(?\d{1,4}\)?[\s-]?\d{1,4}[\s-]?\d{1,4}[\s-]?\d{1,9}$/;
  const nameRegex = /^[a-zA-Zа-яА-ЯёЁ]{1,20}$/;
  const [nameValue, setNameValue] = useState("");
  const [phoneValue, setPhoneValue] = useState("");

  const [nameError, setNameError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);

  const handleClick = () => {
    const isNameValid = nameRegex.test(nameValue);
    const isPhoneValid = phoneRegex.test(phoneValue);

    setNameError(!isNameValid);
    setPhoneError(!isPhoneValid);
  };

  useEffect(() => {
    console.log(nameValue);
    console.log(phoneValue);
  }, [nameValue, phoneValue]);

  return (
    <div className="container">
      <div className="wrapper">
        <div className="single-input-quiz">
          <div className="indicator">
            <div className="indicator__text">
              <span className="indicator__description">
                Скидка за прохождение опроса:
              </span>
              <span className="indicator__value">15%</span>
            </div>
            <div className="indicator__progressbar">
              <div className="indicator__unit indicator__unit-1"></div>
              <div className="indicator__unit indicator__unit-2"></div>
              <div className="indicator__unit indicator__unit-3"></div>
              <div className="indicator__unit indicator__unit-4"></div>
            </div>
          </div>
          <div className="question">
            <Header headerType="h1" headerText="1. Занимательный вопрос" />
            <AppLable
              labelText="Ваш ответ"
              errorText="Введите ответ в правильном формате"
              id="username"
              hasError={nameError}
              isRequired // Булевый атрибут без значения
              inputPlaceholder="Ответ"
              inputType="text"
              labelChange={setNameValue}
              labelValue={nameValue}
            />
            <Header headerType="h1" headerText="2. Интересный вопрос" />
            <AppLable
              labelText="Ваш ответ"
              errorText="Введите ответ в правильном формате"
              id="phone"
              hasError={phoneError}
              isRequired // Булевый атрибут без значения
              inputPlaceholder="Ответ"
              inputType="text"
              labelChange={setPhoneValue}
              labelValue={phoneValue}
            />
            <AppButton
              buttonText="Далее"
              isDisabled={nameError || phoneError} // Здесь значение оставляем
              buttonClick={handleClick}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepOne;
