// “One should depend upon abstractions, [not] concretions.” Robert C. Martin //

interface IVehicle {
    isMoving:boolean;
    move(): void;
}

class Car implements IVehicle {
    isMoving: boolean = false;
    move() {
        this.isMoving = true;
    }
} 

class Trunck implements IVehicle {
    isMoving: boolean = false;
    move() {
        this.isMoving = true;
    }
} 


class Drive {
    private vehicle: IVehicle;

    constructor(vehicleParam: IVehicle) {
        this.vehicle = vehicleParam;
        this.vehicle.move();
    }
}