import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { User } from './entity/user';
import { Photo } from './entity/photo';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get("/init")
  initDummyData(): Promise<boolean> {
    return this.appService.init();
  }

  @Get("/users")
  getUsers(): Promise<User[]> {
    return this.appService.getUsers();
  }

  @Get("/photos")
  getPhotos(): Promise<Photo[]> {
    return this.appService.getPhotos();
  }

}
