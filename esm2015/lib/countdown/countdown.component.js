/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
export class CountdownComponent {
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
if (false) {
    /** @type {?} */
    CountdownComponent.prototype.units;
    /** @type {?} */
    CountdownComponent.prototype.end;
    /** @type {?} */
    CountdownComponent.prototype.displayString;
    /** @type {?} */
    CountdownComponent.prototype.text;
    /** @type {?} */
    CountdownComponent.prototype.divider;
    /** @type {?} */
    CountdownComponent.prototype.showZero;
    /** @type {?} */
    CountdownComponent.prototype.reached;
    /** @type {?} */
    CountdownComponent.prototype.display;
    /** @type {?} */
    CountdownComponent.prototype.displayNumbers;
    /** @type {?} */
    CountdownComponent.prototype.wasReached;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY291bnRkb3duLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nMi1jb3VudGRvd24tdGltZXIvIiwic291cmNlcyI6WyJsaWIvY291bnRkb3duL2NvdW50ZG93bi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFrQnZFLE1BQU07SUFhSjs2QkFUaUMsRUFBRTt3QkFHTixLQUFLO3VCQUNNLElBQUksWUFBWSxFQUFFO3VCQUMzQyxFQUFFOzhCQUNLLEVBQUU7MEJBQ0YsS0FBSztRQUd6QixXQUFXLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxFQUFFLEdBQUcsQ0FBQyxDQUFDO0tBQy9DOzs7O0lBRUQsY0FBYztRQUNaLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7WUFDbEIsTUFBTSxDQUFDO1FBRVQsRUFBRSxDQUFDLENBQUMsT0FBTyxJQUFJLENBQUMsS0FBSyxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUM7WUFDbkMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUNwQzs7UUFFRCxJQUFJLFNBQVMsR0FBUSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7O1FBQ3hDLElBQUksR0FBRyxHQUFRLElBQUksSUFBSSxFQUFFLENBQUM7O1FBQzFCLElBQUksY0FBYyxHQUFRLFNBQVMsR0FBRyxHQUFHLENBQUM7UUFFMUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxjQUFjLEdBQUcsR0FBRyxJQUFJLGNBQWMsR0FBRyxDQUFDLENBQUMsSUFBSSxjQUFjLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7WUFDM0YsSUFBSSxD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QUFDO2FBQ3ZDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO2FBQ3pDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO2FBQzdDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUV6QyxJQUFJLENBQUMsY0FBYyxHQUFHLGFBQWEsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDL0MsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztLQUM5Qzs7O1lBNUhGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsV0FBVztnQkFDckIsUUFBUSxFQUFFOzs7Ozs7Ozs7OzswQkFXYztnQkFDeEIsTUFBTSxFQUFFLENBQUMsZ09BQWdPLENBQUM7YUFDM087Ozs7O29CQUdFLEtBQUs7a0JBQ0wsS0FBSzs0QkFDTCxLQUFLO21CQUNMLEtBQUs7c0JBQ0wsS0FBSzt1QkFDTCxLQUFLO3NCQUNMLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdjb3VudGRvd24nLFxyXG4gIHRlbXBsYXRlOiBgPGRpdiBjbGFzcz1cImNvdW50ZG93blwiPlxyXG4gIDxkaXYgKm5nRm9yPVwibGV0IHRpbWUgb2YgZGlzcGxheTsgbGV0IGkgPSBpbmRleFwiIGNsYXNzPVwibWVhc3VyZW1lbnRzIHt7dGltZX19XCI+XHJcbiAgICA8cCBjbGFzcz1cIm1lYXN1cmVtZW50cy1udW1iZXJcIj5cclxuICAgICAge3sgKHNob3daZXJvICYmIGRpc3BsYXlOdW1iZXJzW2ldIDwgMTApID8gJzAnICsgZGlzcGxheU51bWJlcnNbaV0udHJpbSgpIDogZGlzcGxheU51bWJlcnNbaV19fVxyXG4gICAgPC9wPlxyXG4gICAgPHNwYW4gKm5nSWY9XCJkaXNwbGF5W2krMV1cIiBjbGFzcz1cImRpdmlkZXJcIj4ge3tkaXZpZGVyfX0gPC9zcGFuPlxyXG4gICAgPHAgY2xhc3M9XCJtZWFzdXJlbWVudHMtdGV4dFwiPlxyXG4gICAgICB7e3RpbWV9fVxyXG4gICAgPC9wPlxyXG4gIDwvZGl2PlxyXG48L2Rpdj5cclxuPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PmAsXHJcbiAgc3R5bGVzOiBbYC5jb3VudGRvd257ZGlzcGxheTpmbGV4O2FsaWduLWl0ZW1zOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO2FsaWduLWNvbnRlbnQ6Y2VudGVyO2ZvbnQtZmFtaWx5OlwiSGVsdmV0aWNhIE5ldWVcIixIZWx2ZXRpY2EsQXJpYWwsc2Fucy1zZXJpZn0uY291bnRkb3duIC5tZWFzdXJlbWVudHN7ZmxleDouMX0uY291bnRkb3duIC5tZWFzdXJlbWVudHMgLmRpdmlkZXJ7ZmxvYXQ6cmlnaHR9YF1cclxufSlcclxuZXhwb3J0IGNsYXNzIENvdW50ZG93bkNvbXBvbmVudCB7XHJcblxyXG4gIEBJbnB1dCgpIHVuaXRzOiBhbnk7XHJcbiAgQElucHV0KCkgZW5kOiBhbnk7XHJcbiAgQElucHV0KCkgZGlzcGxheVN0cmluZzogU3RyaW5nID0gJyc7XHJcbiAgQElucHV0KCkgdGV4dDogYW55O1xyXG4gIEBJbnB1dCgpIGRpdmlkZXI6IGFueTtcclxuICBASW5wdXQoKSBzaG93WmVybzogQm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBPdXRwdXQoKSByZWFjaGVkOiBFdmVudEVtaXR0ZXI8RGF0ZT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgZGlzcGxheTogYW55ID0gW107XHJcbiAgZGlzcGxheU51bWJlcnM6IGFueSA9IFtdO1xyXG4gIHdhc1JlYWNoZWQ6IEJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzZXRJbnRlcnZhbCgoKSA9PiB0aGlzLl9kaXNwbGF5U3RyaW5nKCksIDEwMCk7XHJcbiAgfVxyXG5cclxuICBfZGlzcGxheVN0cmluZygpIHtcclxuICAgIGlmICh0aGlzLndhc1JlYWNoZWQpXHJcbiAgICAgIHJldHVybjtcclxuXHJcbiAgICBpZiAodHlwZW9mIHRoaXMudW5pdHMgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgIHRoaXMudW5pdHMgPSB0aGlzLnVuaXRzLnNwbGl0KCd8Jyk7XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IGdpdmVuRGF0ZTogYW55ID0gbmV3IERhdGUodGhpcy5lbmQpO1xyXG4gICAgbGV0IG5vdzogYW55ID0gbmV3IERhdGUoKTtcclxuICAgIGxldCBkYXRlRGlmZmVyZW5jZTogYW55ID0gZ2l2ZW5EYXRlIC0gbm93O1xyXG5cclxuICAgIGlmICgoZGF0ZURpZmZlcmVuY2UgPCAxMDAgJiYgZGF0ZURpZmZlcmVuY2UgPiAwKSB8fCBkYXRlRGlmZmVyZW5jZSA8IDAgJiYgIXRoaXMud2FzUmVhY2hlZCkge1xyXG4gICAgICB0aGlzLndhc1JlYWNoZWQgPSB0cnVlO1xyXG4gICAgICB0aGlzLnJlYWNoZWQubmV4dChub3cpO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCBsYXN0VW5pdCA9IHRoaXMudW5pdHNbdGhpcy51bml0cy5sZW5ndGggLSAxXSxcclxuICAgICAgdW5pdENvbnN0YW50Rm9yTWlsbGlzZWNzID0ge1xyXG4gICAgICAgIHllYXI6ICgoKDEwMDAgKiA2MCAqIDYwICogMjQgKiA3KSAqIDQpICogMTIpLFxyXG4gICAgICAgIG1vbnRoOiAoKDEwMDAgKiA2MCAqIDYwICogMjQgKiA3KSAqIDQpLFxyXG4gICAgICAgIHdlZWtzOiAoMTAwMCAqIDYwICogNjAgKiAyNCAqIDcpLFxyXG4gICAgICAgIGRheXM6ICgxMDAwICogNjAgKiA2MCAqIDI0KSxcclxuICAgICAgICBob3VyczogKDEwMDAgKiA2MCAqIDYwKSxcclxuICAgICAgICBtaW51dGVzOiAoMTAwMCAqIDYwKSxcclxuICAgICAgICBzZWNvbmRzOiAxMDAwXHJcbiAgICAgIH0sXHJcbiAgICAgIHVuaXRzTGVmdCA9IHt9LFxyXG4gICAgICByZXR1cm5UZXh0ID0gJycsXHJcbiAgICAgIHJldHVybk51bWJlcnMgPSAnJyxcclxuICAgICAgdG90YWxNaWxsaXNlY3NMZWZ0ID0gZGF0ZURpZmZlcmVuY2UsXHJcbiAgICAgIGksXHJcbiAgICAgIHVuaXQ6IGFueTtcclxuXHJcbiAgICBmb3IgKGkgaW4gdGhpcy51bml0cykge1xyXG4gICAgICBpZiAodGhpcy51bml0cy5oYXNPd25Qcm9wZXJ0eShpKSkge1xyXG5cclxuICAgICAgICB1bml0ID0gdGhpcy51bml0c1tpXS50cmltKCk7XHJcbiAgICAgICAgaWYgKHVuaXRDb25zdGFudEZvck1pbGxpc2Vjc1t1bml0LnRvTG93ZXJDYXNlKCldID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgLy8kaW50ZXJ2YWwuY2FuY2VsKGNvdW50RG93bkludGVydmFsKTtcclxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQ2Fubm90IHJlcGVhdCB1bml0OiAnICsgdW5pdCk7XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodW5pdENvbnN0YW50Rm9yTWlsbGlzZWNzLmhhc093blByb3BlcnR5KHVuaXQudG9Mb3dlckNhc2UoKSkgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1VuaXQ6ICcgKyB1bml0ICsgJyBpcyBub3Qgc3VwcG9ydGVkLiBQbGVhc2UgdXNlIGZvbGxvd2luZyB1bml0czogeWVhciwgbW9udGgsIHdlZWtzLCBkYXlzLCBob3VycywgbWludXRlcywgc2Vjb25kcywgbWlsbGlzZWNvbmRzJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBJZiBpdCB3YXMgcmVhY2hlZCwgZXZlcnl0aGluZyBpcyB6ZXJvXHJcbiAgICAgICAgdW5pdHNMZWZ0W3VuaXRdID0gKHRoaXMud2FzUmVhY2hlZCkgPyAwIDogdG90YWxNaWxsaXNlY3NMZWZ0IC8gdW5pdENvbnN0YW50Rm9yTWlsbGlzZWNzW3VuaXQudG9Mb3dlckNhc2UoKV07XHJcblxyXG4gICAgICAgIGlmIChsYXN0VW5pdCA9PT0gdW5pdCkge1xyXG4gICAgICAgICAgdW5pdHNMZWZ0W3VuaXRdID0gTWF0aC5jZWlsKHVuaXRzTGVmdFt1bml0XSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHVuaXRzTGVmdFt1bml0XSA9IE1hdGguZmxvb3IodW5pdHNMZWZ0W3VuaXRdKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRvdGFsTWlsbGlzZWNzTGVmdCAtPSB1bml0c0xlZnRbdW5pdF0gKiB1bml0Q29uc3RhbnRGb3JNaWxsaXNlY3NbdW5pdC50b0xvd2VyQ2FzZSgpXTtcclxuICAgICAgICB1bml0Q29uc3RhbnRGb3JNaWxsaXNlY3NbdW5pdC50b0xvd2VyQ2FzZSgpXSA9IGZhbHNlO1xyXG5cclxuICAgICAgICAvLyBJZiBpdCdzIGxlc3MgdGhhbiAwLCByb3VuZCB0byAwXHJcbiAgICAgICAgdW5pdHNMZWZ0W3VuaXRdID0gKHVuaXRzTGVmdFt1bml0XSA+IDApID8gdW5pdHNMZWZ0W3VuaXRdIDogMDtcclxuXHJcbiAgICAgICAgcmV0dXJuTnVtYmVycyArPSAnICcgKyB1bml0c0xlZnRbdW5pdF0gKyAnIHwgJztcclxuICAgICAgICByZXR1cm5UZXh0ICs9ICcgJyArIHVuaXQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy50ZXh0ID09PSBudWxsIHx8ICF0aGlzLnRleHQpIHtcclxuICAgICAgdGhpcy50ZXh0ID0ge1xyXG4gICAgICAgIFllYXI6ICdZZWFyJyxcclxuICAgICAgICBNb250aDogJ01vbnRoJyxcclxuICAgICAgICBXZWVrczogJ1dlZWtzJyxcclxuICAgICAgICBEYXlzOiAnRGF5cycsXHJcbiAgICAgICAgSG91cnM6ICdIb3VycycsXHJcbiAgICAgICAgTWludXRlczogJ01pbnV0ZXMnLFxyXG4gICAgICAgIFNlY29uZHM6ICdTZWNvbmRzJyxcclxuICAgICAgICBNaWxsaVNlY29uZHM6ICdNaWxsaXNlY29uZHMnXHJcbiAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5kaXNwbGF5U3RyaW5nID0gcmV0dXJuVGV4dFxyXG4gICAgICAucmVwbGFjZSgnWWVhcicsIHRoaXMudGV4dC5ZZWFyICsgJyB8ICcpXHJcbiAgICAgIC5yZXBsYWNlKCdNb250aCcsIHRoaXMudGV4dC5Nb250aCArICcgfCAnKVxyXG4gICAgICAucmVwbGFjZSgnV2Vla3MnLCB0aGlzLnRleHQuV2Vla3MgKyAnIHwgJylcclxuICAgICAgLnJlcGxhY2UoJ0RheXMnLCB0aGlzLnRleHQuRGF5cyArICcgfCAnKVxyXG4gICAgICAucmVwbGFjZSgnSG91cnMnLCB0aGlzLnRleHQuSG91cnMgKyAnIHwgJylcclxuICAgICAgLnJlcGxhY2UoJ01pbnV0ZXMnLCB0aGlzLnRleHQuTWludXRlcyArICcgfCAnKVxyXG4gICAgICAucmVwbGFjZSgnU2Vjb25kcycsIHRoaXMudGV4dC5TZWNvbmRzKTtcclxuXHJcbiAgICB0aGlzLmRpc3BsYXlOdW1iZXJzID0gcmV0dXJuTnVtYmVycy5zcGxpdCgnfCcpO1xyXG4gICAgdGhpcy5kaXNwbGF5ID0gdGhpcy5kaXNwbGF5U3RyaW5nLnNwbGl0KCd8Jyk7XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=