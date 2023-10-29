import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  getUsers(): any {
    const array = [{ name: 'edu', email: 'kratosedu18@gmail.com', numbers:[1,2,3,4] }];
    return array;
  }
}
