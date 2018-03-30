//our root app component
import {Component, NgModule, VERSION, OnInit} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'

// parent.component.ts

@Component({
  selector: 'app-parent',
  template: ` <h1>{{message}} </h1>`
})
export class ParentComponent {

  message:string = " msgsssssss ";

}

@NgModule({
  imports: [ BrowserModule ],
  declarations: [ ParentComponent ],
  providers : [],
  bootstrap: [ ParentComponent ]
})
export class AppModule {}