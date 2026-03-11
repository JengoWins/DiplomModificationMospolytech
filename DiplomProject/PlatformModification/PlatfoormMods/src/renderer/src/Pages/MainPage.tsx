import Menu from '../components/Menu'
import Footer from '../components/Footer'
import MainContent from '../components/MainContent'

function MainPage(): React.JSX.Element {
  const keepIndex = 0; // Номер стиля, который нужно оставить включенным (начиная с 0)

  document.querySelectorAll('style').forEach((style, index) => {
    if (index !== keepIndex) {
      style.disabled = true;
    } else {
      style.disabled = false; // Убедимся, что нужный стиль включен
    }
  });
  return (
    <>
    <Menu></Menu>
    <MainContent></MainContent>
    <Footer></Footer>
    </>
  )
}

export default MainPage