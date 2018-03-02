function countdown(callback) {
	window.setTimeout(callback, 2000);
}


function multiplierValue(value) {
	return (x) => x * value
}

function createMultiplier(value) {
	return multiplierValue(value)
}

function doubler(value) {
	return multiplierValue(2)(value)
}

function tripler(value) {
	return multiplierValue(3)(value)
}

function multiplier(a, b) {
	return multiplierValue(a)(b)
}

function doublerWithBind(b) {
	return multiplier.bind(this, 2, b)()
}


function triplerWithBind(b) {
	return multiplier.bind(this, 3, b)()
}