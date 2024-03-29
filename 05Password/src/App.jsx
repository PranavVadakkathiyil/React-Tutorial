import React from "react";
import { useEffect } from "react";
import { useCallback } from "react";
import { useState } from "react";

function App() {
  const [length, setlength] = useState("8");
  const [number, setnumber] = useState(false);
  const [char, setchar] = useState(false);
  const [password, setpassword] = useState("");
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let string = "ABCDEFGHIJKLMNOPQRSTUVWXYXabcdefghijklmnopqrstvuwxyz";
    if (number) string += "1234567890";
    if (char) string += "!@#$%^&*()?~`:;/,.";
    for (let i = 0; i < length; i++) {
      let value = Math.floor(Math.random() * string.length + 1);
      pass += string.charAt(value);
    }
    setpassword(pass);
  }, [length, number, char, setpassword]);
  useEffect(() => {
    
  
    passwordGenerator();
  }, [char,number,length])
  

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
        <h1 className="text-white text-center my-3">Password generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
            value={password}
          />
          <button className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0">
            copy
          </button>
        </div>
        <div className="flex gap-3">
        <div className="flex items-center gap-x-1">
          <input
            type="range"
            min={6}
            max={100}
            value={length}
            className="cursor-pointer"
            onChange={(e) => {
              setlength(e.target.value);
            }}
          />
          <label>Length: {length}</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={number}
            id="number"
            onChange={() => {
              setnumber((prev) => !prev);
            }}
          />
          <label htmlFor="numberInput">Numbers</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={char}
            id="char"
            onChange={() => {
              setchar((prev) => !prev);
            }}
          />
          <label htmlFor="numberInput">Charater</label>
        </div>
        </div>
      </div>
    </>
  );
}

export default App;
