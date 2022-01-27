import {Schema,Prop,SchemaFactory} from '@nestjs/mongoose'
import { Document } from 'mongoose'

@Schema()
export class signup{
    @Prop({unique:true})
    username:string;

    @Prop({unique:true})
    email:string;
    
    @Prop()
    password:string
}

export type SignupModel = signup & Document

export const signupSchema = SchemaFactory.createForClass(signup)