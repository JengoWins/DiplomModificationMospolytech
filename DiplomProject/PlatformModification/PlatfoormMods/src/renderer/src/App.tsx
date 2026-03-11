import { BrowserRouter, Route, Routes} from 'react-router-dom';
import MainPage from './Pages/MainPage';
import { RegistrationForm } from './Pages/Registration';
import { AutorizationForm } from './Pages/Autorization';
import { Profile } from './Pages/Profile';
import "../src/assets/CSS/index.css" 
import "../src/assets/CSS/autorization.css" 
import "../src/assets/CSS/registration.css" 
import "../src/assets/CSS/profile.css" 
import "../src/assets/CSS/Mod.css"
import { PostMod } from './Pages/PostMod';

function App(): React.JSX.Element {
  return (
    <>
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<MainPage />}/>
              <Route path="/Logging" element={<AutorizationForm />}/>
              <Route path="/Registration" element={<RegistrationForm />} />
              <Route path="/Profile" element={<Profile />} />
              <Route path='/Mod/Udentify' element={<PostMod />}></Route>
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
