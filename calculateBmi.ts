function calculateBmi(heightCentimeters:number,weightKilograms:number){
    const heightMetersSquared:number=Math.pow(heightCentimeters/100,2)
    const Bmi:number = (weightKilograms/heightMetersSquared)

    if(Bmi>18.5&&Bmi<25){
        console.log("healthy weight")
    }

    else{console.log("unhealthy weight")}
}

const height:number=Number(process.argv[2])
const weight:number=Number(process.argv[3])

calculateBmi(height,weight)