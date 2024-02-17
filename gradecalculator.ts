function CalculateGrad(a: number, b: number, c: number) {

    // calculate the avg of three subj divide result by 3
    var avg : number = (a+b+c) / 3;

    if (avg <= 70) {
        return `Grade C (${avg})`;
    } else if (avg > 70 && avg < 90) {
        return `Grade B (${avg})`;
    } else 
    {
        return `Grade A (${avg})`;
    }
}

var math: number = Number(prompt(`Enter the Math marks`)) ;
var physics: number = Number(prompt(`Enter the Physics marks`)) ;
var chemistry : number = Number(prompt(`Enter the Chemistry marks`)) ;


console.log(CalculateGrad(math, physics,chemistry));