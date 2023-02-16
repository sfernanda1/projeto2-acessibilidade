import {trigger, transition, style, animate} from '@angular/animations';

export const fade = trigger(
  'fade',
  [
    transition(
      ':enter',
      [
        style({opacity:0}),
        animate(100, style({opacity: 1}))
      ]
    ),
    transition(
      ':leave',
      [
        animate(100, style({opacity: 0}))
      ]
    )
  ]
);


//A funcão trigger é responsável em definir um gatilho para animações. Todo gatilho possui um nome e é através desse nome que podemos referenciar a animação no template dos nossos componentes contanto que eles importem e registram a animação no propriedade animations de decorator @Component.
// Na função transition Seu primeiro parâmetro define o momento no qual desejamos aplicar a transição. Seu segundo parâmetro é uma array com o estado iniciar de propriedades CSS e animações que desejamos aplicar.
