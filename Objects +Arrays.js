//Objects (the displayInfo bits!)
function displayInfo(args) {
	var output = "";
	
	if (typeof args.name == "string"){
		output += "Name: " + args.name + "\n";
	}
	
	if (typeof args.age == "number") {
		output += "Age: " + args.age + "\n";
	}
	
	if (args.gender == "male" || "female") {
		output += "Gender: " + args.gender + "\n";
	}
	
	console.log(output);
}

displayInfo({
	name: "Nicholas",
	age: 29,
	gender: "male"
});

displayInfo({
	name: "Emily",
	age: 24,
	gender: "female"
});

var person = {
		name: "Sophie",
		last: "Turner",
		age: 23
};

console.log(person);
console.log(person.name);

//Arrays + manipulation of arrays
var colors = ["Red", "Black", "White"];
console.log(colors[1]);
colors[1] = "Orange";
console.log(colors[1]);
colors[3] = "Purple";
console.log(colors[3]);
colors[colors.length] = "brown";
console.log(colors[colors.length - 1]);
console.log(colors); //comma seperated
console.log(colors.join("||")); // | seperated

// check if is an Array - can also use instanceof) 
if (Array.isArray(person)) {
	console.log(true);
} else {
	console.log(false);
}

//prompt + answer
var question = "Who is your broadband provider";
var tv = alert(prompt(question, "Sky") + " " + "are your broadband provider");