import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  onLoadServer(numServer: number) {
    this.router.navigate(['/servers', numServer, 'edit'], { queryParams: { allowEdit: '8' }, fragment: 'loading' });
  }
}
