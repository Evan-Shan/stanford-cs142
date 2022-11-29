function greet1(){
    console.log("hello word~")
}

const greet2 = () => console.log("hello world!");

greet1();
greet2();

var value = 10;
function change(){
    value = 20;
    console.log(value);
}
change();
console.log(value);

const human = {
    age: 10,
    who(){
        console.log(this);
    }
}
human.who();

function general(){
    console.log(this);
}
general();
