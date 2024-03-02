import { Component } from '@angular/core';

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.css']
})
export class ImageSliderComponent {
      imagesUrl:string[]=["assets/Images/sld-1.jpg","assets/Images/sld-2.jpg","assets/Images/sld-3.jpg"];
      currentImage:string=this.imagesUrl[0];
      counter:number=0;
      next(){
        if(this.counter==this.imagesUrl.length-1){
          this.counter=0;
        }else{
          this.counter++;
        }
        this.currentImage=this.imagesUrl[this.counter];
      }
      pervious(){
        if(this.counter>0){
          this.counter--;
        }else{
          this.counter=this.imagesUrl.length-1;
        }
        this.currentImage=this.imagesUrl[this.counter];
      }
      playInterval:any=null;
      play() {
      this.playInterval = setInterval(() => {
        this.next();
      }, 1000);
      }
      stop() {
        clearInterval(this.playInterval);
      }
}
