//for in loop

let obj = {
	name: "Mehedi",
	role: "Student",
	institution: "DU",
};

//this won't work in object
// for (const key of obj) {
//     console.log(key)
// }

for (const key in obj) {
	console.log(key);
}

for (const key in obj) {
	console.log(obj[key]);
}
