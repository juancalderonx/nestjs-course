import { IsString, IsNumber, IsUUID, IsOptional } from "class-validator";

export class UpdatedCarDTO {

    @IsString()
    @IsUUID()
    @IsOptional()
    readonly id?: string // El id?: significa que no pasa nada si no viene.

    @IsString()
    @IsOptional()
    readonly brand?: string;

    @IsNumber()
    @IsOptional()
    readonly model?: number;
}