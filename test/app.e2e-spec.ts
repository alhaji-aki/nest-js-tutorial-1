import { INestApplication, ValidationPipe } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import { AppModule } from '../src/app.module';
import { PrismaService } from '../src/prisma/prisma.service';

describe('App e2e', () => {
  let app: INestApplication;
  let prisma: PrismaService;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [AppModule]
    }).compile();

    app = moduleRef.createNestApplication();

    app.useGlobalPipes(new ValidationPipe({
      whitelist: true
    }));

    await app.init();

    prisma = app.get(PrismaService);
  });

  afterAll(async () => {
    prisma.cleanDB();
    app.close();
  });

  describe('Auth', () => {
    describe('Signup', () => {
      it.todo('should sign up');
    });
    
    describe('Signin', () => {
      it.todo('should sign in');
    });
  });
  
  describe('User', () => {
    describe('Get me', () => {});

    describe('Edit User', () => {});
  });
  
  describe('Bookmark', () => {
    describe('Create Bookmarks', () => {});

    describe('Get Bookmarks', () => {});

    describe('Get Bookmark by id', () => {});

    describe('Edit Bookmarks', () => {});
    
    describe('Delete Bookmarks', () => {});
  });
});