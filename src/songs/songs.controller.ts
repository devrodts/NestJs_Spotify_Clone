import {
  Controller,
  Get,
  Param,
  Put,
  Body,
  Delete,
  Post,
} from '@nestjs/common';
import { UpdateSongDto } from './dto/update-song.dto';
import { CreateSongDto } from './dto/create-song.dto';
import { SongsService } from './songs.service';
import { FindAllSongsDto } from './dto/find-all-songs.dto';

@Controller('songs')
export class SongsController {
    
  constructor(private readonly songsService: SongsService) {}

  @Post()
  create(@Body() createSongDto: CreateSongDto) {
    this.songsService.create(createSongDto);
  }

  @Get()
  findAll(): FindAllSongsDto[] {
    return this.songsService.findAll();
  }


  @Get(':id')
  findOne(@Param('id') id: string): string {
    return `This action returns a #${id} song`;
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateSongDto: UpdateSongDto,
  ): string {
    return `This action updates a #${id} song`;
  }

  @Delete(':id')
  remove(@Param('id') id: string): string {
    return `This action removes a #${id} song`;
  }
}
