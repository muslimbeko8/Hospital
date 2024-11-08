"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const swagger_1 = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const swagger_themes_1 = require("swagger-themes");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.useGlobalPipes(new common_1.ValidationPipe());
    const config = new swagger_1.DocumentBuilder()
        .setTitle('API sarlavhasi')
        .setDescription('API tavsifi')
        .setVersion('1.0.0')
        .addTag('API')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    const theme = new swagger_themes_1.SwaggerTheme();
    const options = {
        explorer: true,
        customCss: theme.getBuffer(swagger_themes_1.SwaggerThemeNameEnum.DARK),
    };
    swagger_1.SwaggerModule.setup('api-hujjat', app, document, options);
    app.useGlobalPipes(new common_1.ValidationPipe({ whitelist: true, transform: true }));
    await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
//# sourceMappingURL=main.js.map