import { IsString, IsNotEmpty, IsNumber } from "class-validator";

export class AlbumDto{
    @IsString()
    @IsNotEmpty()
    readonly name: string;

    @IsNumber()
    @IsNotEmpty()
    readonly year: number;


}