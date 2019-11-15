import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {DiffEditorModel} from "ngx-monaco-editor";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ide';
  form: FormGroup;
  editorOptions;
  code: string;

  originalModel: DiffEditorModel = {
    code: 'heLLo world!',
    language: 'text/plain'
  };

  modifiedModel: DiffEditorModel = {
    code: 'hello orlando!',
    language: 'text/plain'
  };

  run() {
    eval(this.code);
  }

  ngOnInit(): void {
    this.editorOptions = {theme: 'vs-dark', language: 'javascript'};
  }

  public setBasicOne() {
    this.code = 'console.log(\'here\');';
  }

  public setBasicTwo() {
    this.code = `
    const a = 1234;
    const b = 4321;
    const c = a + b;
    console.log(c);
    `;
  }
}
