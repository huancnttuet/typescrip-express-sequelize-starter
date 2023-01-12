import { IsOptional, IsString } from 'class-validator';

export class CreateCurrencyDto {
  @IsString()
  name: string;
  @IsString()
  symbol: string;
  @IsOptional()
  @IsString()
  rate: string;
}
