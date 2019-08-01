import { Component, OnInit } from '@angular/core';
import { MDCCheckbox } from '@material/checkbox';
import { MDCRipple } from '@material/ripple';
import { MDCFormField } from '@material/form-field';
import { MDCSwitch } from '@material/switch';
import { MDCSelect } from '@material/select';
import { MDCList } from '@material/list';
import { MDCTabBar } from '@material/tab-bar';
import {MDCTextField} from '@material/textfield';
import {MDCTextFieldHelperText} from '@material/textfield/helper-text';

@Component({
  selector: 'pos-systems',
  templateUrl: './pos-systems.component.html',
  styleUrls: ['./pos-systems.component.scss']
})
export class PosSystemsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const textField = new MDCTextField(document.querySelector('.mdc-text-field'));
    const helperText = new MDCTextFieldHelperText(document.querySelector('.mdc-text-field-helper-text'));
    const tabBar = new MDCTabBar(document.querySelector('.mdc-tab-bar2'));
    const switchControl = new MDCSwitch(document.querySelector('.mdc-switch'));
    const select = new MDCSelect(document.querySelector('.mdc-select'));
    const list = new MDCList(document.querySelector('.mdc-list'));
    const buttonRipple = new MDCRipple(document.querySelector('.mdc-button'));
    const checkbox = new MDCCheckbox(document.querySelector('.mdc-checkbox'));
    const formField = new MDCFormField(document.querySelector('.mdc-form-field'));
    formField.input = checkbox;
    const selector = '.mdc-button, .mdc-icon-button, .mdc-card__primary-action';
    const ripples = [].map.call(document.querySelectorAll(selector), function(el) {
      return new MDCRipple(el);
    });
    const listItemRipples = list.listElements.map((listItemEl) => new MDCRipple(listItemEl));
    select.listen('MDCSelect:change', () => {
      alert(`Selected option at index ${select.selectedIndex} with value "${select.value}"`);
    });
  }

}
