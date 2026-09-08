import { IsArray, IsNumber, IsOptional, IsString, Min, MinLength } from "class-validator";

export class CreateProjectDto {

  @IsString()
  @MinLength(1)
  title: string;

  @IsNumber()
  year: number;

  @IsString()
  imgUrl: string;

  @IsString()
  @IsOptional()
  sampleUrl: string;

  @IsString()
  @MinLength(1)
  description: string;

  @IsArray()
  tools: string[];
  
}
