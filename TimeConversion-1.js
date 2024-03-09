// input-> 12 Hr format. Output-> 24 Hr format

let time = '12:45:54PM'

timeConversion(time);

function timeConversion(s){
	var result=''
	var HH=s.slice(0,2);
	var slot=s.slice(-2);    // AM / PM
	// console.log(HH+' '+slot);
	var res=''
	if (slot=='AM'){
		if (parseInt(HH)==12){
			res='00';
			var result = replaceChar(s,res,2);
		}
		else if (parseInt(HH)<12){
			var result = s.substr(0,(s.length-2))
		}
	}else if(slot=='PM'){
		if (parseInt(HH)<12){
			res=parseInt(HH)+12
			var result = replaceChar(s,res,2);
		}else if (parseInt(HH)==12){
			var result = s.substr(0,(s.length-2))
		}
	}
	console.log(result);
	return result;
}

//replaceChar('01:01:22AM','00',2)
function replaceChar(str,repStr,i){
	let len=str.length
	let firstStr=str.substr(0,i)
	let lastStr=str.substr(i,len-4);
	//console.log(repStr+lastStr)
	return repStr+lastStr
}