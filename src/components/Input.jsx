import React, { useState } from "react";
import axios from "axios";
import WordMeaning from "./WordMeaning";

const Input = () => {
  const [data, setData] = useState("");
  const [input, setSearchWord] = useState("");

  if (input === "") {
    setSearchWord("keyboard");
  }

  function getWord() {
    axios
      .get(`https://api.dictionaryapi.dev/api/v2/entries/en_US/${input}`)
      .then((response) => {
        setData(response.data[0]);
      });
  }

  return (
    <>
      <div className="container">
        <div class="input-group-lg input-group ">
          <input
            type="text"
            class="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-default"
            placeholder="Search new word"
            onChange={(word) => {
              setSearchWord(word.target.value);
            }}
          />
          <button
            class="btn btn-outline-primary"
            type="button"
            id="button-addon2"
            onClick={() => getWord()}
          >
            Button
          </button>
        </div>

        {data && <WordMeaning word={data} />}
      </div>
    </>
  );
};

export default Input;
