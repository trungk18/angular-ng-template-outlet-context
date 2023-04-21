import { Component } from '@angular/core';
import { NgIf, NgTemplateOutlet } from '@angular/common';

@Component({
  selector: 'app-ng-template',
  imports: [NgIf, NgTemplateOutlet],
  template: `
    <p>Hello</p>

    <ng-template>
      <p>World</p>
    </ng-template>

    <p>TinyConf</p>
    <hr>
    <p>Hello</p>

    <p *>World</p>

    <p>TinyConf</p>
    <hr>

    <p *ngIf="!isLoading; else loadingTmpl">
      Now you see me!
    </p>
    <ng-template #loadingTmpl>
      Loading...
    </ng-template>

    <hr />

    <div [ngTemplateOutlet]="confidential"></div>

    <ng-container [ngTemplateOutlet]="confidential"></ng-container>
    
    <ng-template [ngTemplateOutlet]="confidential"></ng-template>
    
    <ng-template #confidential>
      <p>It is confidential!</p>
    </ng-template>

    <hr>
    <div><ng-container *ngTemplateOutlet="greet"></ng-container></div>
    <div><ng-container *ngTemplateOutlet="eng; context: { $implicit: 'World'}"></ng-container></div>
    <div><ng-container *ngTemplateOutlet="fra; context: { name: 'Trung' }"></ng-container></div>

    <ng-template #greet><span>Hello</span></ng-template>
    <ng-template #eng let-name><span>Hello {{name}}!</span></ng-template>
    <ng-template #fra let-name="name"><span>Bonjour {{name}}!</span></ng-template>
  `,
  standalone: true,
})
export class NgTemplateComponent {
  isLoading = false;
}
