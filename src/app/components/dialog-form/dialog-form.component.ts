import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { IndexComponent } from '../index/index.component';

@Component({
  selector: 'app-dialog-form',
  templateUrl: './dialog-form.component.html',
  styleUrls: ['./dialog-form.component.css']
})
export class DialogFormComponent implements OnInit {
   url = '(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?';
  //  regex = '/[^a-zA-Z, ]/';
   
  dialogForm = new FormGroup({
    taskName: new FormControl('',[Validators.required]),
    date: new FormControl(''),
    github: new FormControl('',[Validators.required, Validators.pattern(this.url)]),
    avatar: new FormControl('',[Validators.required, Validators.pattern(this.url)]),
    openlink: new FormControl('',[Validators.required, Validators.pattern(this.url)]),
    description: new FormControl(''),
  });
  constructor(private dialogref:MatDialogRef<IndexComponent>) { }

  ngOnInit(): void {
  }
  getErrorMessage(controlName:string){
    if(controlName=="github" && this.dialogForm.controls[controlName].hasError('required')){
      return "Url is required";
  }
  else if(controlName=="github" && this.dialogForm.controls[controlName].hasError('pattern')){
    return "url is invalid";
  }
  if(controlName=="avatar" && this.dialogForm.controls[controlName].hasError('required')){
    return "Url is required";
}
else if(controlName=="avatar" && this.dialogForm.controls[controlName].hasError('pattern')){
  return "url is invalid";
}
if(controlName=="openlink" && this.dialogForm.controls[controlName].hasError('required')){
  return "Url is required";
}
else if(controlName=="openlink" && this.dialogForm.controls[controlName].hasError('pattern')){
return "url is invalid";
}
if(controlName=="taskName" && this.dialogForm.controls[controlName].hasError('required')){
  return "Name is required";
}
  return false;
}
onSubmit(){
  console.log(this.dialogForm);
  if(this.dialogForm.valid){
    this.dialogref.close(this.dialogForm.value)
  }
}


}
