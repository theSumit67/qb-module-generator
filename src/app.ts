import {Component, VERSION, OnInit} from '@angular/core'


// parent.component.ts

@Component({
  selector: 'app-parent',
  template: ` <h1>{{message}} </h1>`
})
export class ParentComponent {
    message:string = " from editor ";
}
