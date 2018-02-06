import { NgModule } from '@angular/core';
import { MODULES, DIRECTIVES, PROVIDERS, EXPORTS } from './app.imports';

@NgModule({
    imports: MODULES,
    declarations: DIRECTIVES,
    exports: EXPORTS,
  	providers: PROVIDERS
})
export class SharedModule {}
