import { IsNumber, IsString } from 'class-validator';

export class CreateProductDto {
  @IsString()
  public name: string;
  @IsNumber()
  public price_id: number;
  @IsNumber()
  public quantity: number;
  @IsString()
  public description: string;
  @IsNumber()
  public category_id: number;
}
