import { Component, OnInit } from '@angular/core';

const ITEMTYPES = 'itemtype';
const ITEMS = 'item';
export const SECTIONS = {
  [ITEMS]: 'Items',
  [ITEMTYPES]: 'ItemTypes',
};
const SECTIONS_KEYS = Object.keys(SECTIONS);

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  get sections() {
    return SECTIONS;
  }

  get sectionKeys() {
    return SECTIONS_KEYS;
  }
}
