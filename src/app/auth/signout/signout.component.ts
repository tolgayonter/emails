import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signout',
  templateUrl: './signout.component.html',
  styleUrls: ['./signout.component.css'],
})
export class SignoutComponent {
  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit() {
    this.auth.signout().subscribe(() => {
      this.router.navigateByUrl('/');
    });
  }
}
