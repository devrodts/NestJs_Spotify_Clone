import { Type } from 'class-transformer';
import { IsString, IsNotEmpty, IsArray, IsDateString, IsObject, IsMilitaryTime, ValidateNested } from 'class-validator';
import { AlbumDto } from './album.dto';

export class CreateSongDto{

    @IsString()
    @IsNotEmpty()
    readonly title: string;

    @IsNotEmpty()
    @IsString({each: true})
    readonly artist: string[];

    @ValidateNested({each: true})
    @Type(() => AlbumDto)
    readonly album: AlbumDto[];

    @IsNotEmpty()
    @IsDateString()
    readonly releaseDate: Date;

    @IsMilitaryTime()
    @IsNotEmpty()
    readonly duration: string;

}
