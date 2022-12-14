import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  
  navigateToHome() {
    localStorage.setItem('lastEndpoint', '/home');
    this.router.navigate(['/home']);
  }

  navigateToSobre() {
    localStorage.setItem('lastEndpoint', '/sobre');
    this.router.navigate(['/sobre']);
  }

  navigateToContato() {
    localStorage.setItem('lastEndpoint', '/contato');
    this.router.navigate(['/contato']);
  }

}
