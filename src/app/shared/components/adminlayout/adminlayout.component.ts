import { Component } from '@angular/core';


import { AdminNavbarComponent } from '../adminnavbar/adminnavbar.component';
import { AdminSidebarComponent } from '../adminsidebar/adminsidebar.component';


@Component({
  selector: 'app-adminlayout',
  imports: [AdminNavbarComponent, AdminSidebarComponent],
  templateUrl: './adminlayout.component.html',
  styleUrl: './adminlayout.component.css'
})
export class AdminLayoutComponent {

}
