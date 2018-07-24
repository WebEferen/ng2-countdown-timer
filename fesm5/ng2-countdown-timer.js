import { Component, Input, Output, EventEmitter, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var CountdownComponent = /** @class */ (function () {
    function CountdownComponent() {
        var _this = this;
        this.displayString = '';
        this.showZero = false;
        this.reached = new EventEmitter();
        this.display = [];
        this.displayNumbers = [];
        this.wasReached = false;
        setInterval(function () { return _this._displayString(); }, 100);
    }
    /**
     * @return {?}
     */
    CountdownComponent.prototype._displayString = /**
     * @return {?}
     */
    function () {
        if (this.wasReached)
            return;
        if (typeof this.units === 'string') {
            this.units = this.units.split('|');
        }
        /** @type {?} */
        var givenDate = new Date(this.end);
        /** @type {?} */
        var now = new Date();
        /** @type {?} */
        var dateDifference = givenDate - now;
        if ((dateDifference < 100 && dateDifference > 0) || dateDifference < 0 && !this.wasReached) {
            this.wasReached = true;
            this.reached.next(now);
        }
        /** @type {?} */
        var lastUnit = this.units[this.units.length - 1];
        /** @type {?} */
        var unitConstantForMillisecs = {
            year: (((1000 * 60 * 60 * 24 * 7) * 4) * 12),
            month: ((1000 * 60 * 60 * 24 * 7) * 4),
            weeks: (1000 * 60 * 60 * 24 * 7),
            days: (1000 * 60 * 60 * 24),
            hours: (1000 * 60 * 60),
            minutes: (1000 * 60),
            seconds: 1000
        };
        /** @type {?} */
        var unitsLeft = {};
        /** @type {?} */
        var returnText = '';
        /** @type {?} */
        var returnNumbers = '';
        /** @type {?} */
        var totalMillisecsLeft = dateDifference;
        /** @type {?} */
        var i;
        /** @type {?} */
        var unit;
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
    };
    CountdownComponent.decorators = [
        { type: Component, args: [{
                    selector: 'countdown',
                    template: "<div class=\"countdown\">\n  <div *ngFor=\"let time of display; let i = index\" class=\"measurements {{time}}\">\n    <p class=\"measurements-number\">\n      {{ (showZero && displayNumbers[i] < 10) ? '0' + displayNumbers[i].trim() : displayNumbers[i]}}\n    </p>\n    <span *ngIf=\"display[i+1]\" class=\"divider\"> {{divider}} </span>\n    <p class=\"measurements-text\">\n      {{time}}\n    </p>\n  </div>\n</div>\n<ng-content></ng-content>",
                    styles: [".countdown{display:flex;align-items:center;justify-content:center;align-content:center;font-family:\"Helvetica Neue\",Helvetica,Arial,sans-serif}.countdown .measurements{flex:.1}.countdown .measurements .divider{float:right}"]
                },] },
    ];
    /** @nocollapse */
    CountdownComponent.ctorParameters = function () { return []; };
    CountdownComponent.propDecorators = {
        units: [{ type: Input }],
        end: [{ type: Input }],
        displayString: [{ type: Input }],
        text: [{ type: Input }],
        divider: [{ type: Input }],
        showZero: [{ type: Input }],
        reached: [{ type: Output }]
    };
    return CountdownComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var CountdownModule = /** @class */ (function () {
    function CountdownModule() {
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
    return CountdownModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

export { CountdownComponent, CountdownModule };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmcyLWNvdW50ZG93bi10aW1lci5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vbmcyLWNvdW50ZG93bi10aW1lci9saWIvY291bnRkb3duL2NvdW50ZG93bi5jb21wb25lbnQudHMiLCJuZzovL25nMi1jb3VudGRvd24tdGltZXIvbGliL2NvdW50ZG93bi5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnY291bnRkb3duJyxcclxuICB0ZW1wbGF0ZTogYDxkaXYgY2xhc3M9XCJjb3VudGRvd25cIj5cclxuICA8ZGl2ICpuZ0Zvcj1cImxldCB0aW1lIG9mIGRpc3BsYXk7IGxldCBpID0gaW5kZXhcIiBjbGFzcz1cIm1lYXN1cmVtZW50cyB7e3RpbWV9fVwiPlxyXG4gICAgPHAgY2xhc3M9XCJtZWFzdXJlbWVudHMtbnVtYmVyXCI+XHJcbiAgICAgIHt7IChzaG93WmVybyAmJiBkaXNwbGF5TnVtYmVyc1tpXSA8IDEwKSA/ICcwJyArIGRpc3BsYXlOdW1iZXJzW2ldLnRyaW0oKSA6IGRpc3BsYXlOdW1iZXJzW2ldfX1cclxuICAgIDwvcD5cclxuICAgIDxzcGFuICpuZ0lmPVwiZGlzcGxheVtpKzFdXCIgY2xhc3M9XCJkaXZpZGVyXCI+IHt7ZGl2aWRlcn19IDwvc3Bhbj5cclxuICAgIDxwIGNsYXNzPVwibWVhc3VyZW1lbnRzLXRleHRcIj5cclxuICAgICAge3t0aW1lfX1cclxuICAgIDwvcD5cclxuICA8L2Rpdj5cclxuPC9kaXY+XHJcbjxuZy1jb250ZW50PjwvbmctY29udGVudD5gLFxyXG4gIHN0eWxlczogW2AuY291bnRkb3due2Rpc3BsYXk6ZmxleDthbGlnbi1pdGVtczpjZW50ZXI7anVzdGlmeS1jb250ZW50OmNlbnRlcjthbGlnbi1jb250ZW50OmNlbnRlcjtmb250LWZhbWlseTpcIkhlbHZldGljYSBOZXVlXCIsSGVsdmV0aWNhLEFyaWFsLHNhbnMtc2VyaWZ9LmNvdW50ZG93biAubWVhc3VyZW1lbnRze2ZsZXg6LjF9LmNvdW50ZG93biAubWVhc3VyZW1lbnRzIC5kaXZpZGVye2Zsb2F0OnJpZ2h0fWBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDb3VudGRvd25Db21wb25lbnQge1xyXG5cclxuICBASW5wdXQoKSB1bml0czogYW55O1xyXG4gIEBJbnB1dCgpIGVuZDogYW55O1xyXG4gIEBJbnB1dCgpIGRpc3BsYXlTdHJpbmc6IFN0cmluZyA9ICcnO1xyXG4gIEBJbnB1dCgpIHRleHQ6IGFueTtcclxuICBASW5wdXQoKSBkaXZpZGVyOiBhbnk7XHJcbiAgQElucHV0KCkgc2hvd1plcm86IEJvb2xlYW4gPSBmYWxzZTtcclxuICBAT3V0cHV0KCkgcmVhY2hlZDogRXZlbnRFbWl0dGVyPERhdGU+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIGRpc3BsYXk6IGFueSA9IFtdO1xyXG4gIGRpc3BsYXlOdW1iZXJzOiBhbnkgPSBbXTtcclxuICB3YXNSZWFjaGVkOiBCb29sZWFuID0gZmFsc2U7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc2V0SW50ZXJ2YWwoKCkgPT4gdGhpcy5fZGlzcGxheVN0cmluZygpLCAxMDApO1xyXG4gIH1cclxuXHJcbiAgX2Rpc3BsYXlTdHJpbmcoKSB7XHJcbiAgICBpZiAodGhpcy53YXNSZWFjaGVkKVxyXG4gICAgICByZXR1cm47XHJcblxyXG4gICAgaWYgKHR5cGVvZiB0aGlzLnVuaXRzID09PSAnc3RyaW5nJykge1xyXG4gICAgICB0aGlzLnVuaXRzID0gdGhpcy51bml0cy5zcGxpdCgnfCcpO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCBnaXZlbkRhdGU6IGFueSA9IG5ldyBEYXRlKHRoaXMuZW5kKTtcclxuICAgIGxldCBub3c6IGFueSA9IG5ldyBEYXRlKCk7XHJcbiAgICBsZXQgZGF0ZURpZmZlcmVuY2U6IGFueSA9IGdpdmVuRGF0ZSAtIG5vdztcclxuXHJcbiAgICBpZiAoKGRhdGVEaWZmZXJlbmNlIDwgMTAwICYmIGRhdGVEaWZmZXJlbmNlID4gMCkgfHwgZGF0ZURpZmZlcmVuY2UgPCAwICYmICF0aGlzLndhc1JlYWNoZWQpIHtcclxuICAgICAgdGhpcy53YXNSZWFjaGVkID0gdHJ1ZTtcclxuICAgICAgdGhpcy5yZWFjaGVkLm5leHQobm93KTtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgbGFzdFVuaXQgPSB0aGlzLnVuaXRzW3RoaXMudW5pdHMubGVuZ3RoIC0gMV0sXHJcbiAgICAgIHVuaXRDb25zdGFudEZvck1pbGxpc2VjcyA9IHtcclxuICAgICAgICB5ZWFyOiAoKCgxMDAwICogNjAgKiA2MCAqIDI0ICogNykgKiA0KSAqIDEyKSxcclxuICAgICAgICBtb250aDogKCgxMDAwICogNjAgKiA2MCAqIDI0ICogNykgKiA0KSxcclxuICAgICAgICB3ZWVrczogKDEwMDAgKiA2MCAqIDYwICogMjQgKiA3KSxcclxuICAgICAgICBkYXlzOiAoMTAwMCAqIDYwICogNjAgKiAyNCksXHJcbiAgICAgICAgaG91cnM6ICgxMDAwICogNjAgKiA2MCksXHJcbiAgICAgICAgbWludXRlczogKDEwMDAgKiA2MCksXHJcbiAgICAgICAgc2Vjb25kczogMTAwMFxyXG4gICAgICB9LFxyXG4gICAgICB1bml0c0xlZnQgPSB7fSxcclxuICAgICAgcmV0dXJuVGV4dCA9ICcnLFxyXG4gICAgICByZXR1cm5OdW1iZXJzID0gJycsXHJcbiAgICAgIHRvdGFsTWlsbGlzZWNzTGVmdCA9IGRhdGVEaWZmZXJlbmNlLFxyXG4gICAgICBpLFxyXG4gICAgICB1bml0OiBhbnk7XHJcblxyXG4gICAgZm9yIChpIGluIHRoaXMudW5pdHMpIHtcclxuICAgICAgaWYgKHRoaXMudW5pdHMuaGFzT3duUHJvcGVydHkoaSkpIHtcclxuXHJcbiAgICAgICAgdW5pdCA9IHRoaXMudW5pdHNbaV0udHJpbSgpO1xyXG4gICAgICAgIGlmICh1bml0Q29uc3RhbnRGb3JNaWxsaXNlY3NbdW5pdC50b0xvd2VyQ2FzZSgpXSA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgIC8vJGludGVydmFsLmNhbmNlbChjb3VudERvd25JbnRlcnZhbCk7XHJcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0Nhbm5vdCByZXBlYXQgdW5pdDogJyArIHVuaXQpO1xyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHVuaXRDb25zdGFudEZvck1pbGxpc2Vjcy5oYXNPd25Qcm9wZXJ0eSh1bml0LnRvTG93ZXJDYXNlKCkpID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdVbml0OiAnICsgdW5pdCArICcgaXMgbm90IHN1cHBvcnRlZC4gUGxlYXNlIHVzZSBmb2xsb3dpbmcgdW5pdHM6IHllYXIsIG1vbnRoLCB3ZWVrcywgZGF5cywgaG91cnMsIG1pbnV0ZXMsIHNlY29uZHMsIG1pbGxpc2Vjb25kcycpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gSWYgaXQgd2FzIHJlYWNoZWQsIGV2ZXJ5dGhpbmcgaXMgemVyb1xyXG4gICAgICAgIHVuaXRzTGVmdFt1bml0XSA9ICh0aGlzLndhc1JlYWNoZWQpID8gMCA6IHRvdGFsTWlsbGlzZWNzTGVmdCAvIHVuaXRDb25zdGFudEZvck1pbGxpc2Vjc1t1bml0LnRvTG93ZXJDYXNlKCldO1xyXG5cclxuICAgICAgICBpZiAobGFzdFVuaXQgPT09IHVuaXQpIHtcclxuICAgICAgICAgIHVuaXRzTGVmdFt1bml0XSA9IE1hdGguY2VpbCh1bml0c0xlZnRbdW5pdF0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB1bml0c0xlZnRbdW5pdF0gPSBNYXRoLmZsb29yKHVuaXRzTGVmdFt1bml0XSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0b3RhbE1pbGxpc2Vjc0xlZnQgLT0gdW5pdHNMZWZ0W3VuaXRdICogdW5pdENvbnN0YW50Rm9yTWlsbGlzZWNzW3VuaXQudG9Mb3dlckNhc2UoKV07XHJcbiAgICAgICAgdW5pdENvbnN0YW50Rm9yTWlsbGlzZWNzW3VuaXQudG9Mb3dlckNhc2UoKV0gPSBmYWxzZTtcclxuXHJcbiAgICAgICAgLy8gSWYgaXQncyBsZXNzIHRoYW4gMCwgcm91bmQgdG8gMFxyXG4gICAgICAgIHVuaXRzTGVmdFt1bml0XSA9ICh1bml0c0xlZnRbdW5pdF0gPiAwKSA/IHVuaXRzTGVmdFt1bml0XSA6IDA7XHJcblxyXG4gICAgICAgIHJldHVybk51bWJlcnMgKz0gJyAnICsgdW5pdHNMZWZ0W3VuaXRdICsgJyB8ICc7XHJcbiAgICAgICAgcmV0dXJuVGV4dCArPSAnICcgKyB1bml0O1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMudGV4dCA9PT0gbnVsbCB8fCAhdGhpcy50ZXh0KSB7XHJcbiAgICAgIHRoaXMudGV4dCA9IHtcclxuICAgICAgICBZZWFyOiAnWWVhcicsXHJcbiAgICAgICAgTW9udGg6ICdNb250aCcsXHJcbiAgICAgICAgV2Vla3M6ICdXZWVrcycsXHJcbiAgICAgICAgRGF5czogJ0RheXMnLFxyXG4gICAgICAgIEhvdXJzOiAnSG91cnMnLFxyXG4gICAgICAgIE1pbnV0ZXM6ICdNaW51dGVzJyxcclxuICAgICAgICBTZWNvbmRzOiAnU2Vjb25kcycsXHJcbiAgICAgICAgTWlsbGlTZWNvbmRzOiAnTWlsbGlzZWNvbmRzJ1xyXG4gICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuZGlzcGxheVN0cmluZyA9IHJldHVyblRleHRcclxuICAgICAgLnJlcGxhY2UoJ1llYXInLCB0aGlzLnRleHQuWWVhciArICcgfCAnKVxyXG4gICAgICAucmVwbGFjZSgnTW9udGgnLCB0aGlzLnRleHQuTW9udGggKyAnIHwgJylcclxuICAgICAgLnJlcGxhY2UoJ1dlZWtzJywgdGhpcy50ZXh0LldlZWtzICsgJyB8ICcpXHJcbiAgICAgIC5yZXBsYWNlKCdEYXlzJywgdGhpcy50ZXh0LkRheXMgKyAnIHwgJylcclxuICAgICAgLnJlcGxhY2UoJ0hvdXJzJywgdGhpcy50ZXh0LkhvdXJzICsgJyB8ICcpXHJcbiAgICAgIC5yZXBsYWNlKCdNaW51dGVzJywgdGhpcy50ZXh0Lk1pbnV0ZXMgKyAnIHwgJylcclxuICAgICAgLnJlcGxhY2UoJ1NlY29uZHMnLCB0aGlzLnRleHQuU2Vjb25kcyk7XHJcblxyXG4gICAgdGhpcy5kaXNwbGF5TnVtYmVycyA9IHJldHVybk51bWJlcnMuc3BsaXQoJ3wnKTtcclxuICAgIHRoaXMuZGlzcGxheSA9IHRoaXMuZGlzcGxheVN0cmluZy5zcGxpdCgnfCcpO1xyXG4gIH1cclxuXHJcbn1cclxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJzsgIFxyXG5pbXBvcnQgeyBDb3VudGRvd25Db21wb25lbnQgfSBmcm9tICcuL2NvdW50ZG93bi9jb3VudGRvd24uY29tcG9uZW50JztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZV0sXHJcbiAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICBDb3VudGRvd25Db21wb25lbnRcclxuICBdLFxyXG4gIGV4cG9ydHM6IFtcclxuICAgIENvdW50ZG93bkNvbXBvbmVudCxcclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDb3VudGRvd25Nb2R1bGUgeyB9XHJcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7SUErQkU7UUFBQSxpQkFFQzs2QkFYZ0MsRUFBRTt3QkFHTixLQUFLO3VCQUNNLElBQUksWUFBWSxFQUFFO3VCQUMzQyxFQUFFOzhCQUNLLEVBQUU7MEJBQ0YsS0FBSztRQUd6QixXQUFXLENBQUMsY0FBTSxPQUFBLEtBQUksQ0FBQyxjQUFjLEVBQUUsR0FBQSxFQUFFLEdBQUcsQ0FBQyxDQUFDO0tBQy9DOzs7O0lBRUQsMkNBQWM7OztJQUFkO1FBQ0Us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