import {WhiteRook}   from './Piece';
import {WhiteKnight} from './Piece';
import {WhiteBishop} from './Piece';
import {WhiteQueen}  from './Piece';
import {WhiteKing}   from './Piece';
import {WhitePawn}   from './Piece';
import {BlackRook}   from './Piece';
import {BlackKnight} from './Piece';
import {BlackBishop} from './Piece';
import {BlackQueen}  from './Piece';
import {BlackKing}   from './Piece';
import {BlackPawn}   from './Piece';

export default function pieceMap(char){
  switch(char)
  {
    case 'R':return(WhiteRook);
    case 'N':return(WhiteKnight);
    case 'B':return(WhiteBishop);
    case 'Q':return(WhiteQueen);
    case 'K':return(WhiteKing);
    case 'P':return(WhitePawn);
    case 'r':return(BlackRook);
    case 'n':return(BlackKnight);
    case 'b':return(BlackBishop);
    case 'q':return(BlackQueen);
    case 'k':return(BlackKing);
    case 'p':return(BlackPawn);
    case '1':return(1);
    case '2':return(2);
    case '3':return(3);
    case '4':return(4);
    case '5':return(5);
    case '6':return(6);
    case '7':return(7);
    case '8':return(8);
    case '/':return('/');
    default:return('def');
  }
}
