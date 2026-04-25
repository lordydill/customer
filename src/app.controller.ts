import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('barang')
  getBarang(): string {
    return 'bensing pertamina bulukumba';
  }

  @Post('bensing/masuk')
  barangMasuk(): string {
    return 'bensin masuk';
  }

  @Post('bensing/keluar')
  barangKeluar(): string {
    return 'bensing keluar';
  }
}
