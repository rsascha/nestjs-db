import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersService } from './users/users.service';
import { UsersModule } from './users/users.module';
import { UserHttpModule } from './user-http/user-http.module';

@Module({
  imports: [UsersModule, UserHttpModule],
  controllers: [AppController],
  providers: [AppService, UsersService],
})
export class AppModule {}
