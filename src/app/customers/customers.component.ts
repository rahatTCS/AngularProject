import { Component } from '@angular/core';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent  {

message: string="Customer Component Rendering...";

projects: string[] = ["Dashboard","E-Commerce", "Admin Portal", "Erp Tally"]

customerList: any = [
  { custCode: 101, custName: "King", custAge: 23, custAmount: 34000 },
  { custCode: 102, custName: "Kochhar", custAge: 34, custAmount: 33000 },
  { custCode: 103, custName: "Shreya", custAge: 45, custAmount: 24000 },
  { custCode: 104, custName: "Kims", custAge: 22, custAmount: 30000 },
  { custCode: 105, custName: "James", custAge: 45, custAmount: 34000 }
]
loggedIn: boolean = true;


  custObj: any = {

    CustomerCode:1001,
    CustomerName: "Rahat Tashin",
    CustomerAmount: 12000

  }

  userObj: any = {
    username: "",
    password: ""

  }

  doLogin(): void {
// alert('You are trying to login...!!');

if(this.userObj.username=="Rahat" && this.userObj.password=="123456")
{
  alert('Success...!!');
}
else{
  alert('Failed');
}

  }

}
