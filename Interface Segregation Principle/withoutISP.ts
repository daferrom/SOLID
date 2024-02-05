interface IVehicle {
    wheelSize():number;
    trailer():number;
}

class Car implements IVehicle {
     wheelSize():number {
        return 19;
     }
} 

class Truck implements IVehicle {
     wheelSize():number {
        return 24;
     }
}