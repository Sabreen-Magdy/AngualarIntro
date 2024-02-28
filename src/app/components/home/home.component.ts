import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  text:string="Border hero with cropped image and shadows";
   imgUrl:string="https://getbootstrap.com/docs/5.3/examples/heroes/bootstrap-docs.png";
   myColor:string="#FF00FF";
   applayViolet:boolean=true;
}
