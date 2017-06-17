import {Injectable} from "@angular/core";
import {CanDeactivate} from "@angular/router";

@Injectable()
export class LeaveBlocker implements CanDeactivate<any> {

    canDeactivate() {
        return window.confirm('아직 안끝났는데 나갈꺼니?');
    }

}