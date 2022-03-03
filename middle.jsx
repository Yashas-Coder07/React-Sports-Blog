import React from "react";
import Card from "./cards";
import games from "./games"

function App() {
  return (
    <div>
    <div className="cards">
     
      <Card 
        name={games[0].name}
        img={games[0].imgURL}
       important={games[0].important}
        BiggestEvent={games[0].BiggestEvent}
      />
      <Card 
        name={games[1].name }
        img={games[1].imgURL}
        important={games[1].important}
        BiggestEvent={games[1].BiggestEvent}
      />
      <Card 
        name={games[2].name}
        img={games[2].imgURL}
        important={games[2].important}
        BiggestEvent={games[2].BiggestEvent}
      />
       <Card 
        name={games[3].name}
        img={games[3].imgURL}
        important={games[3].important}
        BiggestEvent={games[3].BiggestEvent}
      />
    </div>

    </div>
  );
}

export default App;
