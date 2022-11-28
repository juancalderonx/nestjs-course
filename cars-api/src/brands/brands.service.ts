import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { Brand } from './entities/brand.entity';
import { v4 as uuid } from 'uuid';

@Injectable()
export class BrandsService {

  private brands: Brand[] = [
    {
      id: uuid(),
      name: 'Mercedes Benz',
      createdAt: new Date().getTime()
    }
  ]

  // Functions ----------------------------------------------------------------

  create(createBrandDto: CreateBrandDto) {

    const { name } = createBrandDto;

    const brand: Brand = {
      id: uuid(),
      name: name.toLowerCase(),
      createdAt: new Date().getTime()
    }

    this.brands.push(brand);

    return brand;
  }

  findAll() {
    return this.brands;
  }

  findOne(id: string) {
    const brand = this.brands.find( brand => brand.id === id );

    if (!brand) throw new NotFoundException(`Brand with id ${id} does not exist`);

    return brand;
  }

  update(id: string, updateBrandDto: UpdateBrandDto) {

    let brandDB = this.findOne( id );

    this.brands = this.brands.map( brand => {
      if ( brand.id === id ) {
        brandDB.updatedAt = new Date().getTime();

        brandDB = { ...brandDB, ...updateBrandDto }

        return brandDB;
      }

      return brand;
    })

    return brandDB;

  }

  remove(id: string) {
    this.brands = this.brands.filter( brand => brand.id !== id );
    // Al array de brands le regreso todos los elementos que no tengan el ID que traje. Esto quiere decir que ya no existirá el elemento con ese ID.
    console.log('Marca eliminada correctamente.');
    return this.brands;
  }
}
