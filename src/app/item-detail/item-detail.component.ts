import { Component, OnInit } from '@angular/core';
import { ExerciseItem } from '../common';
import { StorageService } from '../storage.service';
import {MatChipInputEvent} from '@angular/material';
import {ENTER} from '@angular/cdk/keycodes';

const COMMA = 188;

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit {
  public itemObj: ExerciseItem | null = null;
  // Enter, comma
  separatorKeysCodes = [ENTER, COMMA];

  constructor(private _storage: StorageService) {
    this.itemObj = new ExerciseItem();
  }

  ngOnInit() {
  }

  addType(event: MatChipInputEvent): void {
    let input = event.input;
    let value = event.value;

    // Add our person
    if ((value || '').trim()) {
      this.itemObj.TypeList.push(value.trim());
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  removeType(fruit: any): void {
    let index = this.itemObj.TypeList.indexOf(fruit);

    if (index >= 0) {
      this.itemObj.TypeList.splice(index, 1);
    }
  }  
}
