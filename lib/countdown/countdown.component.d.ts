import { EventEmitter } from '@angular/core';
export declare class CountdownComponent {
    units: any;
    end: any;
    displayString: String;
    text: any;
    divider: any;
    showZero: Boolean;
    reached: EventEmitter<Date>;
    display: any;
    displayNumbers: any;
    wasReached: Boolean;
    constructor();
    _displayString(): void;
}
