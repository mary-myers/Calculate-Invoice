export default class Menu {

    constructor(num) {
        this.num = Number(num);
        this.sum = 0;
        this.text = [];
    }

    getDetails(){
        return this.num;
    }

    getSum(){
        return this.sum;
    }
    setText(text){
        this.text = text;
    }

    setNum(num){
        this.num = Number(num);
    }

    getNum(){
        return Number(this.num);
    }



    go(){
        console.log("Hey i'm a menu");
        this.num = Number(this.num) + 3;
        console.log("here is my value: ", this.num);
    }

    getText(){
        return this.text;
    }


    //text is an array of strings
    findSum(){

        let sum = 0;

        for(let i = 0; i < this.text.length; i++){
            const segment = this.text[i];

            if(i==1){
                console.log(segment);
            }

            segment.push(" ");

            //console.log(segment);

            let temp = "";
            let check = false;


            for (const ch of segment){

                if(check){
                    if(ch == " "){
                        sum += parseFloat(temp);

                        temp = "";
                        check = false;
                    }else{
                        temp += ch;
                    }
                }
                if(ch == "$"){
                    console.log("Character detected");
                    check = true;
                }
            }

        }

        this.sum = sum;
        console.log(sum);

    }

}