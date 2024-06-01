//your JS code here. If required.

const output = document.getElementById("output");
const input = document.getElementById("ip");
const btn = document.getElementById("btn");

btn.addEventListener('click', createInitialPromise)  

const delayPromise = (value, delay) => new Promise((resolve, reject) => {
	setTimeout(() => resolve(value), delay)
})
function createInitialPromise(){
	const userTypedValue = input.value; 
	// const promise1 = new Promise((resolve, reject) => {
	// 	const userTypedValue = input.value;
	// 	console.log({userTypedValue})
	// 	setTimeout(() => {
	// 		output.textContent = `Result: ${userTypedValue}`
	// 		resolve(userTypedValue)
	// 	}, 2000);
	// });
	// promise1.then((value) => {
	// 	return new Promise((resolve, reject) => {
	// 		setTimeout(() => {
	// 			output.textContent = `Result: ${value * 2}`
	// 			resolve(value * 2);
	// 		}, 1000);
	// 	})
	// })
	delayPromise(userTypedValue, 2000)  // 4
		.then((result) => {
			output.textContent = `Result: ${result}.`; // Result: 4
			return delayPromise(result * 2, 1000);
		}).then((result) => {
			output.textContent = `Result: ${result}.`; // Result: 8
			return delayPromise(result - 3, 1000);
		}).then((result) => {
			output.textContent = `Result: ${result}.`; // Result: 5
			return delayPromise(result / 2, 1000);
		}).then((final) => {
			output.textContent = `Final Result: ${final}.`; // Result: 2.5
			
		})
}
