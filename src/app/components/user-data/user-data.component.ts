import { userData } from './../../models/userData.model';
import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
declare var particlesJS: any;
@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.scss']
})
export class UserDataComponent implements OnInit {

  userId:string=''
  userData:userData;
  loading:boolean=false;
  constructor(private route: ActivatedRoute,private userService: UserService) { 
    this.userId = this.route.snapshot.params.id
  }
  ngOnInit(): void {
    this.loading=true;
    particlesJS.load('particles-js', 'assets/data/particles.json', function () { console.log('callback - particles.js config loaded'); });
    this.userService.getUserData(this.userId).subscribe((data)=>{
      this.userData=data;
      console.log(this.userData)
      this.loading=false;
    });
  }

}
