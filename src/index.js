
// You should implement your task here.

module.exports = function towelSort (matrix) {
    if(matrix === undefined){
        return [];
    }
    for (i = 1; i < matrix.length; i += 2){
        matrix[i] = matrix[i].reverse();
    }
    let result = [];
    result = matrix.reduce((a, b) => a.concat(b), []);
    return result;
}
