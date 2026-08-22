//16 June 26
//Function Declartion
function greet(name){ //parameter
    console.log("Hi, Welcome",name);
}
greet("Abinaya"); //arguments
greet("Shalini");
greet("Aathi");
function detail(name,age,native){
    console.log("My name is",name);
    console.log("My age is",age);
    console.log("My native is",native);
}
detail("Shalini",5,"Tirupur")
detail("Rudra",2,"Coimbatore")

//(Tamil+English+Maths+Science+SS)/500*100
//Tamil+English+Maths+Science+SS/500*100
//19 June 26 task
function student(name,age,ta,eng,mat,sci,ss){
    let upname=name.toUpperCase();
    console.log("Name:",upname);
    console.log("Age:",age);
    tm=ta+eng+mat+sci+ss;
    console.log("Total Mark:",tm);
    per=tm/5;
    console.log("Percentage:",per,"%");
    if(per>=91 && per<=100){
        console.log("Remark:Excellent");
    } 
    else if(per>=71 && per<=90){
        console.log("Remark:Very Good");
    }
    else if(per>=51 && per<=70){
        console.log("Remark:Good");
    }
    else if(per>=35 && per<=50){
        console.log("Remark:Average");
    }
    else if(per>=34 && per<=0){
        console.log("Remark:Fail");
    }
    else{
        console.log("Check the input");
    }
}
student("Shalini",15,70,80,80,60,50);

let oper="**";
a=50;
b=80;
switch(oper){
    case "+":
        console.log("Arith");
        console.log(a+b);
        break;
    case "-":
        console.log("Subrat");
        console.log(a-b);
        break;
    case "*":
        console.log("Multiply");
        console.log(a*b);
        break;
    case "/":
        console.log("Divide");
        console.log(a/b);
        break;
    case "%":
        console.log("Percent");
        console.log(a%b);
        break;
    case "**":
        console.log("**");
        console.log(a**b);
        break;
    default:
        console.log("Check the Input");
        
}//19 june 26 Task 

//Function Expression
let electronic=function(name,cost){
    console.log("I am",name,"and my cost",cost);
}
//electronic("fan",5000)
//electronic("fridge",25000)

//Arrow Function
let movie=(name,ticket,petrol,parking,snack)=>{
    console.log("Movie name is",name,"and the expenses is",(ticket+petrol+parking+snack));
}
//movie("Karuppu",250,200,100,250)

//IIFE

(function(){
    console.log("Hello Hii");
})()
