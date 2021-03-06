import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VideosService } from '../videos.service';

@Component({
  selector: 'app-videoplayer',
  templateUrl: './videoplayer.component.html',
  styleUrls: ['./videoplayer.component.css'],
})
export class VideoplayerComponent implements OnInit {
  videoObj: any = [];
  videocode: string = '';
  constructor(
    private videoData: VideosService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // console.log(this.route.snapshot.params.Id);
    this.videocode = this.route.snapshot.params.Id;
    this.videoData
      .getVideoById(this.route.snapshot.params.Id)
      .subscribe((data) => {
        this.videoObj = data;
      });
    console.log(this.videoData);
  }
}
