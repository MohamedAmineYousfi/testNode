import { Injectable } from '@nestjs/common';
import { CreateCityDto } from './dto/create-city.dto';
import { UpdateCityDto } from './dto/update-city.dto';
import axios from 'axios';

@Injectable()
export class CitiesService {
  create(createCityDto: CreateCityDto) {
    return 'This action adds a new city';
  }

  findAll() {
    return `This action returns all cities`;
  }
  

  async findOne(codePostal: number) {
    const url = `https://geo.api.gouv.fr/communes?codePostal=${codePostal}`;
    const response = await axios.get(url);
    try {
      const cities = response.data.map((c: any) => (
        c.nom
      ))
      console.log(cities, "cities");

      const  rep = {
        success: true,
        cities: cities
      }
      return rep;
    }
    catch (err) {
      console.log(err, "err");

      return {
        success: false,
        error : err };

    }

  }

  update(id: number, updateCityDto: UpdateCityDto) {
    return `This action updates a #${id} city`;
  }

  remove(id: number) {
    return `This action removes a #${id} city`;
  }
}
