import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    InputTextModule,
    BrowserModule,
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    InputTextModule,
    BrowserModule,
  ],
})
export class SharedModule {}
