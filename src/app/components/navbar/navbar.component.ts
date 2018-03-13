import { Component, OnInit,ViewChild, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'devsstore-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  title = 'devsstore';
  toggle = false;
  @ViewChild('menu') menu:ElementRef;
  constructor(private render:Renderer2) { }

  ngOnInit() {
  }
    toggleMenu(){
      if(this.toggle == false){
          this.render.addClass(this.menu.nativeElement,"is-active");
          this.toggle=!this.toggle;
      }else{
          this.render.removeClass(this.menu.nativeElement,"is-active");
          this.toggle=!this.toggle;
      }

  }
}
