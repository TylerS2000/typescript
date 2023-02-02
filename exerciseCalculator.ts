function calculateExercises(trainingDays:Array<number>, dailyTargetHours:number){
    const totalTrainingHours = trainingDays.reduce(
        (accumulator:number, currentValue:number)=>accumulator+currentValue,0
    );

    const totalTargetHours:number = trainingDays.length*dailyTargetHours

    const daysTrained:number = trainingDays.reduce((accumulator:number,currentValue:number)=>{if(currentValue){accumulator+=1} return accumulator},0)
    

    const success:boolean = totalTrainingHours>totalTargetHours

    const average:number =  totalTargetHours/trainingDays.length

    const rating = success?2:0

    const  ratingDescription = success?"good":"bad"

    interface Result {
        periodLength:number,
        trainingDays:number,
        success:boolean,
        rating:number,
        ratingDescription:string,
        target:number,
        average:number
    }
    const Result:Result={
        periodLength:trainingDays.length,
        trainingDays:daysTrained,
        success:success,
        rating:rating,
        ratingDescription,
        target:totalTargetHours,
        average:average
    }
    console.log(Result)
}
const a: Array<number> = JSON.parse(process.argv[2])
const b:number = Number(process.argv[3])


calculateExercises(a,b)