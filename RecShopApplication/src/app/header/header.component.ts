import {Component,EventEmitter, Output} from '@angular/core';

@Component({

    selector:'app-header',
    templateUrl:'./header.component.html'
})
export class HeaderComponent{

    @Output() navigatePage=new EventEmitter<string>();
    showPage(feature:string)
    {
        this.navigatePage.emit(feature)
    }
    collapsed = true;
}