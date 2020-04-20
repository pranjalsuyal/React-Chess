import * as Chess from 'chess.js';
import pieceMap from '../PieceMapping';

export default class ChessManager{
  constructor(props){
  //  super(props);
    this.chess=new Chess();
  }
  reset(){
    this.chess.reset();
  }
  clear(){
    this.chess.clear();
  }
  move(from,to){
    this.chess.move({from:from , to:to ,promotion:'q'});
    if(this.chess.game_over()){
      console.log("Game Over");
      if(this.chess.in_checkmate()){
        console.log("Checkmated");
      }
      else if(this.chess.in_draw()){
        console.log("Game Drawn");
      }
      else if(this.chess.in_stalemate()){
        console.log("Game Drawn as oponent is in Stalemate");
      }
      else if(this.chess.in_threefold_repetition()){
        console.log("Game Drawn as current board position has occurred three or more times.");
      }
      else if(this.chess.insufficient_material()){
        console.log("Game Drawn due to insufficient material.");
      }
    }
    else if(this.chess.in_check()===true){
      console.log("In Check");
    }
  }

  map(){
    var str =this.chess.fen();                                           //maps fen string against our board
    const c=[];
    for(let i=0 , j=0 ;i<64 && j<64;i++ ){
      var char=pieceMap(str[i]);
      if(char === Number(char))
      {
        for(let k=1;k<=Number(char);k++){
          c[j]='';
          j++;
        }
      }
      else if(char === '/'){
        continue;
      }
      else{
      c[j] = char;
      j++;
      }
    }
    return(c);
  }
}
