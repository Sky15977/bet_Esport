"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const path_1 = require("path");
const app_module_1 = require("./app.module");
const process = require("process");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const path = process.cwd();
    const views = (0, path_1.join)(path, "views");
    app.setBaseViewsDir(views);
    app.useStaticAssets((0, path_1.join)(path, "public"));
    app.setViewEngine("ejs");
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map