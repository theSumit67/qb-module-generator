//main entry point
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {ParentComponent} from './app.ts'



@NgModule({
    imports: [ BrowserModule ],
    declarations: [ ParentComponent ],
    providers : [],
    bootstrap: [ ParentComponent ]
})
export class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule)