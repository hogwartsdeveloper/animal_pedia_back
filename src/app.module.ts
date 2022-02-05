import { Module } from "@nestjs/common";
import { RolesModule } from './roles/roles.module';
import { ConfigModule } from "@nestjs/config"
import { SequelizeModule } from "@nestjs/sequelize"
import { UsersModule } from './users/users.module';
import { PostsModule } from './posts/posts.module';
import { AuthModule } from './auth/auth.module';
import { User } from "./users/users.model";
import { Role } from "./roles/roles.model";
import { UserRoles } from "./roles/user-roles.model";
import { Post } from "./posts/posts.model";
import { FilesModule } from './files/files.module';

@Module({
    controllers: [],
    providers: [],
    imports: [
        RolesModule,
        ConfigModule.forRoot({
            envFilePath: `.${process.env.NODE_ENV}.env`
        }),
        SequelizeModule.forRoot({
            dialect: 'postgres',
            host: process.env.POSTGRES_HOST,
            port: Number(process.env.POSTGRES_PORT),
            username: process.env.POSTGRES_USER,
            password: process.env.POSTGRES_PASSWORD,
            database: process.env.POSTGRES_DB,
            models: [User, Role, UserRoles, Post],
            autoLoadModels: true
        }),
        UsersModule,
        PostsModule,
        AuthModule,
        RolesModule,
        FilesModule
    ]
})
export class AppModule {}