import { FC } from "react";
import { useDrag } from "react-dnd";
import bP from "./assets/pieces/bP.svg";
import bR from "./assets/pieces/bR.svg";
import bN from "./assets/pieces/bN.svg";
import bB from "./assets/pieces/bB.svg";
import bQ from "./assets/pieces/bQ.svg";
import bK from "./assets/pieces/bK.svg";
import wP from "./assets/pieces/wP.svg";
import wR from "./assets/pieces/wR.svg";
import wN from "./assets/pieces/wN.svg";
import wB from "./assets/pieces/wB.svg";
import wQ from "./assets/pieces/wQ.svg";
import wK from "./assets/pieces/wK.svg";

type PieceImages = {
  [key: string]: JSX.Element | null;
  bP: JSX.Element;
  bR: JSX.Element;
  bN: JSX.Element;
  bB: JSX.Element;
  bQ: JSX.Element;
  bK: JSX.Element;
  wP: JSX.Element;
  wR: JSX.Element;
  wN: JSX.Element;
  wB: JSX.Element;
  wQ: JSX.Element;
  wK: JSX.Element;
};

type PieceProps = {
  piece: keyof PieceImages;
};

const Piece: FC<PieceProps> = ({ piece }) => {
  const [{ isDragging }, drag] = useDrag({
    type: "piece",
    item: { piece },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });
  const pieces: PieceImages = {
    bP: <img src={bP} alt='black pawn' />,
    bR: <img src={bR} alt='black rook' />,
    bN: <img src={bN} alt='black knight' />,
    bB: <img src={bB} alt='black bishop' />,
    bQ: <img src={bQ} alt='black queen' />,
    bK: <img src={bK} alt='black king' />,
    wP: <img src={wP} alt='white pawn' />,
    wR: <img src={wR} alt='white rook' />,
    wN: <img src={wN} alt='white knight' />,
    wB: <img src={wB} alt='white bishop' />,
    wQ: <img src={wQ} alt='white queen' />,
    wK: <img src={wK} alt='white king' />,
  };

  return (
    <div ref={drag} className='piece' style={{ opacity: isDragging ? 0.5 : 1 }}>
      {pieces[piece]}
    </div>
  );
};

export default Piece;
