import { Component, OnInit } from '@angular/core';
import {MDCTopAppBar} from "@material/top-app-bar";
import {MDCDrawer} from "@material/drawer";



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
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

/*
JavaScript Guide - JavaScript | MDN
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide
*/