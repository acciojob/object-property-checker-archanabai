const sampleObject = { red: "#FF0000", green: "#00FF00", white: "#FFFFFF" };

function hasKey(key) {
  //   write your code here
	let keyName = Object.keys(sampleObject);
	for(let i=0; i<keyName.length; i++){
		if(keyName[i] == key){
			return true;
		}
	}
	return false;
}

// Do not change the code below
const key = prompt("Enter Key.");
alert(hasKey(key));