import { IsString, IsNotEmpty, IsNumber } from "class-validator";

export class AlbumDto{
    @IsString()
    @IsNotEmpty()
    readonly name: string;

    @IsNumber()
    @IsNotEmpty()
    readonly year: number;

    @IsString()
    @IsNotEmpty()
    readonly genre: string;

    @IsString()
    @IsNotEmpty()
    readonly label: string;

    @IsString()
    @IsNotEmpty()
    readonly producer: string;

    @IsString()
    readonly format: string;

    @IsString()
    readonly barcode: string;

}