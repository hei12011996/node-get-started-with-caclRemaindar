// Write your cade below:
function caclRemaindar(a, b) {
	return a % b;
};

function caclSum(input_array) {
	var sum = 0;
	for(var i = 0; i < input_array.length; i++){
		sum += input_array[i];
	}
	return sum;
};

function caclSumInConditon(input_array, max) {
	var sum = 0;
	for(var i = 0; i < input_array.length; i++){
		if(input_array[i] < max){
			sum += input_array[i];
		}
	}
	return sum;
};

module.exports = {
    caclRemaindar,
    caclSum,
    caclSumInConditon
}