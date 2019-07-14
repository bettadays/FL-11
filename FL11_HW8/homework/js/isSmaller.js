
const isBigger = (a, b) => {
	return a > b;
}

const isSmaller = (a, b) => {
	return !isBigger(a, b);
}

console.log(isSmaller(-5,-1));