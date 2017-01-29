import { Component } from '@angular/core';
//import { Component } from './databinding';

@Component({
  selector: 'app-root',
  template: `
          <h1>Root componente here</h1>
          <fa-databinding></fa-databinding>
  `
})
export class AppComponent {
  title = 'I changed this, again!';
}
