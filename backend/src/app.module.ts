import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SignupModule } from './signup/signup.module';



@Module({
  imports: [ MongooseModule.forRoot('mongodb://localhost/signup'),SignupModule                                                                                    ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
