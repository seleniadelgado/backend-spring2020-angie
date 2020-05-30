class Vehicle {
    constructor(manufacturer, color, topSpeedMPH) {
        this.topSpeedMPH = topSpeedMPH;
        this.color = color;
        this.manufacturer = manufacturer;
    }
}

class Car extends Vehicle {
    constructor(manufacturer, model, color, fuelType, fuelCapacityGallons, mpg, topSpeedMPH, seats) {
        // super calls the parent's constructor when we build a car object.
        super(manufacturer, color, topSpeedMPH);
        this.seats = seats;
        this.fuelType = fuelType;
        this.maxTankGallons = fuelCapacityGallons;
        this.currentTankGallons = fuelCapacityGallons / 2;
        this.license = null;
        this.model = model;
        this.mpg = mpg;
    }

    setLicense(licenseNumber) {
        this.license = licenseNumber;
        console.log(`The license of the ${this.manufacturer} ${this.model} was updated to ${licenseNumber}`);
    }

    getCurrentFuel() {
        console.log(`${this.manufacturer} ${this.model} has a total of ${this.currentTankGallons} gallons of gas left.`);

        return this.currentTankGallons;
    }

    setCurrentFuel(fuelValue) {

        this.currentTankGallons = fuelValue;
    }

    refuel(gallons) {

        let availableSpace = this.maxTankGallons - this.currentTankGallons;

        if (gallons > availableSpace) {
            console.log("There is not enough room in the gas tank to fill it with that many gallons!");
        } else {
            this.currentTankGallons = this.currentTankGallons + gallons;
            console.log(`The gas tank now has ${this.currentTankGallons} gallons of gas.`);
        }

    }

    range() {
        console.log(`The ${this.manufacturer} ${this.model} can go a total of ${(this.maxTankGallons * this.mpg)} miles before refueling.`);
    }

    travel(distanceToTravelMiles) {
        let gallonsToBurn = distanceToTravelMiles / this.mpg;

        if (gallonsToBurn <= this.currentTankGallons) {
            console.log(`${this.manufacturer} ${this.model} has traveled ${distanceToTravelMiles} miles.`);

            this.currentTankGallons = this.currentTankGallons - gallonsToBurn;
        } else {
            console.log(`${this.manufacturer} ${this.model} cannot go that far! It doesn't have enough fuel.`);
        }

    }

}



// Fill out a "functional" airplane class and create 2 Airplane object with methods on them being used.
class Airplane extends Vehicle {
    constructor() {
        super();
        this.model = null;
        this.engineCount = null;
        this.seats = null;
        this.maxCapacityLB = null;
        this.fuelEconomy = null;
    }
}
