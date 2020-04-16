class CalcController {

    constructor() {

        this.displayCalc = "0";
        this.currentDate;
        this.initialize();

    }

    initialize() {

    }

    get displayCalc() {
        return this._displayCalc;
    }

    set displayCalc(value) {
        this._displayCalc = value;
    }

    get currentDate() {
        return this._currentDate;
    }

    set currentDate(value) {
        this._currentDate = value;
    }


}