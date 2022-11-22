import {
  Component,
  ElementRef,
  OnInit,
  VERSION,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  name = 'Angular ' + VERSION.major;

  @ViewChild('buttonTest') buttonTest: ElementRef;

  ngOnInit() {}

  setFocus() {
    this.buttonTest.nativeElement.focus();
  }
}
