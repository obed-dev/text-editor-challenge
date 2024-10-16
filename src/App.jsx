import React, { useState } from "react";
import {
  AiOutlineBold,
  AiOutlineItalic,
  AiOutlineUnderline,
  AiOutlineAlignCenter,
  AiOutlineAlignLeft,
  AiOutlineAlignRight,
  AiOutlineRollback,
} from "react-icons/ai";

const App = () => {
  const [text, setText] = useState("");
  const [bold, setBold] = useState(false);
  const [italian, setItalian] = useState(false);
  const [underline, setUnderline] = useState(false);
  const [font, setFont] = useState(16);
  const [align, setAlign] = useState("left");
  const [quotes, setQuotes] = useState(false);
  const [uppercase, setUpperCase] = useState(false);

  const Bold = () => setBold(!bold);
  const Italian = () => setItalian(!italian);
  const Underline = () => setUnderline(!underline);
  const increaseFontSize = () => setFont((prev) => prev + 1);
  const decreaseFontSize = () =>
    setFont((prev) => (prev > 10 ? prev - 1 : prev));
  const changeAlignLeft = () => setAlign("left");
  const changeAlignCenter = () => setAlign("center");
  const changeAlignRight = () => setAlign("right");

  const Quotes = () => setQuotes(!quotes);
  const reset = () => {
    setBold(false);
    setItalian(false);
    setUnderline(false);
    setFont(16);
    setAlign("left");
    setUpperCase(false);
    setQuotes(false);
    setText("");
  };

  const Analyse = (text) => {
    const numsOfWords = text.trim().split(/\s+/).length;
    const numsOfLetters = text.replace(/\s+/g, "").length;
    return {
      numsOfWords,
      numsOfLetters,
      font: `${font}px`,
    };
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold underline mb-4 text-center">
        Text Editor
      </h1>

      {/* Responsive button group */}
      <div className="flex flex-wrap justify-center space-x-2 space-y-2 mb-6">
        <button className="p-2 bg-gray-300 rounded" onClick={Bold}>
          <AiOutlineBold />
        </button>
        <button className="p-2 bg-gray-300 rounded" onClick={Italian}>
          <AiOutlineItalic />
        </button>
        <button className="p-2 bg-gray-300 rounded" onClick={Underline}>
          <AiOutlineUnderline />
        </button>
        <button className="p-2 bg-gray-300 rounded" onClick={increaseFontSize}>
          A+
        </button>
        <button className="p-2 bg-gray-300 rounded" onClick={decreaseFontSize}>
          A-
        </button>
        <button className="p-2 bg-gray-300 rounded" onClick={changeAlignLeft}>
          <AiOutlineAlignLeft />
        </button>
        <button className="p-2 bg-gray-300 rounded" onClick={changeAlignCenter}>
          <AiOutlineAlignCenter />
        </button>
        <button className="p-2 bg-gray-300 rounded" onClick={changeAlignRight}>
          <AiOutlineAlignRight />
        </button>
        <button className="p-2 bg-gray-300 rounded" onClick={Quotes}>
          "
        </button>
        <button
          className="p-2 bg-gray-300 rounded"
          onClick={() => setUpperCase(true)}
        >
          UC
        </button>
        <button
          className="p-2 bg-gray-300 rounded"
          onClick={() => setUpperCase(false)}
        >
          LC
        </button>
        <button className="p-2 bg-red-300 rounded" onClick={reset}>
          <AiOutlineRollback />
        </button>
      </div>

      {/* Responsive textarea */}
      <textarea
        className="w-full p-4 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 resize-none"
        rows="6"
        placeholder="Type something..."
        style={{
          fontWeight: bold ? "bold" : "normal",
          fontStyle: italian ? "italic" : "normal",
          textDecoration: underline ? "underline" : "none",
          fontSize: `${font}px`,
          textAlign: align,
          textTransform: uppercase ? "uppercase" : "none",
        }}
        onChange={(e) => setText(e.target.value)}
        value={text}
      ></textarea>

      <button
        className="p-2 w-full sm:w-auto bg-blue-500 text-white rounded mb-4"
        onClick={() => {
          const analysis = Analyse(text);
          console.log(analysis);
        }}
      >
        Analyze
      </button>

      <textarea
        className="w-full p-4 border rounded-lg bg-gray-200 resize-none"
        rows="6"
        placeholder="Analysis"
        disabled
        value={JSON.stringify(Analyse(text), null, 2)}
      ></textarea>
    </div>
  );
};

export default App;
