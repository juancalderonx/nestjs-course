import { Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { CarsService } from './cars.service';

@Controller('cars')
export class CarsController {

    constructor(
        // Dependency injection
        private readonly carsService: CarsService
    ){}

    @Get()
    getAllCars(): {} {
        return this.carsService.findAll();
    }

    @Get(':id')
    getCarById( @Param('id', ParseIntPipe) id: number ) {
        return this.carsService.findOneById(id)
    }

    @Post()
    createNewCar() {
        return {
            ok: true,
            method: "POST"
        }
    }

    @Patch()
    updateCar() {
        
    }

    @Delete()
    deleteCarById() {
        
    }


}
