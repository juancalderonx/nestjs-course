import { IsString, IsNumber } from "class-validator";

export class CreateCarDTO {

    @IsString()
    readonly brand: string;

    @IsNumber()
    readonly model: number;
}
