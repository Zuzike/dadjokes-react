import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';
import './jokes';
import { Joke } from './Joke';
import { jokes } from './jokes';

const App = () => {
  console.log(jokes);
  return (
    <div className="container">
      {jokes.map((i) => (
        <Joke
          key={i.id}
          userAvatar={i.avatar}
          userName={i.name}
          text={i.text}
          likes={i.likes}
          dislikes={i.dislikes}
        />
      ))}
    </div>
  );
};

createRoot(document.querySelector('#app')).render(<App />);
