import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';
import user01 from './img/user01.png';
import { useState } from 'react';

const App = () => {
  const [cisloUp, setCisloUp] = useState(0);
  const [cisloDown, setCisloDown] = useState(0);
  return (
    <div className="container">
      <div className="joke">
        <div className="joke__body">
          <div className="joke__user">
            <img className="user-avatar" src={user01} />
            <p className="user-name">Neroxx</p>
          </div>

          <p className="joke__text">
            The secret service isn't allowed to yell "Get down!" anymore when
            the president is about to be attacked. Now they have to yell
            "Donald, duck!"
          </p>
        </div>
        <div className="joke__likes">
          <button
            id="btn-up"
            className="btn-like btn-like--up"
            onClick={() => {
              setCisloUp(cisloUp + 1);
            }}
          ></button>
          <span id="likes-up" className="likes-count likes-count--up">
            {cisloUp}
          </span>
          <button
            id="btn-down"
            className="btn-like btn-like--down"
            onClick={() => {
              setCisloDown(cisloDown + 1);
            }}
          ></button>
          <span id="likes-down" className="likes-count likes-count--down">
            {cisloDown}
          </span>
        </div>
      </div>
    </div>
  );
};

createRoot(document.querySelector('#app')).render(<App />);
