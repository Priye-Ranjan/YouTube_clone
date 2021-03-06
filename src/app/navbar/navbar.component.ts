import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  getQuery: any;
  constructor(private route: Router, private form: FormBuilder) {}

  ngOnInit(): void {
    this.getQuery = this.form.group({
      name: this.form.control(''),
    });
    //  console.log(this.getQuery.value.name);
  }

  submit() {
    this.route
      .navigateByUrl('/', { skipLocationChange: true })
      .then(() =>
        this.route.navigate(['videolist/', this.getQuery.value.name])
      );
  }
}
