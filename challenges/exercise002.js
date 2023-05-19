export function getFillings(sandwich) {
	if (sandwich === undefined) throw new Error('ingredients is required');
    const fillingArray = [];
	let fillingItem = '';

	for (let i= 0; i < (sandwich["fillings"].length); i++) {

			fillingItem = sandwich["fillings"][i];

			fillingArray.push(fillingItem);
		}
		
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
	let numberOfSheep = 0;
	for (let i= 0; i < arr.length; i++) {
		if (arr[i] === "sheep") {
			numberOfSheep=numberOfSheep+1;
		} 
	}
	return numberOfSheep;
}

export function hasMPostCode(person) {
	if (person === undefined) throw new Error('person is required');

	let mancCode = false;
	const postcode = person["address"]["postCode"];

	if  (postcode.slice(0,1) === "M" ) {
		if (/[0-9]/.test(postcode.slice(1,2))) {
			mancCode = true;
		}
	}
    return mancCode;
}
