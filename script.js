/*challenge 1

var johnMass = 72;
var markMass= 74;
var johnHeight= 6;
var markHeight = 5;

//var bmi=mass/(height^2);
 var johnbmi= johnMass/(johnHeight^2);
 console.log(johnbmi);
 
 var markbmi= markMass/(markHeight^2);
 console.log(markbmi)

 var  higherbmi =markbmi > johnbmi;
 

 console.log( "is mark'\s bmi is hoigher than john"+ " "+ higherbmi);
 
 higherbmi <=1 ? console.log('yess'):console.log('pa');//teranary operators
 */

 //challenge2
//  var johnScore = [89, 120, 103];
// var mikescore=[116,94,123];
// var johnaverage= johnScore.reduce((sum, score) => sum + score, 0) / johnScore.length;
// var mikeaverage= mikescore.reduce((sum, score) => sum + score, 0) / mikescore.length;
// console.log(johnaverage,mikeaverage);

// if ( johnaverage>mikeaverage){
//     console.log('john is the winner');
// }else if ( johnaverage<mikeaverage) {
//     console.log("mike is the winner");
    
// }else{
//      console.log("draw");
// }

// var maryscore=[97,134,105];//johnaverage=[30=40=50]/3
// var maryaverage= maryscore.reduce((sum, score) => sum + score, 0) /maryscore.length;
// console.log(maryaverage);

// if (johnaverage>mikeaverage && johnaverage> mikeaverage)
// {console.log('john is winner');
// }
// else if (mikeaverage>johnaverage&&mikeaverage>maryaverage){
//     console.log("mike is winneer");
    
// }else if(maryaverage>johnaverage&&maryaverage>mikeaverage){
//     console.log('mary is winner');
    
// }else{
//     console.log("draw");
    
// }

// CHALLENGE 3


// function tipcalculator(bill) {
//     var percentage;
//     if (bill<50){
//         percentage=.2;
//     }else if(bill>=50&&bill<200){
//         percentage=.15;
//     }else{
//         percentage=.1 ;
//     }
//    return percentage * bill;
    
// }
// console.log( tipcalculator(500));

// var bills=[124,48,268];
// var tips  =[ tipcalculator(bills[0]),
//             tipcalculator(bills[0]),
//             tipcalculator(bills[0])
// ]
// var finalvalues=[bills[0]+tips[0],
// bills[1]+tips[1],
// bills[2]+tips[2],]
// console.log( tips,finalvalues);

//challenge 4

// var john={
//     fullname:'johmsmith',
//     mass:72,
//     height:6,
//     bmi:function () {
//         this.johnbmi=this.mass/(this.height^2)
//         return this.johnbmi;
//     }
// }
// var mark={
//     fullname:'marksmith',
//     mass:74,
//     height:5,
//      bmi:function () {
//         this.markbmi=this.mass/(this.height^2)
//         return this.markbmi;
//     }
// }
// john.bmi();
// mark.bmi();

// if (john.johnbmi>mark.markbmi) {
//     console.log(john.fullname+john.johnbmi+'nas higher bmi');   
// }else{
//     console.log(mark.fullname+mark.markbmi+'nas higher bmi');
// }
// console.log(john,mark);


//challenge 5
//  var billvaluesjohn ={
//     array:[124,48,268,180,42],
//     calculbill:function () {
//        this.tip=[];
//        this.finalvalue=[];

//         for ( var i=0;i<this.array.length; i++)
//            { var percentage;
//                 if (this.array[i]<50){
//                     percentage=.2;
//                 }else if(this.array[i]>=50&&this.array[i]<200){
//                     percentage=.15;
//                 }else{
//                     percentage=.1 ;
//                 }
//                this.tip[i]=percentage * this.array[i]; 
//                 this.finalvalue[i]=this.array[i]+this.tip[i]
//            }
            
//         }
//  }
//  var billvaluesmark ={
//     array:[77,375,110,45],
//     calculbill:function () {
//        this.tip=[];
//        this.finalvalue=[];

//         for ( var i=0;i<this.array.length; i++)
//            { var percentage;
//                 if (this.array[i]<100){
//                     percentage=.2;
//                 }else if(this.array[i]>=100&&this.array[i]<300){
//                     percentage=.1;
//                 }else{
//                     percentage=.25 ;
//                 }
//                this.tip[i]=percentage * this.array[i]; 
//                 this.finalvalue[i]=this.array[i]+this.tip[i]
//            }
            
//         }
//  }
// function average(tip){
//     var total=0;
//     for(i=0;i<tip.length;i++){
//         total=total+tip[i];
//     }
//    return total/tip.length
// }
//  billvaluesjohn.calculbill();
//  billvaluesmark.calculbill();

//  billvaluesjohn.average=average(billvaluesjohn.tip);
//  billvaluesmark.average=average(billvaluesmark.tip)
//  console.log(billvaluesjohn,billvaluesmark);
 
//  if (billvaluesjohn.average>billvaluesmark.average){
//     console.log('john family pay more' + billvaluesmark.average);
//  }else if(billvaluesmark.average>billvaluesjohn.average){
//     console.log('mark family pay more'+ billvaluesmark.average)
//  }else{  
//     console.log('draw');
    
//  }


// function constractor

// cannot add prototype in arrow function

// const person =(namee,yearofbirth,jobob)=>({
//     // function person(name,yearofbirth,job){
//     name:namee,
//    yearofbirth :yearofbirth,
//     job:jobob,
//     calculateage:()=>{
//         console.log(2016-yearofbirth)
// }
// })
// person.prototype.calculateage= function (){
//     const calculate=()=>{console.log(2016- yearofbirth)}
//     calculate()
// }
// const person1=  person("raj",1999,"rider")
// console.log(person1)
// person1.calculateage()


// function constractor with regular function

function Person(namee, yearOfBirth, joob) {
    this.name = namee;
    this.yearOfBirth = yearOfBirth;
    this.job = joob;
}

Person.prototype.calculateAge = function() {
     console.log(2023 - this.yearOfBirth); 
  };
  Person.prototype.lastname='ram';

const person1 = new Person("Raj", 1999, "Rider");
  
console.log(person1)
person1.calculateAge(); // Output: Age based on year 2023
console.log(person1.lastname)