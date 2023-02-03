export default  function calculateBmi(heightCentimeters:number,weightKilograms:number):string{
    const heightMetersSquared:number=Math.pow(heightCentimeters/100,2);
    const Bmi:number = (weightKilograms/heightMetersSquared);

    if(Bmi>18.5&&Bmi<25){
        return("healthy weight");
    }

    else{return("unhealthy weight");}
}

const height=Number(process.argv[2]);
const weight=Number(process.argv[3]);

calculateBmi(height,weight);