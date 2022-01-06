import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'RecShopApplication';
  loadedPage='recipe'
  onNavigate(feature:string)
  {
    this.loadedPage=feature;
  }
}
