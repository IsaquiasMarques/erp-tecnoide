import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-create-colaborator',
  imports: [ RouterLink, FormsModule, ReactiveFormsModule, NgClass ],
  templateUrl: './create-colaborator.component.html',
  styleUrl: './create-colaborator.component.css'
})
export class CreateColaboratorComponent implements OnInit {
  createColaboratorFormGroup!: FormGroup;

  ngOnInit(): void {
    this.createColaboratorFormGroup = new FormGroup({
      'email': new FormControl('', [ Validators.email, Validators.required ])
    })
  }
}
