import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-videocard',
  templateUrl: './videocard.component.html',
  styleUrls: ['./videocard.component.css'],
})
export class VideocardComponent implements OnInit {
  @Input() youData: any = {};
  constructor() {}

  ngOnInit(): void {}
}
