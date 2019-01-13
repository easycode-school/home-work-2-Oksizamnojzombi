// Abstract Class Car
abstract class Car {
    protected mileage: number = 0; //общий пробег машины
    protected fuel: number = 0; //количество бензина в машине

    //drive - метод который считае пробег машины и остаток бензина
    public abstract drive(kilomiters: number): void;

    //refuel - метод который считает колличество бензина в машине при заправке
    public abstract refuel(liters: number): void;
}

// Class for car
class newCar extends Car {

    public drive(kilomiters: number): void {
        this.mileage = this.mileage + kilomiters;
        this.fuel = this.fuel - kilomiters;

        if (this.fuel <= 0) return console.error('Please refuel your car');
    }

    public refuel(liters: number): void {
        this.fuel = this.fuel + liters;
    }

    // get
    public get fuelEmount(): number {
        return this.fuel;
    }

    public get summaryMileage(): number {
        return this.mileage;
    }
}
