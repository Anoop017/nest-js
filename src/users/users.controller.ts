import { Controller, Get } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller()
export class UsersController {
    constructor(private readonly userService:
        UsersService) { }

    @Get('users01')
    findAllUsers() {
        return this.userService.findAll();
    }

    @Get('userName')
    findAllByUserName() {
        return this.userService.findAll();
    }

    @Get('Login')
    findAllByLogin() {
        return this.userService.findAll();
    }



}
