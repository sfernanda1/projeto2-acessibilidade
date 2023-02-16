import { BodyInjectorService } from './../../../services/body-injector';
import { ModalComponent } from './../modal.component';
import { ComponentFactory, ComponentFactoryResolver, ComponentRef, Injectable, Injector, TemplateRef } from "@angular/core";
import { ModalConfig } from "../interfaces/modal-config";

@Injectable()
export class ModalService{
  private componentFactory : ComponentFactory<ModalComponent>
  constructor(componentFactoryResolver: ComponentFactoryResolver, private injector: Injector, private bodyInjector: BodyInjectorService){
    this.componentFactory = componentFactoryResolver.resolveComponentFactory(ModalComponent);
  }

  public open(config: ModalConfig) : ModalRef{
    const componentRef = this.createComponentRef();
    componentRef.instance.config = config;
    this.bodyInjector.stackeBeforeAppRoot(componentRef);
    return new ModalRef(componentRef);
  }

  private createComponentRef(): ComponentRef<ModalComponent>{
    return this.componentFactory.create(this.injector);
  }
}

export class ModalRef{
  constructor(private componenRef: ComponentRef<ModalComponent>){}
  public close(): void{
    this.componenRef.destroy();
  }
}

//O ComponentRef é um artefato com Angular que encapsula uma instância do componente criado dinamicamente. Já ModalRef é uma criação nossa que encapsula um ComponentRef possuindo apenas o método close sem export a referência para o desenvolvedor cliente da nossa API.
