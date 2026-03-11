//import "../assets/CSS/index.css"
import VKIcon from '../assets/img/tg.png';
import TGIcon from '../assets/img/vk.png';

function Footer(): React.JSX.Element {
  return (
    <>
    <footer>
      <div className="Status-KVO">
        <p>Copyright © 2025 Куренков Алексей</p>
      </div>
      <div className="contact">
        <a href=""><img src={VKIcon}alt="" width="50px" height="50px"/></a>
        <a href=""><img src={TGIcon} alt="" width="50px" height="50px"/></a>
      </div>
    </footer>
    </>
  )
}

export default Footer