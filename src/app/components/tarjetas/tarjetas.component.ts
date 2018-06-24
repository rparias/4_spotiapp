import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styles: []
})
export class TarjetasComponent {

  @Input() items: any[] = [];

  constructor() { }

}
