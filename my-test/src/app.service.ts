import { Injectable } from '@nestjs/common';
import { getConnection } from 'typeorm';
import { User } from './entity/user';
import { Photo } from './entity/photo';

@Injectable()
export class AppService {

    async init(): Promise<boolean> {

        const connection = getConnection();
        const manager = connection.manager;
        const p1 = new Photo('Photo Number 1');
        const p2 = new Photo('Photo Number 2');
        const u = new User('Max', 'Power', 99);
        p1.user = u;
        p2.user = u;
        u.photos = [p1, p2];
        await manager.save(u);
        return true;
    }

    async getUsers(): Promise<User[]> {

        const connection = getConnection();
        const photoRepository = connection.getRepository(User);
        const users = await photoRepository.find({ relations: ["photos"] });
        return users;
    };

    async getPhotos(): Promise<Photo[]> {

        const connection = getConnection();
        const photoRepository = connection.getRepository(Photo);
        const photos = await photoRepository.find({ relations: ["user"] });
        return photos;
    };

  
}
