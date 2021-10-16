import './App.css';
import Logo from './Components/Logo';
import Header from './Components/Header';
import Body from './Components/Body';
import Buttons from './Components/Buttons';
//import useState from 'react';

function App() {



//  const [texts, setTexts] = useState([
  const texts = [
  {
    header: "Are you ready?",
    body: "Welcome to you very first challenge! I guarantee you your life will change.",
    challengeChoice: "Choose your challenge: "
  },
  {
    header: "Instructions",
    body: "Body",
    challengeChoice: ""
  }
  ]
  
 
 const nextText = () => texts[0];

//    {texts.map(texts) => }
  /*
    {
    header: "Instructions",
    body: "Your journey to self-improvement is about to begin. Congratulation for taking this step. Each quest must be taken in a day, and once you accomplish the daily challenge, click the NEXT button. If for any reason you're not able to realise the challenge, press the 'scape' button to jump to the next challenge. Once per day, dedicate yourself to each challenge. Now let's start!",
    challengeChoice: "",
    id: 1,
  }
  ]
*/
  return (
    <>
    <Logo />
    <div className="wrapper">
    <Header texts={texts} />
    <Body texts={texts} />
    <Buttons nextText={nextText}/>

    </div>
    </>
  );
}

export default App;
