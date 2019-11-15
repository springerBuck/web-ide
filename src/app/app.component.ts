import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ide';
  jsEditorOptions;
  htmlEditorOptions;
  code: string;
  markup: string;
  public menuOpen: boolean = false;

  run() {
    const frame = document.querySelector<HTMLIFrameElement>('#env');
    frame.srcdoc = `
    <html lang="en">
      <head>
      <title>some title</title>
      </head>
      <body>
        <div id="main"></div>
      </body>
    </html>
    `;
    const script = frame.contentDocument.createElement('script');
    script.setAttribute('type', 'application/javascript');
    script.textContent = this.code;
    frame.contentDocument.body.appendChild(script);
    console.log(frame.contentDocument.body);
  }

  ngOnInit(): void {
    this.jsEditorOptions = {theme: 'vs-dark', language: 'javascript'};
    this.htmlEditorOptions = {theme: 'vs-dark', language: 'html'};
    this.setBasicThree()
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

  public setBasicThree() {
    this.code = `
      var div = document.createElement("div");
      div.style.width = "100px";
      div.style.height = "100px";
      div.style.background = "red";
      div.style.color = "white";
      div.innerHTML = "Hello";
      
      document.getElementById("main").appendChild(div);`;
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
}
