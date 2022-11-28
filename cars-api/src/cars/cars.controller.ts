import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Patch,
    Post,
    ParseUUIDPipe
} from '@nestjs/common';

import { CarsService } from './cars.service';
import { CreateCarDTO } from './dto/create-car.dto';
import { UpdatedCarDTO } from './dto/update-car.dto';

@Controller('/api/cars')
export class CarsController {

    // Constructors -------------------------

    constructor(
        // Dependency injection
        private readonly carsService: CarsService
    ){}

    // Endpoints -------------------------

    @Get()
    getAllCars(): {} {
        return this.carsService.findAll();
    }

    @Get(':id')
    getCarById( @Param( 'id', new ParseUUIDPipe({ version:'4' }) ) id: string ) {
        return this.carsService.findOneById(id)
    }

    @Post()
    createNewCar( @Body() createCarDto: CreateCarDTO ) {
        return this.carsService.create(createCarDto);
    }

    @Delete(':id')
    deleteCarById( @Param( 'id', ParseUUIDPipe ) id: number ) {
        return id;
    }

}
