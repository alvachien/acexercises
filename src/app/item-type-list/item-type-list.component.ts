import { Component, OnInit } from '@angular/core';
import { StorageService } from '../storage.service';

@Component({
  selector: 'app-item-type-list',
  templateUrl: './item-type-list.component.html',
  styleUrls: ['./item-type-list.component.css']
})
export class ItemTypeListComponent implements OnInit {

  constructor(public _storage: StorageService) { }

  ngOnInit() {
    this._storage.fetchAllExerciseItemTypes().subscribe(x => {
    });
  }
}
