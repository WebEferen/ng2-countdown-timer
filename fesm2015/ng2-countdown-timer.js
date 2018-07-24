import { Component, Input, Output, EventEmitter, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class CountdownComponent {
    constructor() {
        this.displayString = '';
        this.showZero = false;
        this.reached = new EventEmitter();
        this.display = [];
        this.displayNumbers = [];
        this.wasReached = false;
        setInterval(() => this._displayString(), 100);
    }
    /**
     * @return {?}
     */
    _displayString() {
        if (this.wasReached)
            return;
        if (typeof this.units === 'string') {
            this.units = this.units.split('|');
        }
        /** @type {?} */
        let givenDate = new Date(this.end);
        /** @type {?} */
        let now = new Date();
        /** @type {?} */
        let dateDifference = givenDate - now;
        if ((dateDifference < 100 && dateDifference > 0) || dateDifference < 0 && !this.wasReached) {
            this.wasReached = true;
            this.reached.next(now);
        }
        /** @type {?} */
        let lastUnit = this.units[this.units.length - 1];
        /** @type {?} */
        let unitConstantForMillisecs = {
            year: (((1000 * 60 * 60 * 24 * 7) * 4) * 12),
            month: ((1000 * 60 * 60 * 24 * 7) * 4),
            weeks: (1000 * 60 * 60 * 24 * 7),
            days: (1000 * 60 * 60 * 24),
            hours: (1000 * 60 * 60),
            minutes: (1000 * 60),
            seconds: 1000
        };
        /** @type {?} */
        let unitsLeft = {};
        /** @type {?} */
        let returnText = '';
        /** @type {?} */
        let returnNumbers = '';
        /** @type {?} */
        let totalMillisecsLeft = dateDifference;
        /** @type {?} */
        let i;
        /** @type {?} */
        let unit;
        for (i in this.units) {
            if (this.units.hasOwnProperty(i)) {
                unit = this.units[i].trim();
                if (unitConstantForMillisecs[unit.toLowerCase()] === false) {
                    //$interval.cancel(countDownInterval);
                    throw new Error('Cannot repeat unit: ' + unit);
                }
                if (unitConstantForMillisecs.hasOwnProperty(unit.toLowerCase()) === false) {
                    throw new Error('Unit: ' + unit + ' is not supported. Please use following units: year, month, weeks, days, hours, minutes, seconds, milliseconds');
                }
                // If it was reached, everything is zero
                unitsLeft[unit] = (this.wasReached) ? 0 : totalMillisecsLeft / unitConstantForMillisecs[unit.toLowerCase()];
                if (lastUnit === unit) {
                    unitsLeft[unit] = Math.ceil(unitsLeft[unit]);
                }
                else {
                    unitsLeft[unit] = Math.floor(unitsLeft[unit]);
                }
                totalMillisecsLeft -= unitsLeft[unit] * unitConstantForMillisecs[unit.toLowerCase()];
                unitConstantForMillisecs[unit.toLowerCase()] = false;
                // If it's less than 0, round to 0
                unitsLeft[unit] = (unitsLeft[unit] > 0) ? unitsLeft[unit] : 0;
                returnNumbers += ' ' + unitsLeft[unit] + ' | ';
                returnText += ' ' + unit;
            }
        }
        if (this.text === null || !this.text) {
            this.text = {
                Year: 'Year',
                Month: 'Month',
                Weeks: 'Weeks',
                Days: 'Days',
                Hours: 'Hours',
                Minutes: 'Minutes',
                Seconds: 'Seconds',
                MilliSeconds: 'Milliseconds'
            };
        }
        this.displayString = returnText
            .replace('Year', this.text.Year + ' | ')
            .replace('Month', this.text.Month + ' | ')
            .replace('Weeks', this.text.Weeks + ' | ')
            .replace('Days', this.text.Days + ' | ')
            .replace('Hours', this.text.Hours + ' | ')
            .replace('Minutes', this.text.Minutes + ' | ')
            .replace('Seconds', this.text.Seconds);
        this.displayNumbers = returnNumbers.split('|');
        this.display = this.displayString.split('|');
    }
}
CountdownComponent.decorators = [
    { type: Component, args: [{
                selector: 'countdown',
                template: `<div class="countdown">
  <div *ngFor="let time of display; let i = index" class="measurements {{time}}">
    <p class="measurements-number">
      {{ (showZero && displayNumbers[i] < 10) ? '0' + displayNumbers[i].trim() : displayNumbers[i]}}
    </p>
    <span *ngIf="display[i+1]" class="divider"> {{divider}} </span>
    <p class="measurements-text">
      {{time}}
    </p>
  </div>
</div>
<ng-content></ng-content>`,
                styles: [`.countdown{display:flex;align-items:center;justify-content:center;align-content:center;font-family:"Helvetica Neue",Helvetica,Arial,sans-serif}.countdown .measurements{flex:.1}.countdown .measurements .divider{float:right}`]
            },] },
];
/** @nocollapse */
CountdownComponent.ctorParameters = () => [];
CountdownComponent.propDecorators = {
    units: [{ type: Input }],
    end: [{ type: Input }],
    displayString: [{ type: Input }],
    text: [{ type: Input }],
    divider: [{ type: Input }],
    showZero: [{ type: Input }],
    reached: [{ type: Output }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class CountdownModule {
}
CountdownModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [
                    CountdownComponent
                ],
                exports: [
                    CountdownComponent,
                ]
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

export { CountdownComponent, CountdownModule };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmcyLWNvdW50ZG93bi10aW1lci5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vbmcyLWNvdW50ZG93bi10aW1lci9saWIvY291bnRkb3duL2NvdW50ZG93bi5jb21wb25lbnQudHMiLCJuZzovL25nMi1jb3VudGRvd24tdGltZXIvbGliL2NvdW50ZG93bi5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnY291bnRkb3duJyxcclxuICB0ZW1wbGF0ZTogYDxkaXYgY2xhc3M9XCJjb3VudGRvd25cIj5cclxuICA8ZGl2ICpuZ0Zvcj1cImxldCB0aW1lIG9mIGRpc3BsYXk7IGxldCBpID0gaW5kZXhcIiBjbGFzcz1cIm1lYXN1cmVtZW50cyB7e3RpbWV9fVwiPlxyXG4gICAgPHAgY2xhc3M9XCJtZWFzdXJlbWVudHMtbnVtYmVyXCI+XHJcbiAgICAgIHt7IChzaG93WmVybyAmJiBkaXNwbGF5TnVtYmVyc1tpXSA8IDEwKSA/ICcwJyArIGRpc3BsYXlOdW1iZXJzW2ldLnRyaW0oKSA6IGRpc3BsYXlOdW1iZXJzW2ldfX1cclxuICAgIDwvcD5cclxuICAgIDxzcGFuICpuZ0lmPVwiZGlzcGxheVtpKzFdXCIgY2xhc3M9XCJkaXZpZGVyXCI+IHt7ZGl2aWRlcn19IDwvc3Bhbj5cclxuICAgIDxwIGNsYXNzPVwibWVhc3VyZW1lbnRzLXRleHRcIj5cclxuICAgICAge3t0aW1lfX1cclxuICAgIDwvcD5cclxuICA8L2Rpdj5cclxuPC9kaXY+XHJcbjxuZy1jb250ZW50PjwvbmctY29udGVudD5gLFxyXG4gIHN0eWxlczogW2AuY291bnRkb3due2Rpc3BsYXk6ZmxleDthbGlnbi1pdGVtczpjZW50ZXI7anVzdGlmeS1jb250ZW50OmNlbnRlcjthbGlnbi1jb250ZW50OmNlbnRlcjtmb250LWZhbWlseTpcIkhlbHZldGljYSBOZXVlXCIsSGVsdmV0aWNhLEFyaWFsLHNhbnMtc2VyaWZ9LmNvdW50ZG93biAubWVhc3VyZW1lbnRze2ZsZXg6LjF9LmNvdW50ZG93biAubWVhc3VyZW1lbnRzIC5kaXZpZGVye2Zsb2F0OnJpZ2h0fWBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDb3VudGRvd25Db21wb25lbnQge1xyXG5cclxuICBASW5wdXQoKSB1bml0czogYW55O1xyXG4gIEBJbnB1dCgpIGVuZDogYW55O1xyXG4gIEBJbnB1dCgpIGRpc3BsYXlTdHJpbmc6IFN0cmluZyA9ICcnO1xyXG4gIEBJbnB1dCgpIHRleHQ6IGFueTtcclxuICBASW5wdXQoKSBkaXZpZGVyOiBhbnk7XHJcbiAgQElucHV0KCkgc2hvd1plcm86IEJvb2xlYW4gPSBmYWxzZTtcclxuICBAT3V0cHV0KCkgcmVhY2hlZDogRXZlbnRFbWl0dGVyPERhdGU+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIGRpc3BsYXk6IGFueSA9IFtdO1xyXG4gIGRpc3BsYXlOdW1iZXJzOiBhbnkgPSBbXTtcclxuICB3YXNSZWFjaGVkOiBCb29sZWFuID0gZmFsc2U7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc2V0SW50ZXJ2YWwoKCkgPT4gdGhpcy5fZGlzcGxheVN0cmluZygpLCAxMDApO1xyXG4gIH1cclxuXHJcbiAgX2Rpc3BsYXlTdHJpbmcoKSB7XHJcbiAgICBpZiAodGhpcy53YXNSZWFjaGVkKVxyXG4gICAgICByZXR1cm47XHJcblxyXG4gICAgaWYgKHR5cGVvZiB0aGlzLnVuaXRzID09PSAnc3RyaW5nJykge1xyXG4gICAgICB0aGlzLnVuaXRzID0gdGhpcy51bml0cy5zcGxpdCgnfCcpO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCBnaXZlbkRhdGU6IGFueSA9IG5ldyBEYXRlKHRoaXMuZW5kKTtcclxuICAgIGxldCBub3c6IGFueSA9IG5ldyBEYXRlKCk7XHJcbiAgICBsZXQgZGF0ZURpZmZlcmVuY2U6IGFueSA9IGdpdmVuRGF0ZSAtIG5vdztcclxuXHJcbiAgICBpZiAoKGRhdGVEaWZmZXJlbmNlIDwgMTAwICYmIGRhdGVEaWZmZXJlbmNlID4gMCkgfHwgZGF0ZURpZmZlcmVuY2UgPCAwICYmICF0aGlzLndhc1JlYWNoZWQpIHtcclxuICAgICAgdGhpcy53YXNSZWFjaGVkID0gdHJ1ZTtcclxuICAgICAgdGhpcy5yZWFjaGVkLm5leHQobm93KTtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgbGFzdFVuaXQgPSB0aGlzLnVuaXRzW3RoaXMudW5pdHMubGVuZ3RoIC0gMV0sXHJcbiAgICAgIHVuaXRDb25zdGFudEZvck1pbGxpc2VjcyA9IHtcclxuICAgICAgICB5ZWFyOiAoKCgxMDAwICogNjAgKiA2MCAqIDI0ICogNykgKiA0KSAqIDEyKSxcclxuICAgICAgICBtb250aDogKCgxMDAwICogNjAgKiA2MCAqIDI0ICogNykgKiA0KSxcclxuICAgICAgICB3ZWVrczogKDEwMDAgKiA2MCAqIDYwICogMjQgKiA3KSxcclxuICAgICAgICBkYXlzOiAoMTAwMCAqIDYwICogNjAgKiAyNCksXHJcbiAgICAgICAgaG91cnM6ICgxMDAwICogNjAgKiA2MCksXHJcbiAgICAgICAgbWludXRlczogKDEwMDAgKiA2MCksXHJcbiAgICAgICAgc2Vjb25kczogMTAwMFxyXG4gICAgICB9LFxyXG4gICAgICB1bml0c0xlZnQgPSB7fSxcclxuICAgICAgcmV0dXJuVGV4dCA9ICcnLFxyXG4gICAgICByZXR1cm5OdW1iZXJzID0gJycsXHJcbiAgICAgIHRvdGFsTWlsbGlzZWNzTGVmdCA9IGRhdGVEaWZmZXJlbmNlLFxyXG4gICAgICBpLFxyXG4gICAgICB1bml0OiBhbnk7XHJcblxyXG4gICAgZm9yIChpIGluIHRoaXMudW5pdHMpIHtcclxuICAgICAgaWYgKHRoaXMudW5pdHMuaGFzT3duUHJvcGVydHkoaSkpIHtcclxuXHJcbiAgICAgICAgdW5pdCA9IHRoaXMudW5pdHNbaV0udHJpbSgpO1xyXG4gICAgICAgIGlmICh1bml0Q29uc3RhbnRGb3JNaWxsaXNlY3NbdW5pdC50b0xvd2VyQ2FzZSgpXSA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgIC8vJGludGVydmFsLmNhbmNlbChjb3VudERvd25JbnRlcnZhbCk7XHJcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0Nhbm5vdCByZXBlYXQgdW5pdDogJyArIHVuaXQpO1xyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHVuaXRDb25zdGFudEZvck1pbGxpc2Vjcy5oYXNPd25Qcm9wZXJ0eSh1bml0LnRvTG93ZXJDYXNlKCkpID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdVbml0OiAnICsgdW5pdCArICcgaXMgbm90IHN1cHBvcnRlZC4gUGxlYXNlIHVzZSBmb2xsb3dpbmcgdW5pdHM6IHllYXIsIG1vbnRoLCB3ZWVrcywgZGF5cywgaG91cnMsIG1pbnV0ZXMsIHNlY29uZHMsIG1pbGxpc2Vjb25kcycpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gSWYgaXQgd2FzIHJlYWNoZWQsIGV2ZXJ5dGhpbmcgaXMgemVyb1xyXG4gICAgICAgIHVuaXRzTGVmdFt1bml0XSA9ICh0aGlzLndhc1JlYWNoZWQpID8gMCA6IHRvdGFsTWlsbGlzZWNzTGVmdCAvIHVuaXRDb25zdGFudEZvck1pbGxpc2Vjc1t1bml0LnRvTG93ZXJDYXNlKCldO1xyXG5cclxuICAgICAgICBpZiAobGFzdFVuaXQgPT09IHVuaXQpIHtcclxuICAgICAgICAgIHVuaXRzTGVmdFt1bml0XSA9IE1hdGguY2VpbCh1bml0c0xlZnRbdW5pdF0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB1bml0c0xlZnRbdW5pdF0gPSBNYXRoLmZsb29yKHVuaXRzTGVmdFt1bml0XSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0b3RhbE1pbGxpc2Vjc0xlZnQgLT0gdW5pdHNMZWZ0W3VuaXRdICogdW5pdENvbnN0YW50Rm9yTWlsbGlzZWNzW3VuaXQudG9Mb3dlckNhc2UoKV07XHJcbiAgICAgICAgdW5pdENvbnN0YW50Rm9yTWlsbGlzZWNzW3VuaXQudG9Mb3dlckNhc2UoKV0gPSBmYWxzZTtcclxuXHJcbiAgICAgICAgLy8gSWYgaXQncyBsZXNzIHRoYW4gMCwgcm91bmQgdG8gMFxyXG4gICAgICAgIHVuaXRzTGVmdFt1bml0XSA9ICh1bml0c0xlZnRbdW5pdF0gPiAwKSA/IHVuaXRzTGVmdFt1bml0XSA6IDA7XHJcblxyXG4gICAgICAgIHJldHVybk51bWJlcnMgKz0gJyAnICsgdW5pdHNMZWZ0W3VuaXRdICsgJyB8ICc7XHJcbiAgICAgICAgcmV0dXJuVGV4dCArPSAnICcgKyB1bml0O1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMudGV4dCA9PT0gbnVsbCB8fCAhdGhpcy50ZXh0KSB7XHJcbiAgICAgIHRoaXMudGV4dCA9IHtcclxuICAgICAgICBZZWFyOiAnWWVhcicsXHJcbiAgICAgICAgTW9udGg6ICdNb250aCcsXHJcbiAgICAgICAgV2Vla3M6ICdXZWVrcycsXHJcbiAgICAgICAgRGF5czogJ0RheXMnLFxyXG4gICAgICAgIEhvdXJzOiAnSG91cnMnLFxyXG4gICAgICAgIE1pbnV0ZXM6ICdNaW51dGVzJyxcclxuICAgICAgICBTZWNvbmRzOiAnU2Vjb25kcycsXHJcbiAgICAgICAgTWlsbGlTZWNvbmRzOiAnTWlsbGlzZWNvbmRzJ1xyXG4gICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuZGlzcGxheVN0cmluZyA9IHJldHVyblRleHRcclxuICAgICAgLnJlcGxhY2UoJ1llYXInLCB0aGlzLnRleHQuWWVhciArICcgfCAnKVxyXG4gICAgICAucmVwbGFjZSgnTW9udGgnLCB0aGlzLnRleHQuTW9udGggKyAnIHwgJylcclxuICAgICAgLnJlcGxhY2UoJ1dlZWtzJywgdGhpcy50ZXh0LldlZWtzICsgJyB8ICcpXHJcbiAgICAgIC5yZXBsYWNlKCdEYXlzJywgdGhpcy50ZXh0LkRheXMgKyAnIHwgJylcclxuICAgICAgLnJlcGxhY2UoJ0hvdXJzJywgdGhpcy50ZXh0LkhvdXJzICsgJyB8ICcpXHJcbiAgICAgIC5yZXBsYWNlKCdNaW51dGVzJywgdGhpcy50ZXh0Lk1pbnV0ZXMgKyAnIHwgJylcclxuICAgICAgLnJlcGxhY2UoJ1NlY29uZHMnLCB0aGlzLnRleHQuU2Vjb25kcyk7XHJcblxyXG4gICAgdGhpcy5kaXNwbGF5TnVtYmVycyA9IHJldHVybk51bWJlcnMuc3BsaXQoJ3wnKTtcclxuICAgIHRoaXMuZGlzcGxheSA9IHRoaXMuZGlzcGxheVN0cmluZy5zcGxpdCgnfCcpO1xyXG4gIH1cclxuXHJcbn1cclxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJzsgIFxyXG5pbXBvcnQgeyBDb3VudGRvd25Db21wb25lbnQgfSBmcm9tICcuL2NvdW50ZG93bi9jb3VudGRvd24uY29tcG9uZW50JztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZV0sXHJcbiAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICBDb3VudGRvd25Db21wb25lbnRcclxuICBdLFxyXG4gIGV4cG9ydHM6IFtcclxuICAgIENvdW50ZG93bkNvbXBvbmVudCxcclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDb3VudGRvd25Nb2R1bGUgeyB9XHJcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7SUErQkU7NkJBVGlDLEVBQUU7d0JBR04sS0FBSzt1QkFDTSxJQUFJLFlBQVksRUFBRTt1QkFDM0MsRUFBRTs4QkFDSyxFQUFFOzBCQUNGLEtBQUs7UUFHekIsV0FBVyxDQUFDLE1BQU0sSUFBSSxDQUFDLGNBQWMsRUFBRSxFQUFFLEdBQUcsQ0FBQyxDQUFDO0tBQy9DOzs7O0lBRUQsY0FBYztRQUNaLElBQUksSUFBSSxDQUFDLFVBQVU7WUFDakIsT0FB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