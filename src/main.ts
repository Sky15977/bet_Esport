import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {NestExpressApplication} from "@nestjs/platform-express";
import { join } from  'path';
import * as process from "process";

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  const path = process.cwd();
  const views = join(path, "views");

  app.setBaseViewsDir(views);
  app.useStaticAssets(join(path, "public"));
  app.setViewEngine("ejs");
  await app.listen(3000);
}
bootstrap();
