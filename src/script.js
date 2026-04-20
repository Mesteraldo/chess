const pieces = {
  blackPawn: "media/pawn_black.png",
  whitePawn: "media/pawn.png",
  blackBishop: "media/bishop_black.png",
  whiteBishop: "media/bishop.png",
  blackRook: "media/rook_black.png",
  whiteRook: "media/rook.png",
  blackKnight: "media/knight_black.png",
  whiteKnight: "media/knight.png",
  blackKing: "media/king_black.png",
  whiteKing: "media/king.png",
  blackQueen: "media/queen_black.png",
  whiteQueen: "media/queen.png",
};

const startpositions = [
  ["whitePawn", "a2"],
  ["whitePawn", "b2"],
  ["whitePawn", "c2"],
  ["whitePawn", "d2"],
  ["whitePawn", "e2"],
  ["whitePawn", "f2"],
  ["whitePawn", "g2"],
  ["whitePawn", "h2"],
  ["whiteRook", "a1"],
  ["whiteKnight", "b1"],
  ["whiteBishop", "c1"],
  ["whiteQueen", "d1"],
  ["whiteKing", "e1"],
  ["whiteBishop", "f1"],
  ["whiteKnight", "g1"],
  ["whiteRook", "h1"],

  ["blackPawn", "a7"],
  ["blackPawn", "b7"],
  ["blackPawn", "c7"],
  ["blackPawn", "d7"],
  ["blackPawn", "e7"],
  ["blackPawn", "f7"],
  ["blackPawn", "g7"],
  ["blackPawn", "h7"],
  ["blackRook", "a8"],
  ["blackKnight", "b8"],
  ["blackBishop", "c8"],
  ["blackQueen", "d8"],
  ["blackKing", "e8"],
  ["blackBishop", "f8"],
  ["blackKnight", "g8"],
  ["blackRook", "h8"],
];

const chessboard = document.getElementById("chessboard");

function createChessboard(numDivs) {
  for (let d = 0; d < numDivs; d++) {
    let cells = document.createElement("div");
    chessboard.appendChild(cells);
    cells.id = d + 1;

    let row = 8 - Math.floor(d / 8);

    if (row % 2 == 1) {
      if (d % 2 == 1) {
        cells.style.backgroundColor = "#f0d9b5";
      } else {
        cells.style.backgroundColor = "#b58863";
      }
    } else {
      if (d % 2 == 1) {
        cells.style.backgroundColor = "#b58863";
      } else {
        cells.style.backgroundColor = "#f0d9b5";
      }
    }
    switch (cells.id % 8) {
      case 1:
        cells.id = "a" + row;
        break;
      case 2:
        cells.id = "b" + row;
        break;
      case 3:
        cells.id = "c" + row;
        break;
      case 4:
        cells.id = "d" + row;
        break;
      case 5:
        cells.id = "e" + row;
        break;
      case 6:
        cells.id = "f" + row;
        break;
      case 7:
        cells.id = "g" + row;
        break;
      case 0:
        cells.id = "h" + row;
        break;
    }
    console.log(cells.id);
  }
}

function placePiece(pieceName, cell) {
  let img = document.createElement("img");
  img.src = pieces[pieceName];
  document.getElementById(cell).appendChild(img);
}

function init() {
  createChessboard(64);
  startpositions.forEach(([pieceName, cell]) => {
    placePiece(pieceName, cell);
  });
}

init();

//fixing git

//testing git
