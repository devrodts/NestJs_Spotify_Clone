import { Injectable } from '@nestjs/common';
import { CreateSongDto } from './dto/create-song.dto';
import { FindAllSongsDto } from './dto/find-all-songs.dto';

@Injectable()
export class SongsService {

    private readonly songs: CreateSongDto[] = [];

    create(song: CreateSongDto){
        this.songs.push(song);
    }

    findAll(): FindAllSongsDto[] {
        return this.songs;
    }
    
}
