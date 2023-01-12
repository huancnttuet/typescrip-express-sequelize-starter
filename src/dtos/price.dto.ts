import { IsNumber, IsOptional, IsString } from 'class-validator';

export class CreatePriceDto {
  @IsOptional()
  @IsString()
  origin_price: string;
  @IsString()
  price: string;
  @IsOptional()
  @IsString()
  discount: string;
  @IsNumber()
  currency_id: number;
}
