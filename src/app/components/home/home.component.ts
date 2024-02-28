import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  nameProject:string="CaptureMe";
  desc:string=`This is a wider card with supporting text below as a natural lead-in to
  additional content. This content is a little bit longer.`;
   imgUrl:string="assets/Images/home.jpg";
   myColor:string="#2E8B57";
   applayViolet:boolean=true;
}
