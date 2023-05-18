export function getFillings(sandwich) {
	if (sandwich === undefined) throw new Error('ingredients is required');
    const fillingArray = [];
	let fillingItem = '';

	for (let i= 0; i < (sandwich["fillings"].length); i++) {

			fillingItem = sandwich["fillings"][i];

			fillingArray.push(fillingItem);
		}
		
		console.log(fillingArray);
		return fillingArray;
}

export function isFromManchester(person) {
	if (person === undefined) throw new Error('person is required');
    
	if (person["city"] === "Manchester") {
		return true;
	} else {
		return false;
	}
}

export function getBusNumbers(people) {
	if (people === undefined) throw new Error('people is required');
	const peoplePerBus = 40;
	let numberOfBuses = Math.ceil(( people / peoplePerBus ));
	return (numberOfBuses);
}

export function countSheep(arr) {
	if (arr === undefined) throw new Error('arr is required');
	// Your code here!
}

export function hasMPostCode(person) {
	if (person === undefined) throw new Error('person is required');
	// Your code here!
}
