import { ToastrModule } from 'ngx-toastr';
import { User } from './../../models/user.model';
import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2'
declare var particlesJS: any;
declare var $: any;
//particlesJS.load('particles-js', 'assets/data/particles.json', function() { console.log('callback - particles.js config loaded'); });
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users: User[] = [];
  usersAll: User[] = [];
  limit: number = 50;
  pagenum: number = 0;
  page: number = 1;
  pageSize: number = 10;
  loading: boolean = false;
  pageOfItems: Array<any>;
  message: string = '';
  color: string = '';
  moreData: boolean = true;
  constructor(private userService: UserService, private toaster: ToastrModule) {
  }

  ngOnInit(): void {
    this.getUsers();

    particlesJS.load('particles-js', 'assets/data/particles.json', function () { console.log('callback - particles.js config loaded'); });
  }

  getUsers() {
    this.loading = true;
    let data = {
      "limit": this.limit,
      "page": this.pagenum
    }
    this.userService.getUsers(data).subscribe((data) => {
      console.log(data);
      this.users = data.data;
      this.usersAll = data.data
      //this.usersAll=this.usersAll+data.data
      this.loading = false
    })
  }
  search(event: any) {
    let newData = this.usersAll.filter(c => (c.firstName.toLowerCase() + " " + c.lastName.toLowerCase()).includes(event.target.value.toLowerCase()))
    this.users = [];
    this.users = [...newData]

    if (this.users.length === 0) {
      this.message = 'There is no data to display'
      this.color = 'text-danger'
    }
  }
  click(event: any) {
    console.log(event.target)
    let num: Number = $(event.target).text().replace(/\D/g, '')
    let divide = (this.usersAll.length / this.pageSize)
    if (Math.ceil(divide) == num) {
      this.more();
    }
    console.log();
  }

  more() {
    this.pagenum = this.pagenum + 1;
    this.loading = true;
    let data = {
      "limit": this.limit,
      "page": (this.pagenum)
    }
    console.log(data)
    this.userService.getUsers(data).subscribe((data) => {
      console.log(data.data)
      if (data.data.length == 0) {
        Swal.fire("", "You have reached the end", "warning");
        this.moreData = false
      }
      data.data.forEach(element => {
        this.usersAll.push(element)
      });

      this.loading = false
    })
  }
}
