import { Injectable } from "@nestjs/common";

@Injectable({})
export class AuthService {
    signup(){
        return {
            message: 'I am sign up'
        }
    }

    signin(){
        return {
            message: 'I am sign in'
        }
    }
}