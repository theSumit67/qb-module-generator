//our root app component
import {Component, NgModule, VERSION, OnInit} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'

// parent.component.ts

@Component({
  selector: 'app-parent',
  template: ` {{message}} `
})
export class ParentComponent {

  let message:string = " msgsssssss ";

  constructor() { }


}

@NgModule({
  imports: [ BrowserModule ],
  declarations: [ ParentComponent ],
  providers : [],
  bootstrap: [ ParentComponent ]
})
export class AppModule {}