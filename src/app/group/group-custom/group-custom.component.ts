import { Component, OnInit } from '@angular/core';

import { Location } from '@angular/common';
import { GroupCustomService } from '../../service/group-custom.service';

@Component({
    moduleId: module.id,
    selector: 'group-custom',
    templateUrl: 'group-custom.component.html',
    styleUrls: ['group-custom.component.css']
})
export class GroupCustomComponent implements OnInit {


    constructor(
        private groupCustomService: GroupCustomService,
        private location: Location
      ) { }

    ngOnInit() {
    }

    goBack() : void {
        this.location.back();
    }

}
