import { IsNotEmpty, IsString } from "class-validator";

export class SearchSystemDTO {
    @IsNotEmpty()
    @IsString()
    readonly nombre_curso: string;
}