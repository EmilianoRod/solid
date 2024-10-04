class Bird {
    fly(){
        console.log("Volando...");
    }
}

class Penguin extends Bird{
    fly(){
        throw new Error("Los pinguinos no pueden volar")
    }

    swim(){
        console.log("Nadando...");
    }
}

class Parrot extends Bird{
    fly(){
        console.log("El loro esta volando");
    }

    eat(){
        console.log("El loro esta comiendo");
    }
}

const birdFly = (bird) => {
    bird.fly();
}

const penguin = new Penguin();
const littleParrot = new Parrot();
birdFly(penguin);
birdFly(littleParrot);