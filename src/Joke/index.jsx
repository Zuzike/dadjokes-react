import React from 'react';
import './style.css';
import user01 from './img/user01.png';
import { useState } from 'react';

export const Joke = ({ userAvatar, userName, text, likes, dislikes }) => {
  const [cisloUp, setCisloUp] = useState(likes);
  const [cisloDown, setCisloDown] = useState(dislikes);

  return (
    <div className="joke">
      <div className="joke__body">
        <div className="joke__user">
          <img className="user-avatar" src={userAvatar} />
          <p className="user-name">{userName}</p>
        </div>

        <p className="joke__text">{text}</p>
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
  );
};
