import { Injectable, ForbiddenException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateBookmarkDto, UpdateBookmarkDto } from './dto';

@Injectable()
export class BookmarkService {
  constructor(private prisma: PrismaService) {}

  async index(userId: number) {
    return await this.prisma.bookmark.findMany({ where: { userId: userId } });
  }

  async store(userId: number, dto: CreateBookmarkDto) {
    return await this.prisma.bookmark.create({ data: { ...dto, userId } });
  }

  async show(userId: number, bookmarkId: number) {
    return await this.prisma.bookmark.findFirst({
      where: { id: bookmarkId, userId },
    });
  }

  async update(userId: number, bookmarkId: number, dto: UpdateBookmarkDto) {
    const bookmark = await this.prisma.bookmark.findUnique({
      where: { id: bookmarkId },
    });

    if (!bookmark || bookmark.userId !== userId)
      throw new ForbiddenException('Access to resource denied');

    return await this.prisma.bookmark.update({
      where: { id: bookmarkId },
      data: { ...dto },
    });
  }

  async delete(userId: number, bookmarkId: number) {
    const bookmark = await this.prisma.bookmark.findUnique({
      where: { id: bookmarkId },
    });

    if (!bookmark || bookmark.userId !== userId)
      throw new ForbiddenException('Access to resource denied');

    await this.prisma.bookmark.delete({
      where: { id: bookmarkId },
    });
  }
}
