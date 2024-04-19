import { useState , useEffect} from 'react'
import Nav from './Nav/Nav.jsx'
import Hero from './Hero/Hero.jsx'
function App() {

  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const storedVisibility = localStorage.getItem("visibility");
    if (storedVisibility) {
      setVisible(JSON.parse(storedVisibility));
    }
  }, []);

  function signOutVisible() {
    setVisible(false);
    localStorage.setItem("visibility", JSON.stringify(false));
    setTimeout(() => {
      setVisible(true);
    },0);
  }

  function handleSignIn() {
    localStorage.setItem("visibility", JSON.stringify(false));
    window.location.href = '/signin';
  }

  function handleRegister() {
    localStorage.setItem("visibility", JSON.stringify(false));
    window.location.href = '/signup';
  }

  return (
    <>
    <Nav visible={visible} signOutVisible={signOutVisible} handleRegister={handleRegister} handleSignIn = {handleSignIn}/>
    <Hero visible={visible} signOutVisible ={signOutVisible} />
    </>
  )
}

export default App
