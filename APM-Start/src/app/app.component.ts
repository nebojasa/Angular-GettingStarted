import { Component } from "@angular/core";

@Component({
  selector: 'pm-root',
  template: `
  <div>
    <h1>{{pageTitie}}</h1>
    <pm-products></pm-products>
  </div>`
})
export class AppComponent {
  public pageTitie: string = 'Acmee product managment!';
}
