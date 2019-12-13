import {Component, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material";
import {GitHubLoginComponent} from "./components/git-hub-login/git-hub-login.component";

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
	title = 'ide';
	code: string;
	public menuOpen: boolean = false;
	private clientId = '937ae5fe191fc6bf1fb2';
	gitHubSignInUrl = `https://github.com/login/oauth/authorize?scope=user:email&client_id=${this.clientId}`;

	constructor(public dialog: MatDialog){}

	ngOnInit(): void {
		this.setBasicThree()
	}

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
		<script type="application/javascript">
				${this.code}
		</script>
    </html>
    `;
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

	openDialog(): void {
		const dialogRef = this.dialog.open(GitHubLoginComponent, {
			// width: '250px',
			data: {name: 'this.name', animal: 'this.animal'}
		});

		dialogRef.afterClosed().subscribe(result => {
			console.log('The dialog was closed', result);
			// this.animal = result;
		});
	}
}
