import { Component, OnInit } from '@angular/core';
import { MDCTopAppBar } from "@material/top-app-bar";
import { MDCDrawer } from "@material/drawer";
import {MDCTextField} from '@material/textfield';

@Component({
  selector: 'upper-nav',
  templateUrl: './upper-nav.component.html',
  styleUrls: ['./upper-nav.component.scss']
})
export class UpperNavComponent implements OnInit {
  title = 'ESP';

  constructor() { }

  // implement OnInit's `ngOnInit` method
  ngOnInit() {
    // The JavaScript to toggle the drawer when the navigation button is clicked
    const topAppBar = MDCTopAppBar.attachTo(document.getElementById('app-bar'));
    const drawer = MDCDrawer.attachTo(document.querySelector('.mdc-drawer'));
    
    topAppBar.setScrollTarget(document.getElementById('main-content'));
    topAppBar.listen('MDCTopAppBar:nav', () => {
      drawer.open = !drawer.open;
    });
  }
}
