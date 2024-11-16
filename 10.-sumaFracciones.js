var num1 = 2, den1 = 4;
var num2 = 3, den2 = 6;

console.log(num1+"/"+den1);
console.log(num2+"/"+den2);

if (num1!=0 && den2!=0) {
    console.log("Suma: "+((num1/den1)+(num2/den2)));
} else if (num1==0 && den2==0) {
    console.log("La suma no es valida");
}