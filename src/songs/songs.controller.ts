import { Controller, Get, Param, Put, Body, Delete, Post } from '@nestjs/common';
import { UpdateSongDto } from './dto/update-song.dto';
import { CreateSongDto } from './dto/create-song.dto';


@Controller('songs')

export class SongsController {

    @Post()
    create(@Body() createSongDto: CreateSongDto): string {
        return `This action adds a new song ${createSongDto.title}`;
    }

    @Get()
    findAll(): string {
        return 'This action returns all songs';
    }


    @Get(':id')
    findOne(@Param('id') id: string): string {
        return `This action returns a #${id} song`;
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() updateSongDto: UpdateSongDto): string {
        return `This action updates a #${id} song`;
    }

    @Delete(':id')
    remove(@Param('id') id: string): string {
        return `This action removes a #${id} song`;
    }

}
