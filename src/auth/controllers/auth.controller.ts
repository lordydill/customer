import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from '../service/auth.service'; //Digunakan untuk mengimport file AuthService dari folder servis karena file service berisi  logika login user

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {} //digunakan untuk menghubungkan controller dengan service. lalu untuk private readonly hanya bisa digunakan di dalam class dan tidak bisa diubah nilainya.

  @Post('login') //digunakan untuk alamat API yang akan diakses.
  login(@Body() body: any) {
    //digunakan untuk mengambil data dari request body
    return this.authService.login(body); // return untuk mengirim data controller ke service lalu this.authservice digunakan untuk cek username & password dan untuk mengembalikan hasil (success / gagal).
  }
}
