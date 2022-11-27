import { Controller, Get, Param } from '@nestjs/common';

@Controller('cars')
export class CarsController {

    private cars = {
        1 : "Toyota",
        2 : "Audi",
        3 : "BMW"
    }

    @Get()
    getAllCars(): {} {
        return this.cars;
    }

    @Get(':id')
    getCarById( @Param('id') id: number ) {
        console.log('El id ingresado es: ' + id);
        return this.cars[id];
    }

}
