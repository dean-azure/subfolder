import { Component, OnInit } from '@angular/core';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'hello-world-app';

  ngOnInit(): void {
    if (environment.production) {
      this.title = "THIS IS THE PRODUCTION HELLO WORLD APP";
    } else {
      this.title = "THIS IS THE NON-PRODUCTION HELLO WORLD APP"
    }
  }

}
