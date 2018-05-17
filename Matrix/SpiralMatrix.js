var arr = [[1,2,3,4,5,6],[7,8,9,10,11,12],[13,14,15,16,17,18]];
var rows = 3;
var columns = 6;


for(var i=0;i<columns;i++) {
console.log(arr[0][i]);         // 1st row elements
}

for(var i=1;i<rows;i++) {
 console.log(arr[i][columns-1])
}

for(var i=columns - 2;i >= 0;i--) {
   console.log(arr[rows-1][i])
}

for(var i=rows-2;i>0;i--){
    console.log(arr[i][0])
}