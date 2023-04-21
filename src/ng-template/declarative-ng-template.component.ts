import {
  AfterViewInit,
  Component,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';

@Component({
  selector: 'app-declarative-ng-template',
  standalone: true,
  template: `
    <div #container></div>
    <ng-template #confidential>
      <p>It is confidential!</p>
    </ng-template>
  `,
})
export class DeclarativeNgTemplateComponent implements AfterViewInit {
  @ViewChild('container', { read: ViewContainerRef })
  container: ViewContainerRef;

  @ViewChild('confidential') template: TemplateRef<any>;

  ngAfterViewInit() {
    this.container.createEmbeddedView(this.template);
  }
}
