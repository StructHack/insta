import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from './datasource/typeorm.module';
import { UsersModule } from './users/users.module';
import { AuthService } from './auth/auth.service';
import { AuthController } from './auth/auth.controller';
import { AuthModule } from './auth/auth.module';
import { JwtService } from '@nestjs/jwt';
import { PostsController } from './posts/posts.controller';
import { PostsModule } from './posts/posts.module';
@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule,
    UsersModule,
    AuthModule,
    PostsModule,
  ],
  controllers: [AppController, AuthController, PostsController],
  providers: [AppService, AuthService, JwtService],
})
export class AppModule {}
