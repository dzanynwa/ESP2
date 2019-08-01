import { Component, OnInit } from '@angular/core';
import {MDCTextField, MDCTextFieldHelperText} from '@material/textfield';
import {MDCSelect} from '@material/select';
import {MDCList} from '@material/list';
import {MDCRipple} from '@material/ripple';
import {MDCSwitch} from '@material/switch';
import {MDCFormField} from '@material/form-field';
import {MDCCheckbox} from '@material/checkbox';
import {MatDatepickerModule} from '@angular/material/datepicker';

@Component({
  selector: 'channels',
  templateUrl: './channels.component.html',
  styleUrls: ['./channels.component.scss']
})
export class ChannelsComponent implements OnInit {
  startDate = new Date(1990, 0, 1);
  constructor() { }

  ngOnInit() {
    const textField = new MDCTextField(document.querySelector('.mdc-text-field'));
    const helperText = new MDCTextFieldHelperText(document.querySelector('.mdc-text-field-helper-text'));
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
