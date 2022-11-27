import { Module } from '@nestjs/common';
import { CarsController } from './cars.controller';

@Module({
  controllers: [ CarsController ],
  providers: []
})
export class CarsModule {}
