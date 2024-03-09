// Given an array, find biggest and smallest number of the sum of arrays

let arr = [5,5,5,5,5]
minmax(arr)
function minmax(arr){
	let tempArr=[]
	for (let i=0;i<arr.length;i++){
		let sum=0
		for (let j=0;j<arr.length;j++){
			if (i==j){continue;}
			sum=sum+arr[j]
		}
		tempArr.push(sum)
	}
	
	console.log(findRes(tempArr));
}
function findRes(arr){
	// This func returns smallest and largest values in an array
	let max=arr[0]
	let min=arr[0]
	for (let i=0;i<arr.length;i++){
		if (arr[i]>max){
			max = arr[i]
		}if (arr[i]<min){
			min = arr[i]
		}
	}
	return min+' '+max
}