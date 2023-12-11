export class Kappale {
lippuTxt: string;
kpl: string;    

constructor(l: string) {
    this.lippuTxt = l;
    this.kpl = '0 kpl';
}

setAmount(value: number){
    console.log(value)
    if (value == 0){
        this.kpl = value + ' kpl';
    }
    else if (value == 1){
        this.kpl = value + ' kpl';
    }
    else if (value == 2){
        this.kpl = value + ' kpl';
    }
    else if (value == 3){
        this.kpl = value + ' kpl';
    }
    else if (value == 4){
        this.kpl = value + ' kpl';
    }
    else if (value == 5){
        this.kpl = value + ' kpl';
    }
    else if (value == 6){
        this.kpl = value + ' kpl';
    }
    else if (value == 7){
        this.kpl = value + ' kpl';
    }
    else if (value == 8){
        this.kpl = value + ' kpl';
    }
    else if (value == 9){
        this.kpl = value + ' kpl';
    }
    else if (value == 10){
        this.kpl = value + ' kpl';
    }
    
}

}


