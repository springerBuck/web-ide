import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {EditorComponent} from './components/editor/editor.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
	MatButtonModule,
	MatCardModule, MatDialogModule,
	MatDividerModule,
	MatGridListModule, MatIconModule,
	MatInputModule, MatListModule, MatMenuModule, MatSidenavModule,
	MatToolbarModule, MatTreeModule
} from "@angular/material";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MonacoEditorModule, NgxMonacoEditorConfig} from "ngx-monaco-editor";
import {GitHubLoginComponent} from './components/git-hub-login/git-hub-login.component';
import {HttpClientModule} from "@angular/common/http";

const monacoConfig: NgxMonacoEditorConfig = {
	defaultOptions: {
		scrollBeyondLastLine: false,
		autoClosingBrackets: true,
		autoIndent: true,
		automaticLayout: true, // might give a performance hit
		codeLens: true,
		contextmenu: true,
		dragAndDrop: true,
		formatOnPaste: true,
		formatOnType: true,
		minimap: {enabled: false}
	},
	onMonacoLoad: () => {
		console.log((<any>window).monaco);
	}
};

@NgModule({
	declarations: [
		AppComponent,
		EditorComponent,
		GitHubLoginComponent
	],
	entryComponents: [GitHubLoginComponent],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		HttpClientModule,
		MatGridListModule,
		MatButtonModule,
		MatInputModule,
		ReactiveFormsModule,
		MonacoEditorModule.forRoot(monacoConfig),
		FormsModule,
		MatToolbarModule,
		MatCardModule,
		MatDividerModule,
		MatIconModule,
		MatMenuModule,
		MatSidenavModule,
		MatTreeModule,
		MatDialogModule,
		MatListModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {
}
