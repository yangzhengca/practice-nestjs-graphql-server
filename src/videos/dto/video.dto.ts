import { IsNotEmpty } from 'class-validator';
import { NewVideo } from '../../graphql';

export class VideoDTO extends NewVideo {
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  url: string;

  @IsNotEmpty()
  userID: string;

}