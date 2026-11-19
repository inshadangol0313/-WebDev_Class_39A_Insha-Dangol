// Qno3
//  Leap Year Checker
// • Task: Determine if a given year is a leap year.
// • Rule: A year is a leap year if it is divisible by 4 and not
// divisible by 100, or if it is divisible by 400

let year=2000
if(year%400==0){
    console.log("is a leap year");

}
else if (year%100==0){
    console.log("is not a leap year");
}
else if (year%4==0){
    console.log("is a leap year");
}
else{
console.log("is not a leap year")
}