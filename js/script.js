(function() {

	var btn = document.querySelector('#getNumbers');
	var output = document.querySelector('#showNumbers');

	function getRandom(min, max) {

		return Math.round(Math.random() * (max - min) + min);

	}

	function showRandomNumbers() {

		var numbers = [];
		var random;

		for (var i = 0; i < 6; i++) {
			random = getRandom(1, 49);

			while (numbers.indexOf(random) !== - 1) {
				random = getRandom(1, 49);
				console.log('Repeated the number' + random);
			}

			numbers.push(random);

		}

		output.value = numbers.join(', ');
	}

	btn.onclick = showRandomNumbers;

})();