// Ejercicio con la clase carro vamos a heredar dos tipos de carros distintos

class FullCar {
    constructor(brand, color, model, id, airConditioned, sunroof ){
        this.brand = brand;
        this.color = color;
        this.model = model;
        this.id = id;
        this.airConditioned = airConditioned;
        this.sunroof = sunroof;
    }

    run(){
        return`El vehículo ${this.brand} está arrancando, ¿Este carro tiene aire acondicionado? ${this.airConditioned}`
    }
};

const car1 = new FullCar ("Kia", "Gray", "EV9", 1243345, true, true);

console.log(car1.run());

class BasicCar extends FullCar {
    constructor(brand, color, model, id, electric){
        super(brand, color, model, id, '', '')
        this.electric = electric;

    };

    run(){
        return`${super.run()}`
    }
};

const car2 = new BasicCar ("Ford","Pink","Raptor", 10009098765, true);

console.log(car2.run());

class MiddleCar extends FullCar {
    constructor(brand, color, model, id, airConditioned){
        super(brand, color, model, id, airConditioned, '')

    };

    runMiddleCar(){
        return`${super.run()}`
    }
};

const car5 = new MiddleCar("Hyundai", "White","I10", 134413, false)
console.log(car5.runMiddleCar());

