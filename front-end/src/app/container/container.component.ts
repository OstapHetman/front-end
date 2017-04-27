import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import {Popup} from 'ng2-opd-popup';
import {FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css'],
  
})

export class ContainerComponent implements OnInit {
 

@ViewChild('popup1') popup1: Popup;
@ViewChild('popup2') popup2: Popup;

ClickButton(){
  this.popup1.options = {
    header: "Email Sheduler",
    color: "#5cb85c", // red, blue.... 
    widthProsentage: 40, // The with of the popou measured by browser width 
    animationDuration: 1, // in seconds, 0 = no animation 
    showButtons: true, // You can hide this in case you want to use custom buttons 
    confirmBtnContent: "OK", // The text on your confirm button 
    cancleBtnContent: "Cancel", // the text on your cancel button 
    confirmBtnClass: "btn btn-default", // your class for styling the confirm button 
    cancleBtnClass: "btn btn-default", // you class for styling the cancel button 
    animation: "fadeInDown" // 'fadeInLeft', 'fadeInRight', 'fadeInUp', 'bounceIn','bounceInDown'

};
    this.popup1.show(this.popup1.options);
  }
  ClickAnotherButton(){
  this.popup2.options = {
    header: "Servers Configurators",
    color: "#5cb85c", // red, blue.... 
    widthProsentage: 40, // The with of the popou measured by browser width 
    animationDuration: 1, // in seconds, 0 = no animation 
    showButtons: true, // You can hide this in case you want to use custom buttons 
    confirmBtnContent: "OK", // The text on your confirm button 
    cancleBtnContent: "Cancel", // the text on your cancel button 
    confirmBtnClass: "btn btn-default", // your class for styling the confirm button 
    cancleBtnClass: "btn btn-default", // you class for styling the cancel button 
    animation: "fadeInDown" // 'fadeInLeft', 'fadeInRight', 'fadeInUp', 'bounceIn','bounceInDown' 
};
    this.popup2.show(this.popup2.options);
  }

YourConfirmEvent(){
  alert('You cliked confirm');
}
 
YourCancelEvent(){
  alert('You cliked cancel');
}
//VALIDATION
 registerForm: FormGroup;
  form: FormGroup;
  constructor(private fb: FormBuilder) {}
  ngOnInit() {
    this.form = this.fb.group({
      name: ['', Validators.pattern('[a-zA-Z-0-9- ]+')],
      description: ['', Validators.pattern('[A-Z-0-9 .,!?:]+')]
    });
  }
     
  }
