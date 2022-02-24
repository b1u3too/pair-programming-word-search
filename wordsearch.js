// Feb 23, 2022 - LHL Pair Programming Exercise with Marina Bekker and Andrea Madsen

const wordSearch = (letters, word) => { 
    //join each row of letters into a string, and put those into a new array
    // Check the horizontal array first, if it's true, end function, if false transpose the vertical rows into horizontal and re-use horizontal function to check again

    //check horizontal
    if(horizontalCheck(letters, word)) {
        return true;
    }
    //check vertical
    if(horizontalCheck((transposeMatrix(letters)), word)) {
        return true;
    }
    // check backwards horizontal
    if(horizontalCheck(reverseMatrix(letters), word)) {
        return true;
    }
    //check backwards vertical
    if(horizontalCheck(reverseMatrix((transposeMatrix(letters))), word)) {
        return true;
    }
    
    // const diamondMatrix = getMatrixDiagonals(matrix);
    // if (wordSearch(diamondMatrix)) {
    //     return true;
    // }

    return false; 
};

//work in progress at diagonals stretch
// const getMatrixDiagonals = function(matrix) {
//     const totalOfColumns = matrix[0].length;
//     const totalOfRows = matrix.length;
//     const result = [];
  
//     for (let t = 0; t < totalOfRows + totalOfColumns - 1; t++) {
//         result[t] = [];
//         for (let i = 0; i < t + 1; i++) {
//           if (i < totalOfColumns);
//           // this will crash on diagonal 8
//             result[t].push(matrix[t - i][i]);
//         }
//         console.log(result);
//     }
  
//     return result;
//   }

// reverseMatrix will take in the matric, and for each row will reverse it. 
const reverseMatrix = function (matrix) {
    let resultMatrix = [];

    for (const row of matrix) {
        resultMatrix.push(row.reverse());
    }

    return resultMatrix;
}

const horizontalCheck = function (letters, word) {
    const horizontalJoin = letters.map(ls => ls.join(''));
    for (const r of horizontalJoin) {
        if (r.includes(word)) {
            return true;
        } 
    }

return false;
};

const transposeMatrix = function (matrix) {
    let resultMatrix = [];
    for (let r = 0; r < matrix.length; r++) {
        for (let c = 0; c < matrix[r].length; c++) {
            // check if resultMatrix exists, if not, create it. Otherwise proceed and push the number into it.
            if (!resultMatrix[c]) {
            resultMatrix.push([]);
            }
            resultMatrix[c].push(matrix[r][c]);
        }
    }
    return resultMatrix;
};

module.exports = wordSearch;

