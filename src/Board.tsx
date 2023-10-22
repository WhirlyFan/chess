import { Row, Col } from "antd";

const Board = () => {
  const boardSize = 8;
  const board = [];

  for (let i = 0; i < boardSize; i++) {
    const row = [];
    for (let j = 0; j < boardSize; j++) {
      const squareColor = (i + j) % 2 === 0 ? "white" : "black";
      row.push(
        <Col className={`square ${squareColor}`} span={3} key={`${i}-${j}`}></Col>
      );
    }
    board.push(<Row key={i}>{row}</Row>);
  }

  return <div className='board'>{board}</div>;
};

export default Board;
