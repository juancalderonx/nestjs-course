import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class CarsService {

    private readonly cars = [
        {
            "id": 1,
            "name": "Toyota",
            "model": 2023
        },
        {
            "id": 2,
            "name": "BMW",
            "model": 2021
        },
        {
            "id": 3,
            "name": "Audi",
            "model": 2022
        },
        {
            "id": 4,
            "name": "Mercedes Benz",
            "model": 2023
        },
    ]

    findAll(): {} {
        return {
            "status" : "success",
            "cars" : this.cars
        }
    }

    findOneById( id : number ): {} {

        const car = this.cars.find(car => car.id === id);

        if(!car) throw new NotFoundException(`Error, no car found with id '${id}'`);

        return car;

    }


}
