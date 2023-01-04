class CalcContoller {

    constructor(){
        this._displayCalc = '0';
        this._currentDate;
        this.initialize();
    }

    initialize (){
        let displayCalcEl = document.querySelector('#display');
        let dataEL = document.querySelector('#data');
        let timeEl = document.querySelector('#hora');

        displayCalcEl.innerHTML = '123';
        dataEL.innerHTML = '04/01/2022';
        timeEl.innerHTML = '12:01';

    }

    get displayCalc(){
        return this._displayCalc;
    }

    set displayCalc (valor){
        this._displayCalc = valor;
    }

    get currentDate(){
        return this._currentDate;
    }

    set currentDate (valor){
        this._currentDate = valor;
    }
}