import { Component, OnInit } from '@angular/core';

import { DataService } from 'app/services/data.service';

import { AppConfig } from "config/config";
import { ProfileService } from '../../services/profile.service';
import { Noticeboard } from 'app/schema/noticeboard';

@Component({
	selector: 'profile-noticeboard',
	templateUrl: 'profile-noticeboard.component.html',
	styleUrls: ['profile-noticeboard.component.scss']
})
export class ProfileNoticeboardComponent implements OnInit {

	noticeBoard: Noticeboard;

	infoWindowClosed: boolean;

	edeskyId:number;

	constructor(private profileService: ProfileService, private dataService: DataService) {
	}

	ngOnInit() {
		this.profileService.profile.subscribe(profile => {
			console.log(profile);
			this.loadData(profile.id)
			this.edeskyId = profile.edesky;
		});
	}

	async loadData(profileId:number){
		this.noticeBoard = await this.dataService.getProfileNoticeBoard(profileId);
	}

}