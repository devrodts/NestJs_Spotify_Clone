import { IsString, IsNotEmpty, IsArray, IsObject, IsDateString, IsMilitaryTime } from 'class-validator';

export class FindAllSongsDto{
    
    @IsString()
    @IsNotEmpty()
    readonly title: string;


    @IsArray()
    @IsString()
    readonly artist: string[];

    @IsObject()
    @IsString()
    readonly album: object[] | string;

    @IsDateString()
    readonly releaseDate: Date;

    @IsMilitaryTime()
    @IsNotEmpty()
    readonly duration: string;

}

