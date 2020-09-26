import { Component } from '@angular/core';
import { FireService } from './fire.service'

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'catalogue';
	public searchText = "";
	public courses = {
		"FrontEnd" : {
			technologies : ["Html","Css","Bootstrap","Javascript","Jquery","Angular","Raect Js", "Vue Js"]
		},
		"Backend" : {
			technologies : ["Php","Java","Python"]
		},
		"Database" : {
			technologies : ["Sql","MySql","MongoDb"]
		}
	}

	FrontEndLanguage: string = "";
	DatabaseLanguage: string = "";
	BackEndLanguage: string = "";
	message: string = "";

	constructor(private fireService: FireService) { }

	backEndRecord() {
		let Record = {};
		Record['BackEnd'] = this.BackEndLanguage;
		this.fireService.Developer_programes(Record).then(res => {
			this.BackEndLanguage = "";
			console.log(res);
			this.message = "Record Saved"
		}).catch(error => {
			console.log(error);
		})
	}
	databaseRecord() {
		let Record = {};
		Record['database'] = this.DatabaseLanguage;
		this.fireService.Developer_programes(Record).then(res => {
			this.DatabaseLanguage = "";
			console.log(res);
			this.message = "Record saved"
		}).catch(error => {
			console.log(error);
		})
	}
	frontEndRecord() {
		let Record = {};
		Record['frontEnd'] = this.FrontEndLanguage;
		this.fireService.Developer_programes(Record).then(res => {
			this.FrontEndLanguage= "";
			console.log(res);
			this.message = "Record saved"
		}).catch(error => {
			console.log(error);
		})
	}
}


