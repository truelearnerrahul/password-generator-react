import React, { useCallback, useEffect, useState } from "react";

const App: React.FC = () => {
  const [password, setPassword] = useState("")
  const [length, setLength] = useState(7);
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);


  useEffect(() => {
    generatePassword();
  }, [length, numAllowed, charAllowed])
  
  const generatePassword = useCallback(()=> {
    console.log("calling")
    let pass = "";
    let str  = "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm";
    
    if(numAllowed) str += "1234567890";

    if(charAllowed) str+= "!@#$%&*";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random()*(length + 1) +  1)
      console.log("char", char)
      pass += str.charAt(char);
      
    }
    console.log("pass", pass)
    setPassword(pass);
    
  }, [length, numAllowed, charAllowed, password ])
  return (
    <div className="border text-center my-10 w-1/2 mx-auto p-4 bg-gray-200 rounded-lg">
      <h1 className="mb-4 font-bold uppercase">Password Generator</h1>
      <div>
        <div className="mb-2">
          <input className="rounded-md p-1 m-1" type="text" value={password} onChange={(e)=> setPassword(e.target.value)} id="pass" />
          <button className="text-white border px-1 py-0.5 bg-blue-500 rounded-md">copy</button>
        </div>
        <div className="flex justify-center">
          <div className="mx-2 flex justify-center items-center">
            <label htmlFor="length" className="mr-2">
              Length
            </label>
            <input type="range" name="range" id="length" value={length} onChange={(e)=> setLength(Number(e.target.value))} min={5} max={20}/>{"  "}{length}
          </div>

          <div className="mx-2 flex justify-center items-center">
            <label htmlFor="number" className="mr-2">Number</label>
            <input type="checkbox" name="number" id="number" checked={numAllowed} onChange={()=> setNumAllowed(prev => !prev)} />
          </div>

          <div className="mx-2 flex justify-center items-center">
            <label htmlFor="char" className="mr-2">Character</label>
            <input type="checkbox" name="char" id="char" checked={charAllowed} onChangeCapture={()=> setCharAllowed(prev => !prev)} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
