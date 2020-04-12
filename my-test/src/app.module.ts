import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersService } from './users/users.service';
import { UsersModule } from './users/users.module';
import { User } from './entity/user';
import { Photo } from './entity/photo';

@Module({
    imports: [
        UsersModule,
        TypeOrmModule.forRoot({
            type: 'mysql',
            host: 'localhost',
            port: 3306,
            username: 'root',
            password: 'password',
            database: 'nestjs-db',
            entities: [User, Photo],
            synchronize: true,
            autoLoadEntities: true,
        }),
    ],
    controllers: [AppController],
    providers: [AppService, UsersService],
})
export class AppModule { }
