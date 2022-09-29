import React , {useState} from 'react';
import Header from "./components/Header"
import Card from "./components/Card"
import Aang from "./images/Aang.jpg"
import Appa from "./images/Appa.jpg"
import Azula from "./images/Azula.jpg"
import Cabbage from "./images/Cabbagemerchant.jpg"
import Iroh from "./images/Iroh.jpg"
import Katara from "./images/Katara.jpg"
import Momo from "./images/Momo.jpg"
import Sokka from "./images/Sokka.jpg"
import Toph from "./images/Toph.jpg"
import Zuko from "./images/Zuko.jpg"

function App() {
  const characters = [{
    name:"Aang", image:Aang
},{ name:"Appa",image:Appa,
},{ name:"Azula",image:Azula,
},{ name:"Cabbage",image:Cabbage,
},{ name:"Iroh",image:Iroh,
},{ name:"Katara",image:Katara,
},{ name:"Momo",image:Momo,
},{ name:"Sokka",image:Sokka,
},{ name:"Toph",image:Toph,
},{ name:"Zuko",image:Zuko,
}]


  return (
    <div className="App">
      <Header />
      {
        characters.map(item => 
        <Card 
            source={item.image} 
            name={item.name}/>)
      }
    </div>
  );
}

export default App;
