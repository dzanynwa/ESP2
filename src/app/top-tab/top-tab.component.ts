import { Component, OnInit } from '@angular/core';
import {MDCTabBar} from '@material/tab-bar';

@Component({
  selector: 'top-tab',
  templateUrl: './top-tab.component.html',
  styleUrls: ['./top-tab.component.scss']
})
export class TopTabComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const tabBar = new MDCTabBar(document.querySelector('.mdc-tab-bar'));
  }

}
