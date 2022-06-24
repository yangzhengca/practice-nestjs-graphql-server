import { Injectable } from '@nestjs/common';
import { Video, User } from 'src/graphql';
import { VideoDTO } from './dto/video.dto';

@Injectable()
export class VideoService {
  private readonly videos: Video[] = [];

  findAll(): Video[] {
    return this.videos;
  }

  create(videoDTO: VideoDTO): Video {
    const videoID: number = this.videos.length + 1;
    const video: Video = new Video();
    video.id = videoID.toString();
    video.title = videoDTO.title;
    video.url = videoDTO.url;
    const author: User = new User();
    author.id = videoDTO.userID;
    author.name = 'Author ' + videoDTO.userID;
    video.author = author;
    this.videos.push(video);
    return video;
  }
}

