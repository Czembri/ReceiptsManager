import { Component, Input, OnInit } from '@angular/core';
import { ISubNavigationOptions } from './sub-nav.model';

@Component({
  selector: 'app-sub-navigation',
  templateUrl: './sub-navigation.component.html',
  styleUrls: ['./sub-navigation.component.css']
})
export class SubNavigationComponent implements OnInit {

  @Input() naviOptions: Array<ISubNavigationOptions> 

  constructor() { }

  ngOnInit(): void {
  }

}
