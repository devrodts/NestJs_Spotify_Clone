import { IsString, IsNotEmpty, IsArray, IsDateString, IsObject, IsMilitaryTime } from 'class-validator';

export class CreateSongDto{

    @IsString()
    @IsNotEmpty()
    readonly title: string;

    @IsNotEmpty()
    @IsArray()
    @IsString()
    readonly artist: string[];

    @IsNotEmpty()
    @IsObject()
    @IsString()
    readonly album: object[] | string;

    @IsNotEmpty()
    @IsDateString()
    readonly releaseDate: Date;

    @IsMilitaryTime()
    @IsNotEmpty()
    readonly duration: string;
    
}
