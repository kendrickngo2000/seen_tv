function Solver(boardArray) {
    console.log(boardArray);
    this.boardArray = boardArray;
    function checkRow(a, b) {
        for (let i = 0; i < (this.boardArray[a][0].length); i++) {
            for (let j = 0; j < (this.boardArray[a][b].length); j++) {
                if (this.boardArray[i][j] === 0) {
                    return (i, j)
                }
            }
        }
        return (null);
    }
};
export default Solver;