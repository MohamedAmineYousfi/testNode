import { Controller, Get, Post, Body, Patch, Param, Delete ,NotFoundException} from '@nestjs/common';
import { CitiesService } from './cities.service';
import { CreateCityDto } from './dto/create-city.dto';
import { UpdateCityDto } from './dto/update-city.dto';
import { FindOneParams } from './dto/find-one-params';
@Controller('cities')
export class CitiesController {
  constructor(private readonly citiesService: CitiesService) {}

  @Post()
  create(@Body() createCityDto: CreateCityDto) {
    return this.citiesService.create(createCityDto);
  }

  @Get()
  findAll() {
    return this.citiesService.findAll();
  }

  @Get(':codePostal')
  findOne(@Param('codePostal') codePostal: FindOneParams) {
    console.log(codePostal,"codePostal");
   if (typeof codePostal != "string") {
      throw new NotFoundException(`Code postal ${codePostal} is not of type string!`);
    }
    return this.citiesService.findOne(+codePostal);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCityDto: UpdateCityDto) {
    return this.citiesService.update(+id, updateCityDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.citiesService.remove(+id);
  }
}
