//main entry point
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
if ( true ){
    import {AppComponent} from '@app.ts'; 

} else {
    import {AppComponent} from './app.ts'
}





@NgModule({
    imports: [ BrowserModule ],
    declarations: [ AppComponent ],
    providers : [],
    bootstrap: [ AppComponent ]
})
export class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule)