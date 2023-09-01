import { Component, OnInit } from '@angular/core';
import { timeout } from 'rxjs';

declare var $:any;
declare function HOMEINITEMPLETE([ ]): any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'ecommerce';
  ngOnInit(): void {
    setTimeout(() => {
        HOMEINITEMPLETE($);
      }, 50
    )
  }
}