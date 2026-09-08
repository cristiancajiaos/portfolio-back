import { IsString, MinLength } from "class-validator";

export class CreateContactDto {
  @IsString()
  @MinLength(1)
  medium: string;

  @IsString()
  @MinLength(1)
  mediumUrl: string;
}
