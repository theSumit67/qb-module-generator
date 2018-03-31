//main entry point
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.ts'



@NgModule({
    imports: [ BrowserModule ],
    declarations: [ AppComponent ],
    providers : [],
    bootstrap: [ AppComponent ]
})
export class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule)