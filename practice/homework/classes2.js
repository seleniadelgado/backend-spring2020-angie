class Vehicle {
    constructor(manufacturer, color, topSpeedMPH) {
        this.topSpeedMPH = topSpeedMPH;
        this.color = color;
        this.manufacturer = manufacturer;
    }
}
let newCar = new Vehicle("ford", "yellow", 120);
console.log(newCar);

//Inheritance
class Car extends Vehicle {
    constructor(manufacturer, model, color, fuelType, fuelCapacity, mpg, topSpeedMPH, seats) 
    {
        super(manufacturer, color, topSpeedMPH);
        this.seats = seats;
        this.fuelType = fueltype;
        this.maxTankGallons - fuelCapacityGallons;
        this.currentTankGallons = 0;
        this.license = null;
        this.model = model;
        this.mpg = mpg;
        this.desiredFuel = 0;
    }
    setLicense(licenseNumber) {
        this.license = licenseNumber;
        console.log(`The license of the $(this.manufacturer} ${this.model} was updated to ${licenseNumber}`);
    }
    getCurrentFuel() {
        console.log(`${this.manufacturer} ${this.model} has a total of ${this.currentTankGallons} gallons of gas left`);
    }
    setCurrentFuel(fuelValue){
        this.currentTankGallons = fuelValue;
    }
    wantedFuel(fuel) {
        this.desiredFuel = fuel;
    }
    range() {
        console.log(`The ${this.manufacturer} ${this.model} can got a total of ${(this.maxTankGallons * this.mpg)} miles before refueling.`);
    }
    refuel(gallons) {
        let availableSpace = this.maxTankGallons - this.currentTankGallons;
        if (gallons > availableSpace) {
            console.log("There is not enough room in the gast tank to fill it with that many gallons!");
        } else {
            this.currentTankGallons = this.currentTankGallons + gallons;
            //this.currentTankGallons =+ gallons;
            console.log(`the gas tank now has `)
        }

        this.currentTankGallons + gallons;

    }
    travel(distanceToTravelMiles) {
        let gallonsToBurn = distanceToTravelMiles / this.mpg;

        if (gallonsToBurn >= this.currentTankGallons) {
            console.log(`${this.manufacturer} ${this.model} has traveled ${distanceToTravelMiles}`);

            this.currentTankGallons = this.currentTankGallons - gallonsToBurn;
        } else {
            console.log(`${this.manufacturer} ${this.model} cannot go that far!
            It doesn't have enough fuel.`)
        }
    }
    refuelUsing(car, desiredFuel) {
        if (car.getCurrentFuel() > 2) {
            if (this.getCurrentFuel()> 0) {
                console.log(`${this.manufacturer} ${this.model} already has fuel.`)
            } else {
                this.setCurrentFuel(1);
                car.setCurrentFuel(car.getCurrentFuel() - 1);
                console.log(`${this.manufacturer} ${this.model} has rcvd 1 gallon of fuel from ${car.manufacturer} $car.model`)
            }
        }
    }

}
class ElectricCar extends Vehicle {
    constructor() {
        super();
        this.seats = null;
        this.capacityKWH = null;
        this.vin = null;
        this.brand = null;
        this.MPKW = null;
        this.batteries = null;
        this.currentBattery = 0;
        this.interiorTemp = 0;
    }
    recharge(battery) {
        let availableBattery = this.battery - this.currentBattery;
        if (curentBattery > availableBattery) {
            console.log("Need to recharge");
        } else {
            this.currentBattery = this.currentBattery + this.currentBattery;
            console.log(`battery is good now`)
        }

        this.currentBattery + battery;
    }
    acControl(interiorTemp){
        let setTemp = 80
        if (this.interiorTemp >= setTemp) {
            console.log("Turn AC on for optimal driving temperature")
        } else {
            console.log("Interior temperature is at preferred driving temperature")
        }
    }
}
class Airplane extends Vehicle {
    constructor() {
        super()
        this.model = null;
        this.engineCount = null;
        this.seats = null;
        this.maxCapacityLB = null;
        this.fuelEconomy = null;
        this.elevation = 0; 
        this.currentPSI = 0;
    }
    autopilot(elevation) {
        peakElevation = 50,000;
        if (this.elevation >= peakElevation) {
            console.log("Elevation above 50,000 feet reached, initialize autopilot")
        } else {
            console.log("Elevation not yet at 50,000 feet, keep going");
        }
    }
    pressureLeak(currentPsi) {
        let lowestPsi = 11;
        let highestPsi = 12;
        if (this.currentPsi < lowestPsi || this.currentPsi > highestPsi) {
            console.log(`Plane's curent PSI is at ${this.currentPSI}. Please balance plane's pressurization`)
        } else {
            console.log(`Plane's curent PSI is at ${this.currentPSI}. Pressurization is ideal`)
        }
    }
}
let firstCar = new Car("Honda", "Accord", "black", "gasoline", 14.8, 25, 155, 5);
firstCar.setLicense("8HX859");
console.log(firstCar)
firstCar.range();