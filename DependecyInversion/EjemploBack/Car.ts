import Motor from "./Motor";


class Car {
    private motor: Motor;

    constructor(motor: Motor) {
        this.motor = motor;
    }

    getSpeed() {
        this.motor.setPedalPressure(25)
        return 500
    }
}

export default Car;