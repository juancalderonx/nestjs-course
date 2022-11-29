import { v4 as uuid } from 'uuid';
import { Car } from './../../cars/interfaces/car.interface';

export const CARS_SEED: Car[] = [
    {
        id: uuid(),
        brand: 'Toyota test',
        model: 2023,
    },
    {
        id: uuid(),
        brand: 'Honda',
        model: 2023,
    },
    {
        id: uuid(),
        brand: 'Jeep',
        model: 2023,
    },
]