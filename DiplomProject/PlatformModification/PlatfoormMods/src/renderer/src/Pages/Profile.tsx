import Footer from "@renderer/components/Footer";
import { NavLink } from "react-router-dom";
import imgProfile from "../assets/img/NoProfile.png"
import imgIconEmail from "../assets/img/EmaiIcon.png"
import imgIconLogin from "../assets/img/loginIcon.png"
import iconClose from "../assets/img/IconClose.png"
import iconComplete from "../assets/img/IconComplete.png"
import iconError from "../assets/img/IconError.png"
import iconInfomation from "../assets/img/IconInfomation.png"
import iconTime from "../assets/img/IconTime.png"
import iconWarning from "../assets/img/IconWarning.png"


export function Profile(): React.JSX.Element {
  const keepIndex = 3; // Номер стиля, который нужно оставить включенным (начиная с 0)

  document.querySelectorAll('style').forEach((style, index) => {
    if (index !== keepIndex) {
      style.disabled = true;
    } else {
      style.disabled = false; // Убедимся, что нужный стиль включен
    }
  });
return (
    <>
      <header>
            <div className="auth-button">
                <NavLink className="button-link" to="/">Главное меню</NavLink>
                <button className="button-link-alt">Выход</button>
            </div>
      </header>
      <main>
        <p className="Role">Пользователь</p>
        <div className="InfomationUser">
          <div className="Avatar"><img src={imgProfile} alt="" /></div>
          <div className="InfomationText">
            <div className="NameUser">
              <h2>Петров Петр Петрович</h2>
            </div>
            <div className="LoginUser">
              <img src={imgIconLogin} alt="" />
              <p>@userPetros</p>
            </div>
            
            <p>Это ваша информация об аккаунте</p>
            <div className="Contact"><img src={imgIconEmail} alt="" /><p>Petros@mail.ru</p></div>
          </div>
        </div>
        <div className="buttonsOption">
          <button className="ButOption">Личная информация</button>
          <button className="ButOption">Список Модификаций</button>
          <button className="ButOption">Список Обсуждений</button>   
          <button className="ButOption">Жалобы</button>     
          <button className="ButOption">Список пользователей</button>  
        </div>
        <div className="FunctionProfile">
          <div className="UpdateProfile">
            <form action="">
            <div className="Inputline">
                <div className="form-group">
                    <label htmlFor="fullname"><i>Фамилия Имя Отчество: </i></label><br /><br />
                    <input type="text" name="fullname" placeholder="Например: Иванов Иван Иванович" required/>
                </div>

                <div className="form-group">
                    <label htmlFor="username"><i>Логин:</i></label><br /><br />
                    <input type="text" name="username" readOnly={true} placeholder="Придумайте уникальный логин" required/>
                </div>
            </div>
            <div className="Inputline">
                <div className="form-group">
                    <label htmlFor="password"><i>Пароль: </i></label><br /><br />
                    <input type="password" name="password" placeholder="Например: Иванов Иван Иванович" required/>
                </div>

                <div className="form-group">
                    <label htmlFor="date"><i>Дата рождения:</i></label><br /><br />
                    <input type="text" name="date" placeholder="Придумайте уникальный логин" required/>
                </div>
            </div>
            <div className="Inputline">
                <div className="form-group">
                    <label htmlFor="bio"><i>Описание профиля</i></label><br /><br />
                    <textarea name="bio" placeholder="Расскажите о себе, своих интересах или профессиональном опыте..."></textarea>
                </div>
                <div className="form-group">
                    <label htmlFor="ExtContact"><i>Дополнительные контакты</i></label><br /><br />
                    <select name="contacts">
                      <option value="Телеграм">Телеграм</option>
                      <option selected value="ВКонтакте">ВК</option>
                    </select>
                </div>
            </div>
            <br />
            <button className="ButOption">Принять</button>
            </form>
          </div>
          <div className="PostsMods">
            <div className="PopularMods-block">
                <div className="elementModsMin">
                  <div className="imgBlock"><img src="/src/assets/img/NoImgV2.png" width="150px" height="100px" alt=""/></div>
                  <div className="textBlock">
                    <div className="headerMods">
                      <div className="HeadMod"><p>Без Названия</p></div>
                      <div className="LogoGame"><img src="/src/assets/img/NoIcon.png" width="25px" height="25px" alt=""/></div>
                      <div className="PointLike"><p>0</p></div>
                      <div className="LogoLike"><img src="/src/assets/img/like.png" width="25px" height="25px" alt=""/></div>
                    </div>
                    <hr/>
                    <div className="Descript"><p>Здесь должно быть ваше описание</p></div>
                  </div>
                </div>
                <div className="elementModsMin">
                  <div className="imgBlock"><img src="/src/assets/img/NoImgV2.png" width="150px" height="100px" alt=""/></div>
                  <div className="textBlock">
                    <div className="headerMods">
                      <div className="HeadMod"><p>Без Названия</p></div>
                      <div className="LogoGame"><img src="/src/assets/img/NoIcon.png" width="25px" height="25px" alt=""/></div>
                      <div className="PointLike"><p>0</p></div>
                      <div className="LogoLike"><img src="/src/assets/img/like.png" width="25px" height="25px" alt=""/></div>
                    </div>
                    <hr/>
                    <div className="Descript"><p>Здесь должно быть ваше описание</p></div>
                  </div>
                </div>
                <div className="elementModsMin">
                  <div className="imgBlock"><img src="/src/assets/img/NoImgV2.png" width="150px" height="100px" alt=""/></div>
                  <div className="textBlock">
                    <div className="headerMods">
                      <div className="HeadMod"><p>Без Названия</p></div>
                      <div className="LogoGame"><img src="/src/assets/img/NoIcon.png" width="25px" height="25px" alt=""/></div>
                      <div className="PointLike"><p>0</p></div>
                      <div className="LogoLike"><img src="/src/assets/img/like.png" width="25px" height="25px" alt=""/></div>
                    </div>
                    <hr/>
                    <div className="Descript"><p>Здесь должно быть ваше описание</p></div>
                  </div>
                </div><div className="elementModsMin">
                  <div className="imgBlock"><img src="/src/assets/img/NoImgV2.png" width="150px" height="100px" alt=""/></div>
                  <div className="textBlock">
                    <div className="headerMods">
                      <div className="HeadMod"><p>Без Названия</p></div>
                      <div className="LogoGame"><img src="/src/assets/img/NoIcon.png" width="25px" height="25px" alt=""/></div>
                      <div className="PointLike"><p>0</p></div>
                      <div className="LogoLike"><img src="/src/assets/img/like.png" width="25px" height="25px" alt=""/></div>
                    </div>
                    <hr/>
                    <div className="Descript"><p>Здесь должно быть ваше описание</p></div>
                  </div>
                </div>
                <div className="elementModsMin">
                  <div className="imgBlock"><img src="/src/assets/img/NoImgV2.png" width="150px" height="100px" alt=""/></div>
                  <div className="textBlock">
                    <div className="headerMods">
                      <div className="HeadMod"><p>Без Названия</p></div>
                      <div className="LogoGame"><img src="/src/assets/img/NoIcon.png" width="25px" height="25px" alt=""/></div>
                      <div className="PointLike"><p>0</p></div>
                      <div className="LogoLike"><img src="/src/assets/img/like.png" width="25px" height="25px" alt=""/></div>
                    </div>
                    <hr/>
                    <div className="Descript"><p>Здесь должно быть ваше описание</p></div>
                  </div>
                </div>
                <div className="elementModsMin">
                  <div className="imgBlock"><img src="/src/assets/img/NoImgV2.png" width="150px" height="100px" alt=""/></div>
                  <div className="textBlock">
                    <div className="headerMods">
                      <div className="HeadMod"><p>Без Названия</p></div>
                      <div className="LogoGame"><img src="/src/assets/img/NoIcon.png" width="25px" height="25px" alt=""/></div>
                      <div className="PointLike"><p>0</p></div>
                      <div className="LogoLike"><img src="/src/assets/img/like.png" width="25px" height="25px" alt=""/></div>
                    </div>
                    <hr/>
                    <div className="Descript"><p>Здесь должно быть ваше описание</p></div>
                  </div>
                </div>
                <div className="elementModsMin">
                  <div className="imgBlock"><img src="/src/assets/img/NoImgV2.png" width="150px" height="100px" alt=""/></div>
                  <div className="textBlock">
                    <div className="headerMods">
                      <div className="HeadMod"><p>Без Названия</p></div>
                      <div className="LogoGame"><img src="/src/assets/img/NoIcon.png" width="25px" height="25px" alt=""/></div>
                      <div className="PointLike"><p>0</p></div>
                      <div className="LogoLike"><img src="/src/assets/img/like.png" width="25px" height="25px" alt=""/></div>
                    </div>
                    <hr/>
                    <div className="Descript"><p>Здесь должно быть ваше описание</p></div>
                  </div>
                </div>
                <div className="elementModsMin">
                  <div className="imgBlock"><img src="/src/assets/img/NoImgV2.png" width="150px" height="100px" alt=""/></div>
                  <div className="textBlock">
                    <div className="headerMods">
                      <div className="HeadMod"><p>Без Названия</p></div>
                      <div className="LogoGame"><img src="/src/assets/img/NoIcon.png" width="25px" height="25px" alt=""/></div>
                      <div className="PointLike"><p>0</p></div>
                      <div className="LogoLike"><img src="/src/assets/img/like.png" width="25px" height="25px" alt=""/></div>
                    </div>
                    <hr/>
                    <div className="Descript"><p>Здесь должно быть ваше описание</p></div>
                  </div>
                </div>
            </div>
          </div>
          <div className="Moderate">
              <div className="ElementModerate">
                <div className="BlockText">
                  <div className="Line"><img src={iconWarning} alt="" width="50px" height="50px"/><h2>Название проблематики</h2></div>
                  <div className="Line"><p className="TextP">Здесь ваше описание проблемы....</p></div>
                  <div className="Line"><img src="/src/assets/img/NoImgV2.png" alt="" width="100px" height="100px" /><img src="/src/assets/img/NoImgV2.png" alt="" width="100px" height="100px" /><img src="/src/assets/img/NoImgV2.png" alt="" width="100px" height="100px"/></div>
                  <div className="Line"><p className="TextP"><i>Пользователь: </i>@Gotum89</p><p className="TextP"><i>Дата: </i> 01.01.1899</p></div>
                  <br />
                  <button className="ButOption">Принять</button>
                  <button className="ButOption">Отклонить</button>
                </div>
                <div className="BlockStatus">
                  <div className="Status"><p className=""><b>В процессе...</b></p></div>
                </div>
              </div>
               <div className="ElementModerate">
                <div className="BlockText">
                  <div className="Line"><img src={iconWarning} alt="" width="50px" height="50px"/><h2>Название проблематики</h2></div>
                  <div className="Line"><p className="TextP">Здесь ваше описание проблемы....</p></div>
                  <div className="Line"><img src="/src/assets/img/NoImgV2.png" alt="" width="100px" height="100px" /><img src="/src/assets/img/NoImgV2.png" alt="" width="100px" height="100px" /><img src="/src/assets/img/NoImgV2.png" alt="" width="100px" height="100px"/></div>
                  <div className="Line"><p className="TextP"><i>Пользователь: </i>@Gotum89</p><p className="TextP"><i>Дата: </i> 01.01.1899</p></div>
                  <br />
                  <button className="ButOption">Принять</button>
                  <button className="ButOption">Отклонить</button>
                </div>
                <div className="BlockStatus">
                  <div className="Status"><p className=""><b>В процессе...</b></p></div>
                </div>
              </div>
               <div className="ElementModerate">
                <div className="BlockText">
                  <div className="Line"><img src={iconWarning} alt="" width="50px" height="50px"/><h2>Название проблематики</h2></div>
                  <div className="Line"><p className="TextP">Здесь ваше описание проблемы....</p></div>
                  <div className="Line"><img src="/src/assets/img/NoImgV2.png" alt="" width="100px" height="100px" /><img src="/src/assets/img/NoImgV2.png" alt="" width="100px" height="100px" /><img src="/src/assets/img/NoImgV2.png" alt="" width="100px" height="100px"/></div>
                  <div className="Line"><p className="TextP"><i>Пользователь: </i>@Gotum89</p><p className="TextP"><i>Дата: </i> 01.01.1899</p></div>
                  <br />
                  <button className="ButOption">Принять</button>
                  <button className="ButOption">Отклонить</button>
                </div>
                <div className="BlockStatus">
                  <div className="Status"><p className=""><b>В процессе...</b></p></div>
                </div>
              </div>
          </div>
          <div className="PostsDiscussion">
            <div className="ElementDiscussion">
                <div className="BlockText">
                  <div className="Line"><h3>Название обсуждения</h3></div>
                  <div className="Line"><p className="TextP">Здесь ваше описание дискуссии....</p></div>
                  <div className="Line"><p className="TextP"><i>Пользователь: </i>@Gotum89</p><p className="TextP"><i>Дата: </i> 01.01.1899</p><p className="TextP"><i>Комментарии: </i> 346</p></div>
                  <br />
                </div>
                <div className="BlockStatus">
                  <div className="Status"><p className=""><b>Активный</b></p></div>
                </div>
            </div>
          </div>
          <div className="Users">
            <div className="ElementUsers">
                <div className="BlockInfo">
                  <div className="Image"><img src={imgProfile} alt="" width="100px" height="100px" /></div>
                  <div className="Info"><h3>Петров Сидорович Молька</h3><p>@MirTor14</p></div>
                </div>
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
}