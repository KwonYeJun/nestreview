import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return '오늘 하루도 고생 만으셨습니다!!';
  }
}
