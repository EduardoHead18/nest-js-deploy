import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!');
    });
  });

  describe('users', () => {
    it('should return "Array data users,"', () => {
      const responseExpect = [{ name: 'edu', email: 'kratosedu18@gmail.com', numbers:[1,2,3,4] }]
      expect(appController.getUser()).toEqual(responseExpect);
    });
  });
});
