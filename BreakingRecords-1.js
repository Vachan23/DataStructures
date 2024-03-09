// Given an array of integers, find how many times minimum number comes and maximum number comes.
// variables defined by var are available throughout the function in which they are declared, let are onoly available inside the block they are defined
			
			
let arr = [12,24,10,24]

console.log(breakingRecords(arr));
function breakingRecords(scores) {
	// Write your code here
	let max=scores[0];
	let min=scores[0];
	let countMax=0;
	let countMin=0
	for (let ele of scores){
		if (ele<min){
			min=ele;
			countMin++;
		}if (ele>max){
			max=ele;
			countMax++;
		}
	}
	return [countMax,countMin];
}