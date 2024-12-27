class Trainee{
    //data member

    constructor(_firstName: any){
        console.log(_firstName + 'Trainee Constructor')

    }
    getId(){
        return 1000;
    }
}

//Inheritance
class PermanentTrainee extends Trainee{
    constructor(_firstName: any) {
        super(_firstName);
        console.log(_firstName + "Permanent")
    }
    getId(): number {
        return super.getId();
    }
}

class TemporaryTrainees extends Trainee{

}

//Entry Point
let permanentTrainee = new PermanentTrainee('Sanjay');
console.log(permanentTrainee)
console.log(permanentTrainee.getId())
