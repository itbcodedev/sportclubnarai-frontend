import { Component } from '@angular/core';

import { MemberNavbarComponent } from '../membernavbar/membernavbar.component';
import { MemberSidebarComponent } from '../membersidebar/sidebar.component';

@Component({
  selector: 'app-layout',
  imports: [MemberNavbarComponent, MemberSidebarComponent],
  templateUrl: './memberlayout.component.html',
  styleUrl: './memberlayout.component.css'
})
export class MemberLayoutComponent {

}
