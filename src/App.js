import React, { useState } from 'react';
import './App.css';
/*import OpenAI from "openai";*/


function App() {

/*const openai = new OpenAI({apiKey: 'key goes here matt', dangerouslyAllowBrowser: true});
async function main() {
  const completion = await openai.chat.completions.create({
    messages: [{ role: "system", content: "You are a helpful assistant." }],
    model: "gpt-3.5-turbo",
  });
  console.log(completion.choices[0]);
}*/

  const [inputText1, setInputText1] = useState('');
  const [inputText2, setInputText2] = useState('');
  const [inputText3, setInputText3] = useState('');
  const [inputText4, setInputText4] = useState('');
  const [outputText, setOutputText] = useState('');

  /* kind of like observe in shiny*/
  const handleInputChange = (setter, event) => {
    setter(event.target.value);
  };

  /* update*, like in shiny*/
  const handleButtonClick = () => {
    const newText = `Hi! I should be writing you a story about ${inputText1} ${inputText2} ${inputText3} ${inputText4} using OpenAI GPT 3.5 but I've exhausted my api useage. If it ever returns, I'll update you. In the meantime, the experience thus far in creating a react app has been valuable. So long, 2023!`;
    setOutputText(newText);
  };

  return (
    <div className="container">
    <div className="column column1">
      <br></br>
      <br></br>
      <textarea
          id = "note1"
          value={inputText1}
          onChange={(event) => handleInputChange(setInputText1, event)}
          placeholder="1st Topic"
        />
       <textarea
          id = "note2"
          value={inputText2}
          onChange={(event) => handleInputChange(setInputText2, event)}
          placeholder="2nd Topic"
        />  
    </div>
    <div className="column column2">
    <div class="paper">
    <div class="paper-content">
        <textarea 
          value ={outputText}
          autoFocus
          placeholder="Enter topics into each sticky note and then I will write you a story about them!"    
        />
    </div>
</div>
<div align = "center">
  <br></br>
<button onClick={handleButtonClick}>Write Me a story</button>
</div>
    </div>
    <div className="column column3">
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
      <textarea
          id = "note3"
          value={inputText3}
          onChange={(event) => handleInputChange(setInputText3, event)}
          placeholder="3rd Topic"
        />
        <textarea
          id = "note4"
          value={inputText4}
          onChange={(event) => handleInputChange(setInputText4, event)}
          placeholder="4th Topic"
        /> 
    </div>
  </div>
  );
}

export default App;

 
