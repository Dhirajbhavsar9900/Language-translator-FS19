import React, { useState } from "react";
import Language from "./../../Data/Lang";
import Output from "./Output";
import TranslateIcon from "@mui/icons-material/Translate";
import axios from "axios";

function Input() {
  const [langInput, setLangInput] = useState("en");
  const [text, setText] = useState("");
  const [translatedText, setTranslatedText] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleReset = () => {
    setLangInput("en");
    setText("");
    setTranslatedText("");
    setError(""); 
  };

  const handleTranslate = async () => {
    setLoading(true);
    setError(""); 
    try {
      const response = await axios.post(
        "https://text-translator2.p.rapidapi.com/translate",
        {
          source: langInput,
          target: "es", 
          text: text,
        },
        {
          headers: {
            "Content-Type": "application/json",
            "x-rapidapi-key": "bf277ce926msh9ffd08406955d68p1cfad4jsn8384d08f54c0",
            "x-rapidapi-host": "text-translator2.p.rapidapi.com",
          },
        }
      );
      console.log(response);
      setTranslatedText(response.data.translatedText);
    } catch (error) {
      setError("Error translating text. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // useEffect(() => {
   
  // }, []);

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
          />
        </div>
        <div className="m-5 flex justify-between">
          <button
            className={`bg-green-600 hover:bg-green-700 duration-150 px-5 py-3 rounded-xl shadow-xl text-white font-semibold ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
            onClick={handleTranslate}
            disabled={loading}
          >
            {loading ? "Translating..." : "Translate"}
          </button>
          <button
            className="bg-red-600 hover:bg-red-700 duration-150 px-5 py-3 rounded-xl shadow-xl text-white font-semibold"
            onClick={handleReset}
          >
            <span>Reset</span>
          </button>
        </div>
        <div className=" bg-white m-6">
        {error && <p className="text-black font-Kanit p-3 text-center">{error}</p>}
        </div>
      </div>
      <TranslateIcon style={{ width: 100, height: 60 }} />
      <Output translatedText={translatedText} />
    </>
  );
}

export default Input;