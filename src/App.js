import './App.css';
import { useState,useEffect } from 'react';
import { Square } from './Square';
import { Pattern } from './Pattern';

function App() {
  const [board,setboard] = useState(["","","","","","","","",""])
  const [player,setplayer] = useState("x")
  const  [result,setResult] = useState({state:"none", winner:"none"})
  useEffect(()=>{
    checkwin();
  },[board])
  
  useEffect(()=> {
    if(result.state != "none"){
      alert(`game finished winner is:${result.winner}`)

    }
   
  },[result])
  

  const chooseSquare = (square) => {
    setboard(board.map((val,idx)=>{
      return idx==square&&val==""?player:val; 
      
    }))
    player =="x"?setplayer("o"):setplayer("x")
  }
  const checkwin = () =>{
    Pattern.forEach((currentpattern) => {
      const firstPlayer = board[currentpattern[0]]
      if (firstPlayer == "") return;
      let winningPattern = true;
      currentpattern.forEach((idx) => {
        if (board[idx]!=firstPlayer) {
          winningPattern = false;
        }
      })
      if(winningPattern){
        setResult({state:"won",winner:player})
      }
    })
  }






  return (
    <div className="App">
      <div className="board">
        <div className="row">
          <Square val={board[0]} chooseSquare = {()=> {chooseSquare(0)}} />
          <Square val={board[1]} chooseSquare = {()=> {chooseSquare(1)}} />
          <Square val={board[2]} chooseSquare = {()=> {chooseSquare(2)}} />


        </div>
        <div className="row">
          <Square val={board[3]} chooseSquare = {()=> {chooseSquare(3)}} />
          <Square val={board[4]} chooseSquare = {()=> {chooseSquare(4)}} />
          <Square val={board[5]} chooseSquare = {()=> {chooseSquare(5)}} />

        </div>
        <div className="row">
          <Square val={board[6]} chooseSquare = {()=> {chooseSquare(6)}} />
          <Square val={board[7]} chooseSquare = {()=> {chooseSquare(7)}} />
          <Square val={board[8]} chooseSquare = {()=> {chooseSquare(8)}} />

        </div>

      </div>
      
    </div>
  );
}

export default App;
