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
import {MatTableDataSource} from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

@Component({
  selector: 'retail',
  templateUrl: './retail.component.html',
  styleUrls: ['./retail.component.scss']
})
export class RetailComponent implements OnInit {
  displayedColumns: string[] = ['select', 'position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  selection = new SelectionModel<PeriodicElement>(true, []);

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: PeriodicElement): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }
  opened: false;

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
