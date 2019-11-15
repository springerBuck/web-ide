import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ide';
  form: FormGroup;

  get code() {
    return this.form.get('code');
  }

  run() {
    eval(this.code.value)
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      code: new FormControl('')
    });

  }

  public setBasicOne() {
    this.code.setValue('console.log(\'here\');')
  }

  public setBasicTwo() {
    this.code.setValue(`
    const a = 1234;
    const b = 4321;
    const c = a + b;
    console.log(c);
    `)
  }
}
