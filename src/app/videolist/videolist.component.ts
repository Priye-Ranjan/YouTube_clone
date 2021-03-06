import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VideosService } from '../videos.service';

@Component({
  selector: 'app-videolist',
  templateUrl: './videolist.component.html',
  styleUrls: ['./videolist.component.css'],
})
export class VideolistComponent implements OnInit {
  dataListing: any;
  constructor(
    private videoData: VideosService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    console.log('Youtube API works');
    this.videoData
      .Search(this.route.snapshot.params.query)
      .subscribe((data) => {
        this.dataListing = data.items; //Added data.items
        console.log(this.dataListing);
      });
    // this.videoData.getTrending().subscribe((data) => {
    //   this.dataListing = data.items; //Added data.items
    //   console.log(this.dataListing);
    // });
  }
}
