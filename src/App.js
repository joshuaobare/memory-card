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
import uniquid from "uniqid"

function App() {
   
  const characters = [{
      name:"Aang", image:Aang, id:uniquid()
  },{ name:"Appa", image:Appa, id:uniquid()
  },{ name:"Azula", image:Azula,id:uniquid()
  },{ name:"Cabbage", image:Cabbage, id:uniquid()
  },{ name:"Iroh",image:Iroh, id:uniquid()
  },{ name:"Katara",image:Katara, id:uniquid()
  },{ name:"Momo",image:Momo, id:uniquid()
  },{ name:"Sokka",image:Sokka, id:uniquid()
  },{ name:"Toph",image:Toph, id:uniquid()
  },{ name:"Zuko",image:Zuko, id:uniquid()
  }]

  const shuffleArray = array => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }

    return array
  }

  const [chars , setChars] = useState(shuffleArray(characters))

  return (
    <div className="App">
      <Header />
      <div className='card-section'>
      {
        chars.map(item => 
        <Card 
            source={item.image} 
            name={item.name}/>)
      }
      </div>
      
    </div>
  );
}

export default App;
