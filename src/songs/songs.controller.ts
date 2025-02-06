import { Controller, Get, Param, Put, Body } from '@nestjs/common';

@Controller('songs')

export class SongsController {

    @Get()
    findAll(): string {
        return 'This action returns all songs';
    }

}
