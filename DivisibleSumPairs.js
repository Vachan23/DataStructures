// input arr, k and n. find divisble by k. sum of arr[i] and arr[j]. divide by k. when i<j

let arr = [1,3,2,6,1,2];
let k = 3

let n = arr.length;

console.log(divisibleSumPairs(n,k,arr))

function divisibleSumPairs(n,k,arr){
	let count=0;
	for (let i=0;i<n;i++){
		for (let j=0;j<n;j++){
			if (i<j){
				let div = (arr[i]+arr[j])%k;
				if (div==0){ count++; }
			}
		}
	}
	return count;
}