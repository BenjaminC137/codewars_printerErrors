//var s;
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var letterPosition;
//var letterNumber;

//m == 13

printerError("aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz");

function letterNumber(letter){
	letterPosition = alphabet.indexOf(letter) + 1;
	return letterPosition;
}

function printerError(s) {
	var e = 0;
	var myArray = s.split('');

	var myArrayLength = myArray.length;
	for (var i = 0; i < myArrayLength; i++){
		var currentLetter = myArray[i];
		var currentLetterNumber = letterNumber(currentLetter);
		if (currentLetterNumber > 13){
			e++;
		}
	}
	var answer = (e + '/' + myArrayLength).toString();
//	console.log(answer);
	return answer;
}
