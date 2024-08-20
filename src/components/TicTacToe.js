import React, { useState } from 'react'
import '../App.css';
const TicTacToe = () => {
    const[board,setBoard]=useState(Array(9).fill(null));
    const[xTurn , setXturn]=useState(true);
    const[winner,setWinner]=useState(null);
    const rendersquare=(index)=>{
        return(
            <button className='square' onClick={()=>handleClick(index)}>{board[index]}</button>
         )
    }
    const handleClick=(index)=>{
        console.log(index,'click');
        const newBoard=[...board];
        newBoard[index]= xTurn ? 'X' : 'O';
        setBoard(newBoard);
        setXturn(!xTurn);
        const winnerCombination =checkwinner(newBoard);
        if(winnerCombination){
            setWinner(newBoard[winnerCombination[0 ]])
        }
    }
    const checkwinner=(newBoard)=>{
const combination=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
]
for(let i=0;i<combination.length;i++){
    const [a,b,c]=combination[i];
    if(board[a] && board[a] === board[b] && board[b] === board[c]){
        return combination[i];
    }
}
return null;
    }
  return (
   <>
   <div className='board'>
<div className='board-row'>
{rendersquare(0)}
{rendersquare(1)}
{rendersquare(2)}
</div>
<div className='board-row'>
{rendersquare(3)}
{rendersquare(4)}
{rendersquare(5)}
</div>
<div className='board-row'>
{rendersquare(6)}
{rendersquare(7)}
{rendersquare(8)}
</div>
<div>
    {winner && <div>{winner}is winner of this game</div>}
   </div>
   </div>
   </>
  )
}

export default TicTacToe