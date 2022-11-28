import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuid } from 'uuid'

import { CreateCarDTO, UpdatedCarDTO} from './dto';
import { Car } from './interfaces/car.interface';

@Injectable()
export class CarsService {

    private cars: Car[] = [
        {
            id: uuid(),
            brand: 'Toyota',
            model: 2023 
        },
        {
            id: uuid(),
            brand: 'Honda',
            model: 2022 
        },
        {
            id: uuid(),
            brand: 'Jeep',
            model: 2021 
        },
    ];

    /** Trae todos los carros que hay en base de datos.
     * @returns JSON con todos los carros.
     */
    findAll(): {} {
        return {
            "status" : "success",
            "cars" : this.cars
        }
    }

    /** Devuelve un carro por ID.
     * @param id Id del carro a buscar.
     * @returns car - Devuelve el carro encontrado. En caso que no, una excepción personalizada.
     */
    findOneById( id : string ): {} {
        const car = this.cars.find(car => car.id === id);

        if(!car) throw new NotFoundException(`Error, no car found with id '${id}'`);

        return car;
    }

    /** Crea un nuevo carro en la bd.
     * @param createCarDto DTO del carro recibido desde el controlador.
     * @returns Carro creado.
     */
    create( createCarDto : CreateCarDTO ) {

        const newCar: Car = {
            id: uuid(),
            ...createCarDto
        } 

        this.cars.push(newCar);

        return newCar;
    }


}
