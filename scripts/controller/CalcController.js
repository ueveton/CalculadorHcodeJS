class CalcContoller {

    constructor(){
        this._locale = 'pt-BR';
        this._displayCalcEl = document.querySelector('#display');
        this._dataEL = document.querySelector('#data');
        this._timeEl = document.querySelector('#hora');
        this._currentDate;
        this.initialize();
    }

    initialize (){

        this.setDisplayDateTime();

        setInterval(()=>{
            this.setDisplayDateTime();
        }, 1000);
    }

    setDisplayDateTime(){
        this.displayDate = this.currentDate.toLocaleDateString(this._locale);
            this.displayTime = this.currentDate.toLocaleTimeString(this._locale);
    }

    get displayTime(){
        return this._timeEl.innerHTML;
    }

    set displayTime(value){
        return this._timeEl.innerHTML = value;
    }
    
    get displayDate(){
        return this._dataEL.innerHTML;
    }

    set displayDate(value){
        return this._dataEL.innerHTML = value;
    }

    get displayCalc(){
        return this._displayCalcEl.innerHTML;
    }

    set displayCalc (value){
        this._displayCalcEl.innerHTML = value;
    }

    get currentDate(){
        return new Date();
    }

    set currentDate (value){
        this._currentDate = value;
    }
}