import { Row, Col } from "antd";
import Piece from "./Piece";

const initialBoard = [
  ["bR", "bN", "bB", "bQ", "bK", "bB", "bN", "bR"],
  ["bP", "bP", "bP", "bP", "bP", "bP", "bP", "bP"],
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
  ["wP", "wP", "wP", "wP", "wP", "wP", "wP", "wP"],
  ["wR", "wN", "wB", "wQ", "wK", "wB", "wN", "wR"],
];

const Board = () => {
  return (
    <div className='board'>
      {initialBoard.map((row, i) => (
        <Row key={i} gutter={[0, 0]}>
          {row.map((piece, j) => (
            <Col
              key={j}
              className={"square " + ((i + j) % 2 === 0 ? "white" : "black")}
              span={3}
            >
              {piece && <Piece piece={piece} />}
            </Col>
          ))}
        </Row>
      ))}
    </div>
  );
};

export default Board;
