import React from "react";

import Card from "../../components/Card";

import './style.css';

export type CardType = {
  title: string;
  text: string;
}

const card: CardType = {
  title: 'Lorem ipsum',
  text: 'dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation'
}

const cardList: CardType[] = Array(5).fill(card);

function Home() {
  return (
    <main className="Home-page">
      <section className="card-list">
        <ul>
          {cardList.map((card, index) => 
            <Card key={index} card={card} />
          )}
        </ul>
      </section>
    </main>
  )
}

export default Home;
