import { IsNumberString ,  IsNotEmpty} from 'class-validator';

export class FindOneParams {
  @IsNotEmpty({ message: 'Code postal cannot be empty' })
  @IsNumberString({}, { message: 'Code postal must be a number string' })
  codePostal: string;
}
