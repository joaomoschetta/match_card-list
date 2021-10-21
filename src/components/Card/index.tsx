import React from "react";

import { CardType } from "../../pages/Home";

import './style.css'

type Props = {
  card: CardType;
}

function Card({card}: Props) {
  return (
    <li className="Card-component">
      <strong>{card.title}</strong>
      <p>{card.text}</p>
    </li>
  );
};

export default Card;
