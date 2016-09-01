import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';
import { OtherAppModule } from './otherapp.module';
platformBrowserDynamic().bootstrapModule(AppModule);
platformBrowserDynamic().bootstrapModule(OtherAppModule);
