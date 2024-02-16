import { Component } from '@angular/core';

@Component({
  selector: 'app-enviroment',
  templateUrl: './enviroment.component.html',
  styleUrls: ['./enviroment.component.css']
})
export class EnviromentComponent {

  constructor() {}

  onClickMe() {
     console.log('...........')
  }

  treeTreeViewComponent = [{name: 'sssss'}, {name: 'sssss'}]

  nodeSelectEventTreeViewComponent(response: any) {
    console.log(response)
  }
}