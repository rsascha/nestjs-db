# nestjs-db

I'm just testing to connect a database to NestJS application

**Contents**

<!-- @import "[TOC]" {cmd="toc" depthFrom=2 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

- [References](#references)
  - [Stoplight](#stoplight)
  - [OpenAPI](#openapi)
  - [TypeORM](#typeorm)
- [Generate Code](#generate-code)

<!-- /code_chunk_output -->

## DB Migrations

* `npm run typeorm:migration:create`: Create a new empty migration to write the `up` and `down` scripts manually.
* `npm run typeorm:migration:generate`: Change entities in the code, then run this command to generate a migration script.
* `npm run typeorm:migration:run`: Apply changes to the database (execute `up`).
* `npm run typeorm:migration:revert`: Rollback changes for the database (execute `down`).

## References

### Stoplight 

<https://github.com/stoplightio/studio/releases>

### OpenAPI

<https://github.com/OpenAPITools/openapi-generator#3---usage>

<https://github.com/OpenAPITools/openapi-generator/tree/master/docs/generators>

### TypeORM

<https://docs.nestjs.com/techniques/database#typeorm-integration>

<https://typeorm.io/#/using-cli/installing-cli>

<https://typeorm.io/#/migrations>

## Generate Code

```bash
./run-generator.sh
```

## Sample Code

```typescript
import "reflect-metadata";
import {createConnection} from "typeorm";
import {User} from "./entity/user";

createConnection().then(async connection => {

    console.log("Inserting a new user into the database...");
    const user = new User();
    user.firstName = "Timber";
    user.lastName = "Saw";
    user.age = 25;
    await connection.manager.save(user);
    console.log("Saved a new user with id: " + user.id);

    console.log("Loading users from the database...");
    const users = await connection.manager.find(User);
    console.log("Loaded users: ", users);

    console.log("Here you can setup and run express/koa/any other framework.");

}).catch(error => console.log(error));
```

```typescript

const p1 = new Photo('Photo Number 1');
const p2 = new Photo('Photo Number 2');
const u = new User('Max', 'Power', 99);
u.photos = [p1, p2];
const manager = queryRunner.connection.manager;
await manager.save(u);

```