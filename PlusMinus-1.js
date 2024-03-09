// Given an array of positive,negative and zero. return count of pos,neg and zero divided by length of array

function plusMinus(arr) {
    // Write your code here
    var pos=0
    var neg=0
    var zero=0
    //let arr = [1,1,0,-1,-1]
    let len = arr.length
    for (let i=0;i<len;i++){
        if (arr[i]<0){
            neg=neg+1
        }else if (arr[i]>0){
            pos=pos+1
        }else if (arr[i]==0){
            zero=zero+1
        }
    }
    var resPos=pos/len;
    var resNeg=neg/len;
    var resZero=zero/len;
    console.log(resPos.toFixed(6));
    console.log(resNeg.toFixed(6));
    console.log(resZero.toFixed(6));
}