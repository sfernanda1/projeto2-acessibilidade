import { TemplateRef, ViewChild } from '@angular/core';
import { ModalService } from './shared/components/modal/services/modal.service';
import { Component } from '@angular/core';
import { ModalRef } from './shared/components/modal/models/modal-ref';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'a11y-p2';

  //Injetando templateRef
  @ViewChild('modal') public modalTemplateRef: TemplateRef<any>;
  public modalRef: ModalRef;
  public info = false
  constructor(private modalService: ModalService){}

  //chamada para exibir o modal
  public show(): void {
   this.modalRef = this.modalService.open({
      templateRef: this.modalTemplateRef,
      title: 'User Datail'
    })

  }

}

