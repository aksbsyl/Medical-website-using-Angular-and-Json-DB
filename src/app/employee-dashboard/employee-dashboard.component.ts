import { Component, OnInit } from '@angular/core';
import{FormBuilder, FormGroup} from '@angular/forms';
import { ApiService } from '../shared/api.service';
import { EmployeeModel } from './employee-dashboard.model';

@Component({
  selector: 'app-employee-dashboard',
  templateUrl: './employee-dashboard.component.html',
  styleUrls: ['./employee-dashboard.component.css']
})
export class EmployeeDashboardComponent implements OnInit {

  formValue !: FormGroup;
  userModelObj: EmployeeModel= new EmployeeModel();
  userData !: any;
  showAdd !:boolean;
  showUpdate !: boolean;
  constructor(private formbuilder: FormBuilder, private api: ApiService){}
  
  ngOnInit(): void {
    this.formValue = this.formbuilder.group({
      firstName: [''],
      lastName: [''],
      email: [''],
      mobile: [''],
      testResults: ['']
    })
    this.getAllUser();
}

clickAddUser(){
  this.formValue.reset();
  this.showAdd = true;
  this.showUpdate = false;
}
postUserDetails(){
  // this.userModelObj.id= this.formValue.value.id;
  this.userModelObj.firstName= this.formValue.value.firstName;
  this.userModelObj.lastName= this.formValue.value.lastName;
  this.userModelObj.email= this.formValue.value.email;
  this.userModelObj.mobile= this.formValue.value.mobile;
  this.userModelObj.testResults= this.formValue.value.testResults;

  this.api.postUser(this.userModelObj)
  .subscribe(res=>{
    console.log(res);
    alert("User Added successfully");
    let ref=document.getElementById('cancel')
    ref?.click()
    this.formValue.reset();
    this.getAllUser();
  },
  err=>{
    alert("Something went wrong");
  })

}

getAllUser(){
  this.api.getUser()
  .subscribe(res=>{
    this.userData = res;
  })
}
deleteTheUser(row : any){
  this.api.deleteUser(row.id)
  .subscribe(res=>{
    alert("Employee Deleted.");
    this.getAllUser();
  })
}
onEdit(row: any){
  this.showAdd = false;
  this.showUpdate = true;
  this.userModelObj.id = row.id;
  this.formValue.controls['firstName'].setValue(row.firstName);
  this.formValue.controls['lastName'].setValue(row.lastName);
  this.formValue.controls['email'].setValue(row.email);
  this.formValue.controls['mobile'].setValue(row.mobile);
  this.formValue.controls['testResults'].setValue(row.testResults);
}
updateUser(){
  
  this.userModelObj.firstName= this.formValue.value.firstName;
  this.userModelObj.lastName= this.formValue.value.lastName;
  this.userModelObj.email= this.formValue.value.email;
  this.userModelObj.mobile= this.formValue.value.mobile;
  this.userModelObj.testResults= this.formValue.value.testResults;
  this.api.updateUser(this.userModelObj, this.userModelObj.id)
  .subscribe(res=>{
    alert("Updated successfully");
  })
  let ref=document.getElementById('cancel')
    ref?.click()
    this.formValue.reset();
    this.getAllUser();
}

}
