import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

//nest g --help (opt° utilisable au niveau de la CNI de nest
//un controller défini les routes
@Controller() //url racine si (null)
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
