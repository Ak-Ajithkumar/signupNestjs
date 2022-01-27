import { Body, Controller ,Post} from '@nestjs/common';
import { signupDto } from './signup.dto';
import { SignupService } from './signup.service';

@Controller('signup')
export class SignupController {


    constructor (
        private readonly signupService:SignupService
    ){}
    @Post()

    signup(@Body() signupDto:signupDto){
        return this.signupService.signup(signupDto)

    }
}
