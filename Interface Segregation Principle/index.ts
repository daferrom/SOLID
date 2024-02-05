interface ICar {
    wheelSize():number;
}

interface ITruck {
    wheelSize():number;
    trailer():number;
}

class Car implements ICar {
     wheelSize():number {
        return 19; //inch
     }
} 

class Truck implements ITruck {
    wheelSize():number {
        return 24; //inch
    }

    trailer():number {
        return 4.408; //lbs
    }
}