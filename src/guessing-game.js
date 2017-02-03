class GuessingGame {
    constructor() {
    	this.minValue = null;
    	this.maxValue = null;

    }

    setRange(min, max) {
    	this.minValue = min;
    	this.maxValue = max;
    }

    guess() {
    	var guessValue = (this.minValue + this.maxValue)/2 + ((this.minValue + this.maxValue)%2)/2;
    	return guessValue;
    }

    lower() {
		this.maxValue = (this.minValue + this.maxValue)/2 + ((this.minValue + this.maxValue)%2)/2;

    }

    greater() {
		this.minValue = (this.minValue + this.maxValue)/2 + ((this.minValue + this.maxValue)%2)/2;

    }
}

module.exports = GuessingGame;
