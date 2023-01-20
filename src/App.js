import React , {useEffect, useState } from 'react';
import Header from "./components/Header"
import Card from "./components/Card"
import EndGame from './components/EndGame';
import { characters } from './characters';
import Confetti from 'react-confetti';


function App() {
  
  const [click , setClick] = useState([]) 
  const [chars , setChars] = useState(characters)
  const [score , setScore] = useState(0)
  const [bestScore, setBestScore] = useState(score)
  const [gameEnd , setGameEnd] = useState(false)
  const [dialogOpen , setDialogOpen] = useState(false) 

  useEffect(() => {
    const bestScores = JSON.parse(localStorage.getItem("bestScore"))
    if (bestScores){
      setBestScore(bestScores)
    } 
    
  },[])
  
  useEffect(() => {
    if(score === 10){
      setGameEnd(true)
      setBestScore(10)
    }
  },[score])

  useEffect(() => {
    if(gameEnd){
      setDialogOpen(true)
    }
  },[gameEnd])

  useEffect(() => {
    localStorage.setItem("bestScore", JSON.stringify(bestScore))
  },[bestScore])

  const shuffleArray = array => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }

    return array
  }

  function dialogToggle(){
    setDialogOpen(false)
    setGameEnd(false)
    setScore(0)
  }
  
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
      {gameEnd && <Confetti /> }
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
      {gameEnd ? 
        <EndGame 
          dialogOpen = {dialogOpen}
          dialogToggle = {dialogToggle}
        />
      
      : ""}
    </div>
  );
}

export default App;
