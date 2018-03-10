
module.exports = function longestConsecutiveLength(array) {
    var len = array.length;  
    var maxCount = 0; tempCount = 1;  
      
    array.sort((a, b) => a - b);

    for(var i = 0; i < len; i++)
    {
        if((array[i + 1] - array[i]) == 1){
            tempCount++;
        } else {
            if((array[i + 1] - array[i]) == 0)
                continue;
            if(tempCount > maxCount){
                maxCount = tempCount;
            }
            tempCount = 1;
        }
    }
    return maxCount;
}
