import { Component, Input, OnInit } from '@angular/core';
import { sidebar } from '../model';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  @Input('sideObj') sideObj: Partial<sidebar> = {};
  constructor() {}

  ngOnInit(): void {}
}
