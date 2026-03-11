import { useState } from 'react';
import axios from "axios";
//import "../assets/CSS/registration.css"
import localImage from '../assets/img/NoProfile.png'; // Путь к изображению в src
import { CheckLengthLogin, strictEmailValidation, CheckStructurePass, CheckConfirmPass, CheckDateBirthd, CheckTextAreaLength } from "@renderer/script/checkRegistration";
import { NavLink } from 'react-router-dom';


interface GetToken{
    access_token: string,
    user: string
}

interface JsonDataReg{
    fullname: string,
    username: string,
    password: string,
    databirdth: string,
    description: string,
    contact: string
}

interface ObjectCheckDataReg{
    fullname: string,
    username: string,
    contact: string,
    password: string,
    confirmPassword: string,
    birthdate: string,
    bio: string,
    agreement: boolean
}

export function RegistrationForm(): React.JSX.Element {
  
  const keepIndex = 2; // Номер стиля, который нужно оставить включенным (начиная с 0)

  document.querySelectorAll('style').forEach((style, index) => {
    if (index !== keepIndex) {
      style.disabled = true;
    } else {
      style.disabled = false; // Убедимся, что нужный стиль включен
    }
  });

  const [formData, setFormData] = useState<ObjectCheckDataReg>({
    fullname: '',
    username: '',
    password: '',
    confirmPassword: '',
    birthdate: "",
    bio: '',
    contact: '',
    agreement: false,
  });

  const [formDataResponse] = useState<JsonDataReg>({
    fullname: '',
    username: '',
    password: '',
    databirdth: "",
    description: '',
    contact: '',
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

  const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
      if(name === 'bio'){
          let error = document.getElementById("ErrorDescript");
          const infomation = CheckTextAreaLength(value.length);
          Infomation(error!,infomation)
      }
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    
    if(name === 'username'){
      let error = document.getElementById("ErrorLogin");
      const infomation = CheckLengthLogin(value.length);
      Infomation(error!,infomation)
    }

    if(name === 'contact'){
        let error = document.getElementById("ErrorEmail");
        const infomation = strictEmailValidation(value.toString());
        Infomation(error!,infomation)
    }

    if(name === 'password'){
        let error = document.getElementById("ErrorPass");
        let errorLine = document.getElementById("ErrorPassLine");
        const infomation = CheckStructurePass(value.toString());

        if(infomation.level!==0){
          error!.style.visibility = 'visible';
          errorLine!.style.visibility = 'visible';

          if(infomation.level===1){
            errorLine!.style.width="10%";
            errorLine!.style.height="20px";
          }
          else if(infomation.level===2){
            errorLine!.style.width="20%";
            errorLine!.style.height="20px";
          }
          else if(infomation.level===3){
            errorLine!.style.width="30%";
            errorLine!.style.height="20px";
          }

          error!.style.color = infomation.colors;
          errorLine!.style.background = infomation.colors;

          error!.innerText = infomation.value;
        }else{
          error!.style.visibility = 'hidden';
          error!.innerText = '';
          errorLine!.style.visibility = 'hidden';
          errorLine!.style.width="0%";
          errorLine!.style.height="0px";
        }
    }
    if(name === 'confirmPassword'){
        let error = document.getElementById("ErrorConfirmPass");
        const infomation = CheckConfirmPass(formData.password,value.toString());
        Infomation(error!,infomation)
    }

    if(name === 'birthdate'){
        let error = document.getElementById("ErrorDate");
        const infomation = CheckDateBirthd(value.toString());
        Infomation(error!,infomation)
    }

    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    formDataResponse.fullname = formData.fullname;
    formDataResponse.username = formData.username;
    formDataResponse.password = formData.password;
    formDataResponse.databirdth = formData.birthdate;
    formDataResponse.description = formData.bio;
    formDataResponse.contact = formData.contact;

    // Преобразуем импортированное изображение в File
    const resFile = await fetch(localImage);
    const blob = await resFile.blob();
    const file = new File([blob], 'photo.png', { type: blob.type });

    const formImage = new FormData();
    formImage.append('file', file);
    
    axios.post('https://localhost:7171/api/ImageFile', formImage)
    
    axios
      .post("https://localhost:7171/api/Account", formDataResponse)
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
            <h1>СОЗДАТЬ ПРОФИЛЬ</h1>
            <hr />
            <br />
        </div>
            <form id="registrationForm" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="fullname"><i>ФИО: </i></label>
                    <input type="text" name="fullname" placeholder="Например: Иванов Иван Иванович" value={formData.fullname} onChange={handleChange} required/>
                </div>

                <div className="form-group">
                    <label htmlFor="username"><i>Логин</i></label>
                    <input type="text" name="username" value={formData.username} onChange={handleChange} placeholder="Придумайте уникальный логин" required/>
                </div>
                <div className="field-hint" id="ErrorLogin"></div>

                <div className="form-group">
                    <label htmlFor="email"><i>Почта</i></label>
                    <input type="email" name="contact" value={formData.contact} onChange={handleChange} placeholder="Ваша почта для связи с людьми" required/>
                </div>
                <div className="field-hint" id="ErrorEmail"></div>

                <div className="form-group">
                    <label htmlFor="password"><i>Пароль</i></label>
                    <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Не менее 8 символов" required/>
                </div>
                <div className="field-hint" id="ErrorPass"></div>
                <div className="field-hint progress" id="ErrorPassLine"></div>

                <div className="form-group">
                    <label htmlFor="confirmPassword"><i>Подтверждение</i></label>
                    <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} placeholder="Повторите пароль" required/>
                </div>
                <div className="field-hint" id="ErrorConfirmPass"></div>

                <div className="form-group">
                    <label htmlFor="birthdate"><i>Дата рождения</i></label>
                    <input type="date" name="birthdate" value={formData.birthdate} onChange={handleChange} required/>
                </div>
                <div className="field-hint" id="ErrorDate"></div>

                <div className="form-group">
                    <label htmlFor="bio"><i>Описание профиля</i></label>
                    <textarea name="bio" placeholder="Расскажите о себе, своих интересах или профессиональном опыте..." value={formData.bio} onChange={handleTextareaChange}></textarea>
                </div>
                <div className="field-hint" id="ErrorDescript"></div>
                <br />
                <div className="form-group agreement">
                    <div className="checkbox-container"><input type="checkbox" name="agreement" checked={formData.agreement} onChange={handleChange} required/></div>
                    <div className="TextBox"><span>Я согласен с </span><a href="#" className="link">условиями использования</a> и <a href="#" className="link">политикой конфиденциальности</a></div>
                </div>

                <div className="ButtonNav">
                  <NavLink className="button-link" to="/">Главное меню</NavLink>
                  <NavLink className="button-link" to="/Logging">Авторизация</NavLink>
                  <button className="button-Complete">Создать</button>
                </div>
            </form>
    </div>
    </>
  );
}
