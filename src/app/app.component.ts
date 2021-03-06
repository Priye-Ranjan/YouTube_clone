import { Component } from '@angular/core';
import { sidebar } from './model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Youtube';
  data: Array<sidebar> = [
    {
      head: '',
      subhead: 'Home',
      image: 'fa fa-home',
    },
    {
      head: '',
      subhead: 'Trending',
      image: 'fa fa-fire',
    },
    {
      head: '',
      subhead: 'Subscriptions',
      image: 'fa fa-suitcase',
    },
    {
      head: '',
      subhead: 'Library',
      image: 'fa fa-book',
    },
    {
      head: '',
      subhead: 'History',
      image: 'fa fa-history',
    },
    {
      head: 'BEST OF YOUTUBE',
      subhead: '',
      image: '',
    },
    {
      head: '',
      subhead: 'Music',
      image: 'fa fa-music',
    },
    {
      head: '',
      subhead: 'Sports',
      image: 'fa fa-futbol-o',
    },
    {
      head: '',
      subhead: 'Gaming',
      image: 'fa fa-gamepad',
    },
    {
      head: '',
      subhead: 'Movies',
      image: 'fa fa-film',
    },
    {
      head: '',
      subhead: 'News',
      image: 'fa fa-newspaper-o',
    },
    {
      head: '',
      subhead: 'Live',
      image: 'fa fa-podcast',
    },
    {
      head: '',
      subhead: 'Fashion & Beauty',
      image: 'fa fa-shopping-bag',
    },
    {
      head: '',
      subhead: 'Learning',
      image: 'fa fa-lightbulb-o',
    },
    {
      head: '',
      subhead: 'Spotlight',
      image: 'fa fa-spotify',
    },
    {
      head: '',
      subhead: '360 Video',
      image: 'fa fa-video-camera',
    },
    {
      head: '',
      subhead: 'Browse Channels',
      image: 'fa fa-search',
    },
    {
      head: 'MORE FROM YOUTUBE',
      subhead: '',
      image: '',
    },
    {
      head: '',
      subhead: 'YouTube Premium',
      image: 'fa fa-youtube-play',
    },
    {
      head: '',
      subhead: 'Live',
      image: 'fa fa-signal',
    },
    {
      head: '',
      subhead: 'Settings',
      image: 'fa fa-wrench',
    },
    {
      head: '',
      subhead: 'Report History',
      image: 'fa fa-flag',
    },
    {
      head: '',
      subhead: 'Help',
      image: 'fa fa-support',
    },
    {
      head: '',
      subhead: 'Send Feedback',
      image: 'fa fa-commenting',
    },
  ];
  isMenuOpen = false;

  menuOpen() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
