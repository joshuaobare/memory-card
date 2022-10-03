import React , {useState } from 'react';
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
import uniqid from "uniqid"

function App() {
   
  const characters = [{
      name:"Aang", image:Aang, id:uniqid()
  },{ name:"Appa", image:Appa, id:uniqid()
  },{ name:"Azula", image:Azula,id:uniqid()
  },{ name:"Cabbage Merchant", image:Cabbage, id:uniqid()
  },{ name:"Iroh",image:Iroh, id:uniqid()
  },{ name:"Katara",image:Katara, id:uniqid()
  },{ name:"Momo",image:Momo, id:uniqid()
  },{ name:"Sokka",image:Sokka, id:uniqid()
  },{ name:"Toph",image:Toph, id:uniqid()
  },{ name:"Zuko",image:Zuko, id:uniqid()
  }]
 
  const [click , setClick] = useState([])

  const shuffleArray = array => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }

    return array
  }

  const [chars , setChars] = useState(characters)
  const [score , setScore] = useState(0)
  const [bestScore, setBestScore] = useState(score)

  //useEffect(() => {},[click])

  function handleClick(id) {
    setChars(prevState => {
      return [...shuffleArray(prevState)]
    })
    
    
    setClick(prevState => [...prevState,id])     
      
  }

  function checker(id){    
    const check = click.some(item => {
      return item === id})
  
    if(!check) {
      setScore(prevState => prevState + 1)
    }else {
      setBestScore(prevScore => {
        if (prevScore > score) {
          return prevScore
        } else return score
      })
      setScore(0)
      setClick([])
    }
        
    }

  return (
    <div className="App">
      <Header 
        score = {score}
        bestScore = {bestScore}
      />
      <div className='card-section'>
      {
        chars.map(item => 
          <Card 
              key = {item.id}
              source={item.image}
              handleClick = {() => {
                handleClick(item.id)
                checker(item.id)}} 
              name={item.name}
          />)
      }
      </div>
      
    </div>
  );
}

export default App;
