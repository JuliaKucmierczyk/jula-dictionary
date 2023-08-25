import React from "react";
import { BsPlayFill } from "react-icons/bs";

const WordMeaning = (data) => {
  if (data.word === undefined) return null;

  function playAudio() {
    const audio = new Audio(data.word.phonetics[0].audio);
    audio.play();
  }

  return (
    <>
      <div className="card mt-5" data-bs-theme="blue">
        <div className="card-body m-2 border-bottom">
          <div className="wrap border-bottom mb-4">
            <div className="navbar">
              <h1 className="card-title mb-0">{data.word.word}</h1>
              <button className="play-btn" onClick={() => playAudio()}>
                <BsPlayFill className="text-primary " size={30} />
              </button>
            </div>

            <h6 className="card-subtitle pb-3 text-primary">
              {data.word.phonetics[0].text}
            </h6>
          </div>

          <div className="navbar">
            <h5 className="card-title">{data.word.meanings[0].partOfSpeech}</h5>
            <span className="text-primary">Meaning</span>
          </div>

          <ul>
            <li className="card-text">
              {data.word.meanings[0].definitions[0].definition}
            </li>

            {data.word.meanings[0].definitions[1] && (
              <li className="card-text">
                {data.word.meanings[0].definitions[1].definition}
              </li>
            )}

            {data.word.meanings[0].definitions[2] && (
              <li className="card-text">
                {data.word.meanings[0].definitions[2].definition}
              </li>
            )}
          </ul>
        </div>

        <div className="card-body m-2 border-bottom">
          <div className="navbar">
            <h5 className="card-title">{data.word.meanings[1].partOfSpeech}</h5>
            <span className="text-primary">Meaning</span>
          </div>

          <ul>
            {data.word.meanings[1].definitions[0] && (
              <li className="card-text">
                {data.word.meanings[1].definitions[0].definition}
              </li>
            )}

            {data.word.meanings[1].definitions[1] && (
              <li className="card-text">
                {data.word.meanings[1].definitions[1].definition}
              </li>
            )}

            {data.word.meanings[1].definitions[2] && (
              <li className="card-text">
                {data.word.meanings[1].definitions[2].definition}
              </li>
            )}
          </ul>
        </div>
        <h5 className="card-body m-2 ">
          synonyms
          {data.word.meanings[0].synonyms[0] && (
            <b className="text-primary"> {data.word.meanings[0].synonyms[0]}</b>
          )}
          {data.word.meanings[0].synonyms[1] && (
            <b className="text-primary"> {data.word.meanings[0].synonyms[1]}</b>
          )}
        </h5>
      </div>
    </>
  );
};

export default WordMeaning;
