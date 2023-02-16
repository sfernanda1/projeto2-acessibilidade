
//Quando a interface é compartilhada usar um arquivo separado
import { TemplateRef } from "@angular/core";

export interface ModalConfig{
  templateRef: TemplateRef<any>;
  title: string;
}
