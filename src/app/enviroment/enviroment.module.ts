import { NgModule } from '@angular/core';import { EnviromentComponent } from './enviroment.component';
import { CommonModule } from '@angular/common';
import {TreeViewModule} from '../tree-view/tree-view.module';
import {ChatComponent} from '../chat/chat.component';
import {LlamaService} from '../llama.service';

@NgModule({
  declarations: [
    EnviromentComponent,
    ChatComponent,
  ],
  imports: [
    CommonModule,
    TreeViewModule,
  ],
  exports: [EnviromentComponent],
  providers: [
    LlamaService,
  ]
})
export class EnviromentModule { }