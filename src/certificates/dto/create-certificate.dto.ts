import { IsNumber, IsString, MinLength } from "class-validator";

export class CreateCertificateDto {

  @IsString()
  @MinLength(1)
  title: string;

  @IsString()
  @MinLength(1)
  place: string;

  @IsNumber()
  year: number;

  @IsString()
  @MinLength(1)
  certificateUrl: string;
}
