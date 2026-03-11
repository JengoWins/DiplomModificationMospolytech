import { useState } from 'react';
import axios from "axios";
import { CheckLengthLogin } from "@renderer/script/checkRegistration";
import { NavLink } from 'react-router-dom';

interface GetToken{
    access_token: string,
    user: string
}

interface JsonDataAuto{
    username: string,
    password: string
}

interface ObjectCheckDataAuto{
    username: string,
    password: string
}
export function AutorizationForm(): React.JSX.Element {
  
  const keepIndex = 1; // Номер стиля, который нужно оставить включенным (начиная с 0)

  document.querySelectorAll('style').forEach((style, index) => {
    if (index !== keepIndex) {
      style.disabled = true;
    } else {
      style.disabled = false; // Убедимся, что нужный стиль включен
    }
  });

  const [formData,setFormData] = useState<ObjectCheckDataAuto>({
    username: '',
    password: ''
  });

  const [formDataResponse] = useState<JsonDataAuto>({
    username: '',
    password: ''
  });

  const [response, setResponse] = useState<GetToken>({
    access_token: '',
    user: ''
  });

  const Infomation = (error: HTMLElement, infomation: {colors:string, info:string}) => {
      if(infomation.info!==''){
          error.style.visibility = 'visible';
          error.style.color = infomation.colors; 
          error.innerText = infomation.info;
      }else{
          error.style.visibility = 'hidden';
          error.innerText = '';
      }
  };


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    
    if(name === 'username'){
      let error = document.getElementById("ErrorLogin");
      const infomation = CheckLengthLogin(value.length);
      Infomation(error!,infomation)
      console.log(formData.username);
    }
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    formDataResponse.username = formData.username;
    formDataResponse.password = formData.password;
    
    axios
      .get("https://localhost:7171/api/Account", {
          params: formDataResponse
        })
      .then((response) => {
        setResponse(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log("Ошибка API: Обратитесь к администрации сервера. Описание ошибки: " + error);
      });
    console.log('Отправленные данные:', response);
    localStorage.setItem("token", JSON.stringify(response));
  };

  
  return (
    <>
    <div className="LineLight one"></div>
    <div className="LineLight two"></div>
      <div className="containerRegistration">
        <div className="card">
            <h1>ВХОД В СИСТЕМУ</h1>
            <hr />
            <br />
        </div>
            <form id="registrationForm" onSubmit={handleSubmit}>

                <div className="form-group">
                    <label htmlFor="username"><i>Логин</i></label>
                    <input type="text" name="username" value={formData.username} onChange={handleChange} placeholder="Введите существующий логин" required/>
                </div>
                <div className="field-hint" id="ErrorLogin"></div>

                <div className="form-group">
                    <label htmlFor="password"><i>Пароль</i></label>
                    <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Пароль к вашему аккаунту" required/>
                </div>

                <div className="ButtonNav">
                  <NavLink className="button-link" to="/">Главное меню</NavLink>
                  <NavLink className="button-link" to="/Registration">Регистрация</NavLink>
                  <NavLink className="button-link" to="/Profile">Профиль</NavLink>
                  <NavLink className="button-link" to="/Mod/Udentify">Модификация</NavLink>
                  <button className="button-Complete">Войти</button>
                </div>
            </form>
    </div>
    </>
  );
}
