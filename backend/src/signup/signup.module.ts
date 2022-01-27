import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SignupController } from './signup.controller';
import { signupSchema } from './signup.model';
import { SignupService } from './signup.service';

@Module({
  imports: [
    MongooseModule.forFeature([
     {
       name:"signup",
       schema:signupSchema
     }]
    )

  ],
  controllers: [SignupController],
  providers: [SignupService]
})
export class SignupModule {}
