import React, { useState } from "react";
import Language from "./../../Data/Lang";
import Output from "./Output";
import TranslateIcon from "@mui/icons-material/Translate";

function Input() {
  const [langInput, setLangInput] = useState("en");
  const [text, setText] = useState("");
  const [translatedText, setTranslatedText] = useState("");

  const handleReset = () => {
    setLangInput("en");
    setText("");
    setTranslatedText("");
  };

  const handleTranslate = () => {
    const newTranslatedText = `${text}`;
    setTranslatedText(newTranslatedText);
  };
  
  return (
    <>
      <div className="border-2 border-black bg-blue-700 rounded-lg">
        <div className="flex flex-col items-center justify-center">
          <span className="m-3 font-serif text-[30px] text-white">Input</span>
          <div>
            <select
              value={langInput}
              onChange={(e) => setLangInput(e.target.value)}
              className="p-1 font-Kanit rounded-lg"
              name="language"
              id="language-select"
              aria-label="Select language"
            >
              {Language.map((lang) => (
                <option key={lang.code} value={lang.code}>
                  {lang.name}
                </option>
              ))}
            </select>
          </div>
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Type text here"
            className="font-mono outline-none p-3 rounded-xl h-[260px] w-[600px] m-5"
            name="input-text"
            id="input-textarea"
            aria-label="Input text"
          ></textarea>
        </div>
        <div className="m-5 flex justify-between">
          <button
            className="bg-green-600 hover:bg-red-500 duration-150 px-5 py-3 rounded-xl shadow-xl text-white font-semibold"
            onClick={handleTranslate}
          >
            <span>Translate</span>
          </button>
          <button
            className="bg-red-600 hover:bg-green-500 duration-150 px-5 py-3 rounded-xl shadow-xl text-white font-semibold"
            onClick={handleReset}
          >
            <span>Reset</span>
          </button>
        </div>
      </div>
      <TranslateIcon style={{ width: 100, height: 60 }} />
      <Output translatedText={translatedText} />
    </>
  );
}

export default Input;
