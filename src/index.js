
// You should implement your task here.

module.exports = function towelSort (matrix) {
    mat1 = [];
    if (!arguments.length) { 
        return mat1;
    } else {
        for (i=0; i< matrix.length; i++){
    	    if (i%2 != 0) {
        	    for (j=matrix[i].length -1;j>=0; j--){
            	    mat1.push(matrix[i][j]);
    		    }
            } else {
        	    for (j=0;j< matrix[i].length; j++){
            	    mat1.push(matrix[i][j]);
    		    }
            }
        }
        return mat1;
    }
}

