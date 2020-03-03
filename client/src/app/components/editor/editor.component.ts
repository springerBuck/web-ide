import {Component, forwardRef, OnInit} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";

@Component({
	selector: 'app-editor',
	templateUrl: './editor.component.html',
	styleUrls: ['./editor.component.scss'],
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: forwardRef(() => EditorComponent),
			multi: true
		}
	]
})
export class EditorComponent implements ControlValueAccessor, OnInit {
	private _code: string;
	jsEditorOptions;
	private propagateChange: any;

	constructor() {
	}

	ngOnInit(): void {
		this.jsEditorOptions = {theme: 'hc-black', language: 'javascript'};
	}


	get code(): string {
		return this._code;
	}

	set code(value: string) {
		this._code = value;

		if (this.propagateChange) {
			this.propagateChange(this._code);
		}
	}

	registerOnChange(fn: any): void {
		this.propagateChange = fn;
	}

	registerOnTouched(fn: any): void {
	}

	setDisabledState(isDisabled: boolean): void {
	}

	writeValue(value: any): void {
		this.code = value;
	}
}
