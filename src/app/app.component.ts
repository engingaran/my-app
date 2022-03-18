import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
selector: 'app-root',
templateUrl: './app.component.html',
styleUrls: ['./app.component.css']
})
export class AppComponent{
       title = 'my-app';
       myForm: FormGroup;
       dataSorce:any
       constructor(formBuilder: FormBuilder,    private _http: HttpClient) {
       this.myForm = new FormGroup({
       tc: new FormControl(null, [Validators.required,Validators.minLength(11)]),
       name: new FormControl(null, [Validators.required]),
       surname: new FormControl(null, [Validators.required]),
       pob: new FormControl(null, [Validators.required]),
       mail: new FormControl(null, [Validators.required]),
       tel: new FormControl(null, [Validators.required,Validators.minLength(11)]),
       });}
        
      ngOnInit(): void {
             this.getData()
             this.myForm.valueChanges.subscribe((y)=>{})
       
       }
       getData():void{
       this._http.get('http://localhost:8080/api/tutorials/published').subscribe((res)=>{
              this.dataSorce=res
              this.dataSorce=[...this.dataSorce]
              console.log(this.dataSorce);
              
       })
}
      onSubmit(){
       const data={...this.myForm.value}
       this._http.post('http://localhost:8080/api/tutorials/',data).subscribe((res)=>{console.log(res);})}
      }