import { ComponentRef } from "@angular/core";
import { ModalComponent } from "../modal.component";

export class ModalRef{
  constructor(private componenRef: ComponentRef<ModalComponent>){}
  public close(): void{
    this.componenRef.destroy();
  }
}
