import './App.css';
import Ex from './component/Ex1';
import Ex2 from './component/Ex2';
import Ex3 from './component/Ex3'

function App() {
  return (
    <div className="App">
      <Ex/>
      <Ex2/>
      <hr/>
      <Ex3/>
    </div>
  );
}

export default App;


///Using useState, initiate a array with random sentences with the length of 10 (minimum), and add the button with this button name="Change Sentence" When user click on button the sentence should change, use Math.random() function to select random index from array and show that index sentence to the use